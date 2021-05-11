const RepoMap = require("../../mapper/RepoMap");

class SearchGithubReposUseCase {
  constructor(gitHubApiRepository) {
    this.gitHubApiRepository = gitHubApiRepository;
  }

  async execute() {
    const response = await this.gitHubApiRepository.get(
      "/search/repositories?q=language:CSharp+user:takenet"
    );

    const repos = [...response.data.items];

    const sortedRepos = repos
      .sort(
        (repo1, repo2) =>
          new Date(repo1.created_at) - new Date(repo2.created_at)
      )
      .slice(0, 5)
      .map((repo) => RepoMap.toDTO(repo));

    return Object.assign({}, sortedRepos);
  }
}

module.exports = { SearchGithubReposUseCase };
