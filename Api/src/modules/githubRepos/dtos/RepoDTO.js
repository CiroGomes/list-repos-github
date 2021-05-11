class RepoDTO {
  constructor({ name, description, owner }) {
    this.name = name;
    this.description = description;
    this.avatar_url = owner.avatar_url || "";
  }
}

module.exports = { RepoDTO };
