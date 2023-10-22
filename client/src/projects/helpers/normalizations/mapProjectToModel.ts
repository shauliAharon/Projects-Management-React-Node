
import ProjectInterface from "../../models/interfaces/ProjectInterface";
import {
  ProjectMapToModelType,
} from "../../models/types/projectTypes";

const mapProjectToModel = (
  project: ProjectInterface
): ProjectMapToModelType => {
  return {
    _id: project._id,
    title: project.title,
    subtitle: project.subtitle,
    description: project.description,
    phone: project.phone,
    email: project.email,
    webUrl: project.webUrl,
  imageUrl:project.imageUrl,
  imageAlt:project.imageAlt,
    dueDate: project.dueDate,
    missionMode: project.missionMode,
    user_id: project.user_id,
    projectNumber: project.projectNumber,
  };
};

export default mapProjectToModel;
