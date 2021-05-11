const { RepoDTO } = require("../dtos/RepoDTO");

class RepoMap {
  static toDTO(repo) {
    const repoDto = new RepoDTO(repo);

    return repoDto;
  }
}

module.exports = RepoMap;
