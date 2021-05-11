const axios = require("axios");

const baseURL = process.env.GITHUB_API_URL;

const GitHubApiRepository = axios.create({ baseURL });

module.exports = { GitHubApiRepository };
