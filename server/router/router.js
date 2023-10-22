const express = require("express");
const router = express.Router();
const projectsRoutes = require("../projects/routes/projectsRoutes");
const usersRoutes = require("../users/routes/usersRoutes");
const { handleError } = require("../utils/handleErrors");

router.use("/projects", projectsRoutes);
router.use("/users", usersRoutes);

router.use((req, res) => handleError(res));


module.exports = router;
