// importing routers
const userRouter = require('../../routes/user.router')
const writerRouter = require("../../routes/writer.router");
const blogRouter = require("../../routes/blog.router");
const otpRouter = require("../../routes/otp.router");
const managerRouter = require("../../routes/manager.router");
const adminRouter = require("../../routes/admin.router");

exports.RouterImplement = async (app) => {
  app.use("/user/api/v1", userRouter);
  app.use("/writer/api/v1", writerRouter);
  app.use("/blog/api/v1", blogRouter);
  app.use("/otp/api/v1", otpRouter);
  // routing for admin and managers
  app.use("/manager/api/v1", managerRouter);
  app.use("/admin/api/v1", adminRouter);
};
