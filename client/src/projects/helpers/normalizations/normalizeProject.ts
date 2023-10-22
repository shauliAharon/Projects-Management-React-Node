import { ProjectFromClientType } from "../../models/types/projectTypes";

const normalizeProject = (project: ProjectFromClientType) => {
  return {
    title: project.title,
    subtitle: project.subtitle,
    description: project.description,
    phone: project.phone,
    email: project.email,
    webUrl: project.webUrl,
    imageAlt: project.imageAlt,
    imageUrl: project.imageUrl,
    missionMode: project.missionMode,
    dueDate: project.dueDate,
  };
};

export default normalizeProject;
