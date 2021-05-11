const request = require("supertest");
const { app } = require("../../../../shared/infra/http/app");

describe("List 5 oldest repositories from user takenet using C# as language", () => {
  it("should be able to list 5 repositories", async () => {
    const response = await request(app).get("/github/search");

    expect(response.status).toBe(200);
  });
});
