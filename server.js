// initial packages
const express = require("express");
const app = express();
// importing configerations
const securityMiddleware = require("./src/config/security.config");
const { connectDB } = require("./src/config/db.config");
const { env_port } = require("./src/config/dotenv.config");
// importing routers
const userRouter = require('./src/routes/user.router')
const writerRouter = require('./src/routes/writer.router')
const blogRouter = require('./src/routes/blog.router')
const otpRouter = require('./src/routes/otp.router')
const managerRouter = require('./src/routes/manager.router')
const adminRouter = require('./src/routes/admin.router')

// implementing security middlewares
securityMiddleware(app);

// database connection
connectDB();

// routing implement
app.use("/user/api/v1", userRouter);
app.use("/writer/api/v1", writerRouter);
app.use("/blog/api/v1", blogRouter);
app.use("/otp/api/v1", otpRouter);
// routing for admin and managers
app.use("/manager/api/v1", managerRouter);
app.use("/admin/api/v1", adminRouter);


// error routing implement
app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "wrong connection" });
});

app.listen(env_port, () => {
  console.log(`server is running`);
});
