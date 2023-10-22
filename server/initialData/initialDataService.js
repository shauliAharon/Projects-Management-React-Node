const normalizeProject = require("../projects/helpers/normalizeProject");
const validateProject = require("../projects/models/joi/validateProject");
const Project = require("../projects/models/mongoose/Project");
const normalizeUser = require("../users/helpers/normalizeUser");
const registerValidation = require("../users/models/joi/registerValidation");
const User = require("../users/models/mongoose/User");
const data = require("./initialData.json");
const chalk = require("chalk");

const generateInitialProjects = async () => {
  const { projects } = data;
  const userId = "649d3238bac95e85fa0f0546";
  projects.forEach(async project => {
    try {
      const { error } = validateProject(project);
      if (error) throw new Error(`Joi Error: ${error.details[0].message}`);
      const normalizedProject = await normalizeProject(project, userId);
      
const projectToDB = new Project(normalizedProject);
await projectToDB.save();

      console.log(
        chalk.greenBright(`Generate project '${project.title}' successfully`)
      );
    } catch (error) {
      null
      console.log(
        chalk.redBright(`Initial Data Generate project Error: ${error.message}`)
      );
    }
  });
};

const generateInitialUsers = async () => {
  const { users } = data;

  users.forEach(async user => {
    try {
      const { error } = registerValidation(user);
      if (error) throw new Error(`Joi Error: ${error.details[0].message}`);

const normalizedUser = normalizeUser(user);


      const userForBD = new User(normalizedUser);
      await userForBD.save();
      console.log(
        chalk.greenBright(
          `Generate User '${
            user.name.first + " " + user.name.last
          }' successfully`
        )
      );
    } catch (error) {
      null
    }
  });
};

exports.generateInitialProjects = generateInitialProjects;
exports.generateInitialUsers = generateInitialUsers;
