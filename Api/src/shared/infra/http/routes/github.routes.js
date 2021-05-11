const { Router } = require("express");

const {
  SearchGithubReposController,
} = require("../../../../modules/githubRepos/useCases/searchGithubRepos/SearchGithubReposController");

const githubRoutes = Router();

const searchGithubReposController = new SearchGithubReposController();

githubRoutes.get("/search", searchGithubReposController.handle);

module.exports = { githubRoutes };
