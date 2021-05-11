require("dotenv/config");

const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../../../../swagger.json");
const { router } = require("./routes");

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

module.exports = { app };
