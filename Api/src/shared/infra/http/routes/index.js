const { Router } = require("express");

const { githubRoutes } = require("./github.routes");

const router = Router();

router.use("/github", githubRoutes);

module.exports = { router };
