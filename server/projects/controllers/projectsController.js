const { handleError } = require("../../utils/handleErrors");
const normalizeProject = require("../helpers/normalizeProject");
const validateProject = require("../models/joi/validateProject");
const Project = require("../models/mongoose/Project");

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: "descending" });
    if (!projects) throw new Error("is no have a projects in the database");
    return res.send(projects);
  } catch (error) {
    return handleError(res, 500, `Mongoose Error: ${error.message}`);
  }
};
const getProject = async (req, res, next) => {
  try {
    const id = req.params.projectId;
    const project = await Project.findById(id);
    if (!project) throw new Error("Project whit this id not exist");
    if (!req.user) return res.status(201).send(project);
    req.project = project;
    next();
  } catch (error) {
    handleError(res, 403, error.message);
  }
};
const getmyProjects = async (req, res) => {
  try {
    const { _id } = req.user;
    const myProjects = await Project.find({ user_id: _id });
    if (!myProjects)
      throw new Error("this user does not have projects in the database");
    res.status(201).send(myProjects);
  } catch (error) {
    handleError(res, 403, error.message);
  }
};
const editProject = async (req, res) => {
  try {
    const project = req.project;
    const { _id } = req.user;

    if (`${project.user_id}` !== _id)
      throw new Error("Only the user who created the project can make changes");

    const projectFromClient = req.body;

    const editprojectObject = await Project.findByIdAndUpdate(
      project._id.toString(),
      projectFromClient,
      {
        new: true,
      }
    );

    if (!editprojectObject)
      throw new Error("There was an error updating the business project");

    res.status(201).send(editprojectObject);
  } catch (error) {
    handleError(res, 403, error.message);
  }
};
const likeProject = async (req, res) => {
  try {
    const userId = req.user._id;
    const id = req.params.projectId;
    const project = await Project.findById(id);
    if (!project)
      throw new Error("A project with this ID cannot be found in the database");
    const projectLikes = project.likes.findIndex((id) => id === userId);

    if (projectLikes === -1) {
      project.likes.push(userId);
      project.save();
    }
    if (projectLikes >= 0) {
      project.likes.splice(projectLikes, projectLikes + 1);
      project.save();
    }

    res.status(201).send(project);
  } catch (error) {
    handleError(res, 400, error.message);
  }
};

const deleteProject = async (req, res) => {
  try {
    const user = req.user;
    const { projectId } = req.params;
    const project = await Project.findById(projectId);
    if (!user.isAdmin && user._id !== `${project.user_id}`)
      throw new Error(
        "Only an admin user or the user who created this project is authorized to perform this action"
      );
    const deleteProject = await Project.findByIdAndDelete(projectId);
    if (!deleteProject) throw new Error("user id not found");
    res.status(201).send(deleteProject);
  } catch (error) {
    handleError(res, 403, `mongoDB Error: ${error.message}`);
  }
};

const createProject = async (req, res) => {
  try {
    const project = req.body;
    const user = req.user;
    if (!user.isBusiness)
      throw new Error(
        "You must be a business type user in order to create a new business Project"
      );
    const { error } = validateProject(project);
    if (error)
      return handleError(res, 400, `Joi Error: ${error.details[0].message}`);
    const normalizedProject = await normalizeProject(project, user._id);
    const projectToDB = new Project(normalizedProject);
    const projectFromDB = await projectToDB.save();
    res.send(projectFromDB);
  } catch (error) {
    return handleError(res, 500, `Mongoose Error: ${error.message}`);
  }
};

exports.getProjects = getProjects;
exports.getProject = getProject;
exports.createProject = createProject;
exports.getmyProjects = getmyProjects;
exports.editProject = editProject;
exports.likeProject = likeProject;
exports.deleteProject = deleteProject;
