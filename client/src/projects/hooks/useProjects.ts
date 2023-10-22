import { useCallback, useState, useMemo, useEffect } from "react";
import {
  changeLikeStatus,
  createProject,
  deleteProject,
  editProject,
  getProject,
  getProjects,
  getMyProjects,
} from "../services/ProjectApiService";
import useAxios from "../../hooks/useAxios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSnack } from "../../providers/SnackbarProvider";
import ROUTES from "../../routes/routesModel";
import ProjectInterface from "../models/interfaces/ProjectInterface";
import {
  ProjectFromClientType,
  ProjectMapToModelType,
} from "../models/types/projectTypes";
import normalizeEditProject from "../helpers/normalizations/normalizeEditProject";
import { useUser } from "../../users/providers/UserProvider";
import normalizeProject from "../helpers/normalizations/normalizeProject";

type ProjectsType = null | ProjectInterface[];
type ProjectType = null | ProjectInterface;
type ErrorType = null | string;

const useProjects = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorType>(null);
  const [projects, setProjects] = useState<ProjectsType>(null);
  const [project, setProject] = useState<ProjectType>(null);
  const [query, setQuery] = useState<ProjectType | any>("");
  const [filteredProject, setFilter] = useState<ProjectType | any>("");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  useEffect(() => {
    if (projects) {
      setFilter(
        projects.filter(
          (project) =>
            project.title.includes(query) ||
            String(project.projectNumber).includes(query) ||
            project.subtitle.includes(query) ||
            project.description.includes(query)
        )
      );
    }
  }, [projects, query]);

  useAxios();
  const { user } = useUser();
  const navigate = useNavigate();
  const snack = useSnack();

  const requestStatus = (
    loading: boolean,
    errorMessage: ErrorType,
    projects: ProjectsType,
    project: ProjectType = null
  ) => {
    setLoading(loading);
    setError(errorMessage);
    setProjects(projects);
    setProject(project);
  };

  const handleGetProjects = useCallback(async () => {
    try {
      setLoading(true);
      const projects = await getProjects();
      requestStatus(false, null, projects);
    } catch (error) {
      if (typeof error === "string") return requestStatus(false, error, null);
    }
  }, []);

  const handleGetMyProjects = useCallback(async () => {
    try {
      setLoading(true);
      const projects = await getMyProjects();
      requestStatus(false, null, projects);
    } catch (error) {
      if (typeof error === "string") return requestStatus(false, error, null);
    }
  }, []);

  const handleGetProject = async (projectId: string) => {
    try {
      setLoading(true);
      const project = await getProject(projectId);
      requestStatus(false, null, null, project);
      return project;
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null);
    }
  };

  const handleCreateProject = useCallback(
    async (projectFromClient: ProjectFromClientType) => {
      try {
        setLoading(true);
        const normalizedProject = normalizeProject(projectFromClient);
        const project = await createProject(normalizedProject);
        requestStatus(false, null, null, project);
        snack("success", "A new Project has been created");
        navigate(ROUTES.MY_PROJECTS);
      } catch (error) {
        if (typeof error === "string") return requestStatus(false, error, null);
      }
    },
    []
  );

  const handleDeleteProject = useCallback(async (projectId: string) => {
    try {
      setLoading(true);
      await deleteProject(projectId);
      snack("success", "The Project has been successfully deleted");
    } catch (error) {
      if (typeof error === "string") return requestStatus(false, error, null);
    }
  }, []);

  const handleUpdateProject = useCallback(
    async (projectFromClient: ProjectMapToModelType) => {
      try {
        setLoading(true);
        const normalizedProject = normalizeEditProject(projectFromClient);

        const projectFomServer = await editProject(normalizedProject);
        requestStatus(false, null, null, projectFomServer);

        snack("success", "The Project has been successfully updated");
        navigate(ROUTES.MY_PROJECTS);
      } catch (error) {
        if (typeof error === "string") return requestStatus(false, error, null);
      }
    },
    []
  );

  const handleGetFavProjects = useCallback(async () => {
    try {
      setLoading(true);

      const projects = await getProjects();

      const favProjects = projects.filter(
        (project: ProjectInterface) =>
          !!project.likes.find((id) => id === user?._id)
      );

      requestStatus(false, null, favProjects);
    } catch (error) {
      if (typeof error === "string") return requestStatus(false, error, null);
    }
  }, []);
  const handleLikeProject = useCallback(
    async (projectId: ProjectInterface | string | any) => {
      try {
        const project = await changeLikeStatus(projectId);
        requestStatus(false, null, projects, project);
      } catch (error) {
        if (typeof error === "string") requestStatus(false, error, null);
      }
    },
    []
  );

  const value = useMemo(() => {
    return { isLoading, projects, project, error, filteredProject };
  }, [isLoading, projects, project, error, filteredProject]);

  return {
    value,
    handleGetProjects,
    handleGetMyProjects,
    handleGetProject,
    handleCreateProject,
    handleDeleteProject,
    handleUpdateProject,
    handleGetFavProjects,
    handleLikeProject,
  };
};

export default useProjects;
