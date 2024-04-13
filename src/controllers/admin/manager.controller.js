const { sendErrorResponse, sendResponse } = require("../../helpers/important/common.helper");
const {
  ReadAllUserService,
  ReadAllWriterService,
  CreateCategoryService,
  CreateTopicService,
  DeleteCategoryService,
  DeleteTopicService,
  SendNoticeService,
  DeleteNoticeService,
  GlobalBlockUserService,
  GlobalUnblockUserService,
  ReadAllReportSubmitedByWriterService,
  ReadAllReportSubmitedByUserService,
  LoginAsManagerService,
} = require("../../services/admin/manager.service");

exports.LoginAsManager = async (req, res) => {
  let result = await LoginAsManagerService(req, res);
  if (result.status === "success") {
    sendResponse(res, 'Login Success')
  } else {
    sendErrorResponse(res);
  }
};

exports.ReadAllUser = async (req, res) => {
  let result = await ReadAllUserService(req);
  if (result.status === "success") {
    sendResponse(res, 'Your Expected Data is Here', result.data )
  } else {
    res.status(404).json({ status: "fail", message: "Something went wrong" });
  }
};

exports.ReadAllWriter = async (req, res) => {
  let result = await ReadAllWriterService(req);
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Product has been created Successfully",
      data: result.data,
    });
  } else {
    res.status(404).json({ status: "fail", message: "Something went wrong" });
  }
};

exports.CreateCategory = async (req, res) => {
  let result = await CreateCategoryService(req);
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Product has been created Successfully",
      data: result.data,
    });
  } else {
    res.status(404).json({ status: "fail", message: "Something went wrong" });
  }
};

exports.CreateTopic = async (req, res) => {
  let result = await CreateTopicService(req);
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Product has been created Successfully",
      data: result.data,
    });
  } else {
    res.status(404).json({ status: "fail", message: "Something went wrong" });
  }
};

exports.DeleteCategory = async (req, res) => {
  let result = await DeleteCategoryService(req);
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Product has been created Successfully",
      data: result.data,
    });
  } else {
    res.status(404).json({ status: "fail", message: "Something went wrong" });
  }
};

exports.DeleteTopic = async (req, res) => {
  let result = await DeleteTopicService(req);
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Product has been created Successfully",
      data: result.data,
    });
  } else {
    res.status(404).json({ status: "fail", message: "Something went wrong" });
  }
};

exports.SendNotice = async (req, res) => {
  let result = await SendNoticeService(req);
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Product has been created Successfully",
      data: result.data,
    });
  } else {
    res.status(404).json({ status: "fail", message: "Something went wrong" });
  }
};

exports.DeleteNotice = async (req, res) => {
  let result = await DeleteNoticeService(req);
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Product has been created Successfully",
      data: result.data,
    });
  } else {
    res.status(404).json({ status: "fail", message: "Something went wrong" });
  }
};

exports.GlobalBlockUser = async (req, res) => {
  let result = await GlobalBlockUserService(req);
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Product has been created Successfully",
      data: result.data,
    });
  } else {
    res.status(404).json({ status: "fail", message: "Something went wrong" });
  }
};

exports.GlobalUnblockUser = async (req, res) => {
  let result = await GlobalUnblockUserService(req);
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Product has been created Successfully",
      data: result.data,
    });
  } else {
    res.status(404).json({ status: "fail", message: "Something went wrong" });
  }
};

exports.ReadAllReportSubmitedByWriter = async (req, res) => {
  let result = await ReadAllReportSubmitedByWriterService(req);
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Product has been created Successfully",
      data: result.data,
    });
  } else {
    res.status(404).json({ status: "fail", message: "Something went wrong" });
  }
};

exports.ReadAllReportSubmitedByUser = async (req, res) => {
  let result = await ReadAllReportSubmitedByUserService(req);
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Product has been created Successfully",
      data: result.data,
    });
  } else {
    res.status(404).json({ status: "fail", message: "Something went wrong" });
  }
};
