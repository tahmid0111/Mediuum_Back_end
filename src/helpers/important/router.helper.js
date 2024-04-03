// importing routers
const userRouter = require('../../routes/user/user.router')
const writerRouter = require("../../routes/user/writer.router");
const blogRouter = require("../../routes/blog/blog.router");
const otpRouter = require("../../routes/otp/otp.router");
const managerRouter = require("../../routes/admin/manager.router");
const adminRouter = require("../../routes/admin/admin.router");

exports.RouterImplement = async (app) => {
  app.use("/user/api/v1", userRouter);
  app.use("/writer/api/v1", writerRouter);
  app.use("/blog/api/v1", blogRouter);
  app.use("/otp/api/v1", otpRouter);
  // routing for admin and managers
  app.use("/manager/api/v1", managerRouter);
  app.use("/admin/api/v1", adminRouter);
};
