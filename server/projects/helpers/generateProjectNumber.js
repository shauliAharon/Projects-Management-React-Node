const lodash = require("lodash");
const Project = require("../models/mongoose/Project");

const generateProjectNumber = async () => {
  try {
    const random = lodash.random(1_000_000, 9_999_999);
    const project = await Project.findOne(
      { projectNumber: random },
      { projectNumber: 1, _id: 0 }
    );
    if (project) return generateProjectNumber();
    return random;
  } catch (error) {
    return Promise.reject(`Mongoose Error: ${error.message}`);
  }
};

exports.generateProjectNumber = generateProjectNumber;
