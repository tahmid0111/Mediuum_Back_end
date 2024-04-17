const {
  sendErrorResponse,
  sendResponse,
} = require("../helpers/important/common.helper");

const {
  LoginAsManagerService,
  ReadAllUserService,
  CreateCategoryService,
  CreateTopicService,
  DeleteCategoryService,
  DeleteTopicService,
  DeleteNoticeService,
  ReadAllReportSubmitedByWriterService,
  ReadAllReportSubmitedByUserService,
  LogoutAsManagerService,
  SendGlobalNoticeService,
  SendNoticeToSingleUserService,
  BlockUserService,
  UnblockUserService,
  ReadSingleReportSubmitedByWriterService,
  ReadSingleReportSubmitedByUserService,
} = require("../services/manager.service");

exports.LoginAsManager = async (req, res) => {
  let result = await LoginAsManagerService(req, res);

  result.status === "success"
    ? sendResponse(res, "Login Success!")
    : sendErrorResponse(res);
};

exports.LogoutAsManager = async (req, res) => {
  let result = await LogoutAsManagerService(req, res);

  result.status === "success"
    ? sendResponse(res, "Logout Success!")
    : sendErrorResponse(res);
};

exports.ReadAllUser = async (req, res) => {
  let result = await ReadAllUserService(req);
  result.status === "success"
    ? sendResponse(res, "Your expected data is here!", result.data)
    : sendErrorResponse(res);
};

exports.CreateCategory = async (req, res) => {
  let result = await CreateCategoryService(req);
  result.status === "success"
    ? sendResponse(res, "Category has been created successfully!")
    : sendErrorResponse(res);
};

exports.CreateTopic = async (req, res) => {
  let result = await CreateTopicService(req);
  result.status === "success"
    ? sendResponse(res, "Topic has been created successfully!")
    : sendErrorResponse(res);
};

exports.DeleteCategory = async (req, res) => {
  let result = await DeleteCategoryService(req);
  result.status === "success"
    ? sendResponse(res, "Data has been removed!")
    : sendErrorResponse(res);
};

exports.DeleteTopic = async (req, res) => {
  let result = await DeleteTopicService(req);
  result.status === "success"
    ? sendResponse(res, "Data has been removed!")
    : sendErrorResponse(res);
};

exports.SendGlobalNotice = async (req, res) => {
  let result = await SendGlobalNoticeService(req);
  result.status === "success"
    ? sendResponse(res, "Notice has been delivered Successfully!")
    : sendErrorResponse(res);
};

exports.SendNoticeToSingleUser = async (req, res) => {
  let result = await SendNoticeToSingleUserService(req);
  result.status === "success"
    ? sendResponse(res, "Notice has been delivered Successfully!")
    : sendErrorResponse(res);
};

exports.DeleteNotice = async (req, res) => {
  let result = await DeleteNoticeService(req);
  result.status === "success"
    ? sendResponse(res, "Notice has been removed!")
    : sendErrorResponse(res);
};

exports.BlockUser = async (req, res) => {
  let result = await BlockUserService(req);
  result.status === "success"
    ? sendResponse(res, "User has been blocked!")
    : sendErrorResponse(res);
};

exports.UnblockUser = async (req, res) => {
  let result = await UnblockUserService(req);
  result.status === "success"
    ? sendResponse(res, "User has been unblocked!")
    : sendErrorResponse(res);
};

exports.ReadAllReportSubmitedByUser = async (req, res) => {
  let result = await ReadAllReportSubmitedByUserService(req);
  result.status === "success"
    ? sendResponse(res, "Your expected data is here!", result.data)
    : sendErrorResponse(res);
};

exports.ReadSingleReportSubmitedByUser = async (req, res) => {
  let result = await ReadSingleReportSubmitedByUserService(req);
  result.status === "success"
    ? sendResponse(res, "Your expected data is here!", result.data)
    : sendErrorResponse(res);
};

exports.ReadAllReportSubmitedByWriter = async (req, res) => {
  let result = await ReadAllReportSubmitedByWriterService(req);
  result.status === "success"
    ? sendResponse(res, "Your expected data is here!", result.data)
    : sendErrorResponse(res);
};

exports.ReadSingleReportSubmitedByWriter = async (req, res) => {
  let result = await ReadSingleReportSubmitedByWriterService(req);
  result.status === "success"
    ? sendResponse(res, "Your expected data is here!", result.data)
    : sendErrorResponse(res);
};
