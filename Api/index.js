const https = require("https");

exports.handler = async () => {
  const promise = new Promise(function (resolve, reject) {
    https
      .get(
        "https://api.github.com/search/repositories?q=language:CSharp+user:takenet",
        {
          headers: {
            "User-Agent": "request",
          },
        },
        (res) => {
          let result = "";

          res.on("data", (d) => {
            result += d.toString();
          });

          res.on("end", () => {
            result = JSON.parse(result);

            const repos = [...result.items];

            const sortedRepos = repos
              .sort(
                (repo1, repo2) =>
                  new Date(repo1.created_at) - new Date(repo2.created_at)
              )
              .slice(0, 5)
              .map((repo) => ({
                name: repo.name,
                description: repo.description,
                avatar_url: repo.owner?.avatar_url || "",
              }));

            resolve(Object.assign({}, sortedRepos));
          });
        }
      )
      .on("error", (e) => {
        reject(Error(e));
      });
  });

  return promise;
};
