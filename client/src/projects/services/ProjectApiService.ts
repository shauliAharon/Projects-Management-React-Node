import axios from "axios";
import ProjectInterface from "../models/interfaces/ProjectInterface";
import { NormalizedEditProject } from "../models/types/projectTypes";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8181";

export const getProjects = async () => {
  try {
    const { data } = await axios.get<ProjectInterface[]>(`${apiUrl}/Projects`);
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    console.error(error);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const getMyProjects = async () => {
  try {
    const { data } = await axios.get<ProjectInterface[]>(
      `${apiUrl}/Projects/my-Projects`
    );
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const getProject = async (ProjectId: string) => {
  try {
    const { data } = await axios.get<ProjectInterface>(
      `${apiUrl}/Projects/${ProjectId}`
    );
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const createProject = async (normalizedProject: object) => {
  try {
    const { data } = await axios.post(`${apiUrl}/Projects`, normalizedProject);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
  }
};

export const deleteProject = async (ProjectId: string) => {
  try {
    const { data } = await axios.delete(`${apiUrl}/Projects/${ProjectId}`);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
  }
};

export const editProject = async (normalizedProject: NormalizedEditProject) => {
  try {
    const ProjectToServer = { ...normalizedProject };
    delete ProjectToServer._id;
    const { data } = await axios.put<ProjectInterface>(
      `${apiUrl}/Projects/${normalizedProject._id}`,
      ProjectToServer
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
  }
};

export const changeLikeStatus = async (ProjectId : ProjectInterface) => {
  try {
    const { data } = await axios.patch(`${apiUrl}/Projects/${ProjectId}`);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }

  
};

export const changeDoneStatus = async (ProjectId : ProjectInterface) => {
  try {
    const { data } = await axios.patch(`${apiUrl}/Projects/${ProjectId}`);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }

  
};
