const {
  sendErrorResponse,
  sendResponse,
} = require("../helpers/important/common.helper");
const {
  RegistrationService,
  LoginService,
  ReadUserService,
  UpdateUserService,
  UpdatePasswordService,
  DeactivateUserService,
  DeleteUserService,
  RecoveryPasswordService,
  AddExpressionService,
  CreateCommentService,
  ReportByUserService,
  ReadAllReportByUserService,
  LogoutService,
  ReactivateUserService,
  WithrawReportByUserService,
  ReadAllFollowingService,
  FollowWriterService,
  DeleteCommentByUserService,
} = require("../services/user.service");

exports.Registration = async (req, res) => {
  let result = await RegistrationService(req);

  const responseStatus = result.status;
  const messages = {
    success: "User Successfully Registered",
    notVerified: "Your email is not varified",
    weakPassword: "Use a strong Password",
    existingUser: "An account is already registered with this email",
    fail: "Something went wrong",
  };

  const message = messages[responseStatus];
  const data = responseStatus === "success" ? result.data : undefined;

  res.status(responseStatus === "success" ? 200 : 404).json({
    status: responseStatus,
    message,
    data,
  });
};

exports.Login = async (req, res) => {
  let result = await LoginService(req, res);

  const responseStatus = result.status;
  const messages = {
    success: "Login Successfull",
    newUser: "There is no account associated with this Email",
    deactivated: "Your account is deacticated",
    incorrectPassword: "Incorrect Password",
    fail: "Something went wrong",
  };

  const message = messages[responseStatus];
  const data = responseStatus === "success" ? result.data : undefined;

  res.status(responseStatus === "success" ? 200 : 404).json({
    status: responseStatus,
    message,
    data,
  });
};

exports.Logout = async (req, res) => {
  let result = await LogoutService(req, res);

  result.status === "success"
    ? sendResponse(res, "Logout Success!")
    : sendErrorResponse(res);
};

exports.ReadUser = async (req, res) => {
  let result = await ReadUserService(req);

  result.status === "success"
    ? sendResponse(res, "Your expected data is here!", result.data)
    : sendErrorResponse(res);
};

exports.UpdateUser = async (req, res) => {
  let result = await UpdateUserService(req);

  result.status === "success"
    ? sendResponse(res, "Your data has been successfully updated!")
    : sendErrorResponse(res);
};

exports.UpdatePassword = async (req, res) => {
  let result = await UpdatePasswordService(req);

  const responseStatus = result.status;
  const messages = {
    success: "Password updated successfully",
    incorrectPassword: "Incorrect password",
    samePassword: "Try a new password",
    weakPassword: "Please use a strong password",
    fail: "Something went wrong",
  };

  const message = messages[responseStatus];
  const data = responseStatus === "success" ? result.data : undefined;

  res.status(responseStatus === "success" ? 200 : 404).json({
    status: responseStatus,
    message,
    data,
  });
};

exports.DeleteUser = async (req, res) => {
  let result = await DeleteUserService(req, res);

  result.status === "success"
    ? sendResponse(res, "Your data has been successfully deleted!")
    : sendErrorResponse(res);
};

exports.RecoveryPassword = async (req, res) => {
  let result = await RecoveryPasswordService(req);

  const responseStatus = result.status;
  const messages = {
    success: "Password updated successfully",
    invalidUser: "Invalid user",
    weakPassword: "Please use a strong password",
    fail: "Something went wrong",
  };

  const message = messages[responseStatus];
  const data = responseStatus === "success" ? result.data : undefined;

  res.status(responseStatus === "success" ? 200 : 404).json({
    status: responseStatus,
    message,
    data,
  });
};

exports.DeactivateUser = async (req, res) => {
  let result = await DeactivateUserService(req, res);

  result.status === "success"
    ? sendResponse(res, "Your id has been deactivated!")
    : result.status === "incorrectPassword"
    ? sendResponse(
        res,
        "Please check your given password",
        undefined,
        409,
        "Incorrect Password!"
      )
    : sendErrorResponse(res);
};

exports.ReactivateUser = async (req, res) => {
  let result = await ReactivateUserService(req, res);

  result.status === "success"
    ? sendResponse(res, "Your id is now active!")
    : sendErrorResponse(res);
};

exports.ReportByUser = async (req, res) => {
  let result = await ReportByUserService(req);

  result.status === "success"
    ? sendResponse(res, "Report Submitted!")
    : result.status === "alreadyReported"
    ? sendResponse(
        res,
        "You have already reported this writer!",
        undefined,
        409,
        "Already Reported"
      )
    : sendErrorResponse(res);
};

exports.ReadAllReportByUser = async (req, res) => {
  let result = await ReadAllReportByUserService(req);

  result.status === "success"
    ? sendResponse(res, "All your submitted reports are here!")
    : sendErrorResponse(res);
};

exports.WithrawReportByUser = async (req, res) => {
  let result = await WithrawReportByUserService(req);

  result.status === "success"
    ? sendResponse(res, "Withdrawal success!")
    : sendErrorResponse(res);
};

exports.FollowWriter = async (req, res) => {
  let result = await FollowWriterService(req);

  result.status === "success"
    ? sendResponse(res, "Withdrawal success!")
    : result.status === "alreadyFollowed"
    ? sendResponse(
        res,
        "You have already followed this writer!",
        undefined,
        409,
        "Already Followed"
      )
    : sendErrorResponse(res);
};

exports.ReadAllFollowing = async (req, res) => {
  let result = await ReadAllFollowingService(req);

  result.status === "success"
    ? sendResponse(res, "Your followed writers list is here!")
    : sendErrorResponse(res);
};

exports.AddExpression = async (req, res) => {
  let result = await AddExpressionService(req);

  result.status === "success"
    ? sendResponse(res, "Thanks for adding your like!")
    : sendErrorResponse(res);
};

exports.CreateComment = async (req, res) => {
  let result = await CreateCommentService(req);

  result.status === "success"
    ? sendResponse(res, "Thanks for adding your comment!")
    : sendErrorResponse(res);
};

exports.DeleteCommentByUser = async (req, res) => {
  let result = await DeleteCommentByUserService(req);

  result.status === "success"
    ? sendResponse(res, "Your comment has been deleted!")
    : sendErrorResponse(res);
};
