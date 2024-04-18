const {
  sendResponse,
  sendErrorResponse,
} = require("../helpers/response.helper");
const {
  LoginAsAdminService,
  ReadAdminProfileService,
  CreateManagerService,
  UpdateManagerInfoService,
  DeleteManagerService,
  LogoutAsAdminService,
  ReadAllManagerService,
  ReadSingleManagerService,
} = require("../services/admin.service");

exports.LoginAsAdmin = async (req, res) => {
  let result = await LoginAsAdminService(req, res);

  result.status === "success"
    ? sendResponse(res, "Login Success!")
    : result.status === "wrongPassword"
    ? sendResponse(res, "Incorrect Password!")
    : sendErrorResponse(res);
};

exports.ReadAdminProfile = async (req, res) => {
  let result = await ReadAdminProfileService(req);
  result.status === "success"
    ? sendResponse(res, "Logout Success!", result.data)
    : sendErrorResponse(res);
};

exports.LogoutAsAdmin = async (req, res) => {
  let result = await LogoutAsAdminService(req, res);
  result.status === "success"
    ? sendResponse(res, "Logout Success!", result.data)
    : sendErrorResponse(res);
};

exports.CreateManager = async (req, res) => {
  let result = await CreateManagerService(req);

  const responseStatus = result.status;
  const messages = {
    success: "User Successfully Registered",
    weakPassword: "Use a strong Password",
    invalidPhoneNumber: "Invalid Phone Number",
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

exports.ReadAllManager = async (req, res) => {
  let result = await ReadAllManagerService(req);

  result.status === "success"
    ? sendResponse(res, "Your expected data is here!", result.data)
    : sendErrorResponse(res);
};

exports.ReadSingleManager = async (req, res) => {
  let result = await ReadSingleManagerService(req);

  result.status === "success"
    ? sendResponse(res, "Your expected data is here!", result.data)
    : sendErrorResponse(res);
};

exports.UpdateManagerInfo = async (req, res) => {
  let result = await UpdateManagerInfoService(req);

  result.status === "success"
    ? sendResponse(res, "Logout Success!", result.data)
    : sendErrorResponse(res);
};

exports.DeleteManager = async (req, res) => {
  let result = await DeleteManagerService(req);

  result.status === "success"
    ? sendResponse(res, "Manager Account removed!")
    : sendErrorResponse(res);
};
