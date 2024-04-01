// initial packages
const express = require("express");
const app = express();
// importing routers
const userRouter = require("./src/routes/user/user.router");
const writerRouter = require("./src/routes/user/writer.router");
const blogRouter = require("./src/routes/blog/blog.router");
const otpRouter = require("./src/routes/otp/otp.router");
// imported helpers
const securityMiddleware = require("./src/helpers/important/security.helper");
const { connectDB } = require("./src/helpers/important/common.helper");

// implementing security middlewares
securityMiddleware(app);

// database connection
connectDB();

// routing implement
app.use("/user/api/v1", userRouter);
app.use("/writer/api/v1", writerRouter);
app.use("/product/api/v1", blogRouter);
app.use("/otp/api/v1", otpRouter);

// error routing implement
app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "wrong connection" });
});

module.exports = app;
