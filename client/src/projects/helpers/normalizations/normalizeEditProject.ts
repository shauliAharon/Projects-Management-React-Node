import { ProjectMapToModelType } from "../../models/types/projectTypes";

const normalizeEditProject = (project: ProjectMapToModelType) => {
  return {
    _id: project._id,
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
    projectNumber: project.projectNumber,
    user_id: project.user_id,
  };
};

export default normalizeEditProject;
