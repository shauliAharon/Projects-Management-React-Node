const { generateProjectNumber } = require("./generateProjectNumber");

const normalizeProject = async (rawProject, userId) => {

const imageUrl =   rawProject.imageUrl ||
"https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg"
    const imageAlt = rawProject.imageAlt || "Project image";

  return {
    ...rawProject,
    webUrl: rawProject.webUrl || "",
    imageUrl,
    imageAlt,
    projectNumber: rawProject.projectNumber || (await generateProjectNumber()),
    user_id: rawProject.user_id || userId,
  };
};

module.exports = normalizeProject;
