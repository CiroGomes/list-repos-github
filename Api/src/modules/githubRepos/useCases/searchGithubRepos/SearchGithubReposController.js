const { SearchGithubReposUseCase } = require("./SearchGithubReposUseCase");

const {
  GitHubApiRepository,
} = require("../../repositories/GitHubApiRepository");

class SearchGithubReposController {
  async handle(request, response) {
    const authenticateUserUseCase = new SearchGithubReposUseCase(
      GitHubApiRepository
    );
    const token = await authenticateUserUseCase.execute();

    return response.json(token);
  }
}

module.exports = { SearchGithubReposController };
