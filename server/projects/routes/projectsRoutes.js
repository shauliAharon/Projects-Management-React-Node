const express = require("express");
const {
  getProjects,
  getProject,
  createProject,deleteProject,editProject,likeProject, getmyProjects
} = require("../controllers/projectsController");
const auth = require("../../auth/authService");
const router = express.Router();

router.put("/:projectId",auth, getProject ,editProject);
router.get("/my-projects",auth,getmyProjects); 
router.get("/", getProjects);
router.get("/:projectId", getProject);
router.post("/", auth, createProject);
router.patch("/:projectId", auth, likeProject);
router.delete("/:projectId",auth, deleteProject);

module.exports = router;
