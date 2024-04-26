// initial packages
const express = require("express");
const app = express();
// importing configeration
const securityMiddleware = require("./src/config/security.config");
const { connectDB } = require("./src/config/db.config");
const { RouterImplement } = require("./src/config/router.config");
const { env_port } = require("./src/config/dotenv.config");

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
