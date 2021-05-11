const { SearchGithubReposUseCase } = require("./SearchGithubReposUseCase");

const {
  GitHubApiRepository,
} = require("../../repositories/GitHubApiRepository");

class SearchGithubReposController {
  async handle(request, response) {
    const searchGithubReposUseCase = new SearchGithubReposUseCase(
      GitHubApiRepository
    );
    const repos = await searchGithubReposUseCase.execute();

    return response.json(repos);
  }
}

module.exports = { SearchGithubReposController };
