import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useForm from "../../forms/hooks/useForm";
import initialProjectForm from "../helpers/initialForms/initialCreateProjectObject";
import useProjects from "../hooks/useProjects";
import { useUser } from "../../users/providers/UserProvider";
import { useNavigate, Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { Container } from "@mui/material";
import ProjectForm from "../components/ProjectForm";
import projectEditSchema from "../models/Joi/projectEditSchema";
import mapProjectToModel from "../helpers/normalizations/mapProjectToModel";

export const EditProjectPage = () => {
  const { user } = useUser();
  const { projectId } = useParams();
  const { handleUpdateProject, handleGetProject } = useProjects();

  const navigate = useNavigate();

  const { value, ...rest } = useForm(
    initialProjectForm,
    projectEditSchema,
    handleUpdateProject
  );

  const { data, errors } = value;
  const { handleInputChange, handleReset, onSubmit, setData, validateForm } =
    rest;

  useEffect(() => {
    if (projectId)
      handleGetProject(projectId).then((projectFromServer) => {
        if (user?._id !== projectFromServer!.user_id)
          return navigate(ROUTES.ROOT);
        const modeledProject = mapProjectToModel(projectFromServer!);
        setData(modeledProject);
      });
  }, []);

  if (!user) return <Navigate replace to={ROUTES.ROOT} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ProjectForm
        title="edit Project"
        onSubmit={onSubmit}
        onReset={handleReset}
        errors={errors}
        onFormChange={validateForm}
        onInputChange={handleInputChange}
        data={data}
      />
    </Container>
  );
};
