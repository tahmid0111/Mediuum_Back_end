// helpers
const {
  sendErrorResponse,
  sendResponse,
} = require("../helpers/important/common.helper");
// services
const {
  CreateWriterProfileService,
  ReadWriterProfileService,
  UpdateWriterProfileService,
  CreateBlogDraftService,
  UpdateBlogDraftService,
  DeleteBlogDraftService,
  PublishBlogService,
  UpdateBlogService,
  DeleteBlogService,
  DeleteCommentByWriterService,
  ReportByWriterService,
  ReadAllReportByWriterService,
  WidrawReportByWriterService,
  ReadAllFollowerService,
  ReadAllBlogDraftService,
  ReadSingleBlogDraftService,
  ReadAllBlogByWriterService,
} = require("../services/writer.service");

exports.CreateWriterProfile = async (req, res) => {
  let result = await CreateWriterProfileService(req);

  result.status === "success"
    ? sendResponse(res, "Writer Profile Created Successfully!")
    : sendErrorResponse(res);
};

exports.ReadWriterProfile = async (req, res) => {
  let result = await ReadWriterProfileService(req);

  result.status === "success"
    ? sendResponse(res, "Your expected data is here!", result.data)
    : sendErrorResponse(res);
};

exports.ReadAllFollower = async (req, res) => {
  let result = await ReadAllFollowerService(req);

  result.status === "success"
    ? sendResponse(res, "Your expected data is here!", result.data)
    : sendErrorResponse(res);
};

exports.UpdateWriterProfile = async (req, res) => {
  let result = await UpdateWriterProfileService(req);

  result.status === "success"
    ? sendResponse(res, "Your profile has been updated!")
    : sendErrorResponse(res);
};

exports.CreateBlogDraft = async (req, res) => {
  let result = await CreateBlogDraftService(req);

  result.status === "success"
    ? sendResponse(res, "Your draft has been created successfully!")
    : sendErrorResponse(res);
};

exports.ReadAllBlogDraft = async (req, res) => {
  let result = await ReadAllBlogDraftService(req);

  result.status === "success"
    ? sendResponse(res, "Your expected data is here!", result.data)
    : sendErrorResponse(res);
};

exports.ReadSingleBlogDraft = async (req, res) => {
  let result = await ReadSingleBlogDraftService(req);

  result.status === "success"
    ? sendResponse(res, "Your expected data is here!", result.data)
    : sendErrorResponse(res);
};

exports.UpdateBlogDraft = async (req, res) => {
  let result = await UpdateBlogDraftService(req);

  result.status === "success"
    ? sendResponse(res, "Your draft has been updated!")
    : sendErrorResponse(res);
};

exports.DeleteBlogDraft = async (req, res) => {
  let result = await DeleteBlogDraftService(req);

  result.status === "success"
    ? sendResponse(res, "Your draft has been removed!")
    : sendErrorResponse(res);
};

exports.PublishBlog = async (req, res) => {
  let result = await PublishBlogService(req);

  result.status === "success"
    ? sendResponse(res, "Your blog has been published!")
    : sendErrorResponse(res);
};

exports.ReadAllBlogByWriter = async (req, res) => {
  let result = await ReadAllBlogByWriterService(req);

  result.status === "success"
    ? sendResponse(res, "Your expected data is here!", result.data)
    : sendErrorResponse(res);
};

exports.UpdateBlog = async (req, res) => {
  let result = await UpdateBlogService(req);

  result.status === "success"
    ? sendResponse(res, "Your blog has been updated!")
    : sendErrorResponse(res);
};

exports.DeleteBlog = async (req, res) => {
  let result = await DeleteBlogService(req);

  result.status === "success"
    ? sendResponse(res, "Your blog has been deleted!")
    : sendErrorResponse(res);
};

exports.ReportByWriter = async (req, res) => {
  let result = await ReportByWriterService(req);

  result.status === "success"
    ? sendResponse(res, "Your report has been submitted!")
    : result.status === "alreadyReported"
    ? sendResponse(
        res,
        "You have alreadey reported this Reader!",
        undefined,
        409
      )
    : sendErrorResponse(res);
};

exports.ReadAllReportByWriter = async (req, res) => {
  let result = await ReadAllReportByWriterService(req);

  result.status === "success"
    ? sendResponse(res, "Your blog has been updated!", result.data)
    : sendErrorResponse(res);
};

exports.WidrawReportByWriter = async (req, res) => {
  let result = await WidrawReportByWriterService(req);

  result.status === "success"
    ? sendResponse(res, "Your report has been removed!")
    : sendErrorResponse(res);
};
