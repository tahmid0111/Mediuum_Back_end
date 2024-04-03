// initial packages
const express = require("express");
const app = express();
// imported helpers
const securityMiddleware = require("./src/helpers/important/security.helper");
const { connectDB } = require("./src/helpers/important/common.helper");
const { RouterImplement } = require("./src/helpers/important/router.helper");
const { env_port } = require("./src/helpers/important/dotenv.helper");

// implementing security middlewares
securityMiddleware(app);

// database connection
connectDB();

// routing implement
RouterImplement(app);

// error routing implement
app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "wrong connection" });
});

app.listen(env_port, () => {
  console.log(`server is running`);
});
