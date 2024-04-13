const {
  CreateWriterProfileService,
  ReadWriterProfileService,
  UpdateWriterProfileService,
  CreateBlogDraftService,
  PublishBlogService,
  UpdateBlogDraftService,
  DeleteBlogDraftService,
  UpdateBlogService,
  DeleteBlogService,
  DeleteCommentService,
  DeleteCommentByWriterService,
  ReportByWriterService,
  ReadAllReportByWriterService,
  WidrawReportByWriterService,
} = require("../services/user/writer.service");

exports.CreateWriterProfile = async (req, res) => {
  let result = await CreateWriterProfileService(req);

  if (result.status === "success") {
    res.status(200).json({
      status: result.status,
      message: "Your has been deleted",
    });
  } else {
    sendError(res);
  }
};

exports.ReadWriterProfile = async (req, res) => {
  let result = await ReadWriterProfileService(req);

  if (result.status === "success") {
    res.status(200).json({
      status: result.status,
      message: "Your has been deleted",
    });
  } else {
    sendError(res);
  }
};

exports.UpdateWriterProfile = async (req, res) => {
  let result = await UpdateWriterProfileService(req);

  if (result.status === "success") {
    res.status(200).json({
      status: result.status,
      message: "Your has been deleted",
    });
  } else {
    sendError(res);
  }
};

exports.CreateBlogDraft = async (req, res) => {
  let result = await CreateBlogDraftService(req);

  if (result.status === "success") {
    res.status(200).json({
      status: result.status,
      message: "Your has been deleted",
    });
  } else {
    sendError(res);
  }
};

exports.UpdateBlogDraft = async (req, res) => {
  let result = await UpdateBlogDraftService(req);

  if (result.status === "success") {
    res.status(200).json({
      status: result.status,
      message: "Your has been deleted",
    });
  } else {
    sendError(res);
  }
};

exports.DeleteBlogDraft = async (req, res) => {
  let result = await DeleteBlogDraftService(req);

  if (result.status === "success") {
    res.status(200).json({
      status: result.status,
      message: "Your has been deleted",
    });
  } else {
    sendError(res);
  }
};

exports.PublishBlog = async (req, res) => {
  let result = await PublishBlogService(req);

  if (result.status === "success") {
    res.status(200).json({
      status: result.status,
      message: "Your has been deleted",
    });
  } else {
    sendError(res);
  }
};

exports.UpdateBlog = async (req, res) => {
  let result = await UpdateBlogService(req);

  if (result.status === "success") {
    res.status(200).json({
      status: result.status,
      message: "Your has been deleted",
    });
  } else {
    sendError(res);
  }
};

exports.DeleteBlog = async (req, res) => {
  let result = await DeleteBlogService(req);

  if (result.status === "success") {
    res.status(200).json({
      status: result.status,
      message: "Your has been deleted",
    });
  } else {
    sendError(res);
  }
};

exports.DeleteCommentByWriter = async (req, res) => {
  let result = await DeleteCommentByWriterService(req);

  if (result.status === "success") {
    res.status(200).json({
      status: result.status,
      message: "Your has been deleted",
    });
  } else {
    sendError(res);
  }
};

exports.ReportByWriter = async (req, res) => {
  let result = await ReportByWriterService(req);

  if (result.status === "success") {
    res.status(200).json({
      status: result.status,
      message: "Your has been deleted",
    });
  } else {
    sendError(res);
  }
};

exports.ReadAllReportByWriter = async (req, res) => {
  let result = await ReadAllReportByWriterService(req);

  if (result.status === "success") {
    res.status(200).json({
      status: result.status,
      message: "Your has been deleted",
    });
  } else {
    sendError(res);
  }
};

exports.WidrawReportByWriter = async (req, res) => {
  let result = await WidrawReportByWriterService(req);

  if (result.status === "success") {
    res.status(200).json({
      status: result.status,
      message: "Your has been deleted",
    });
  } else {
    sendError(res);
  }
};

exports.CreateWriterProfile = async (req, res) => {
  let result = await DeleteUserService(req);

  if (result.status === "success") {
    res.status(200).json({
      status: result.status,
      message: "Your has been deleted",
    });
  } else {
    sendError(res);
  }
};

exports.CreateWriterProfile = async (req, res) => {
  let result = await DeleteUserService(req);

  if (result.status === "success") {
    res.status(200).json({
      status: result.status,
      message: "Your has been deleted",
    });
  } else {
    sendError(res);
  }
};

exports.CreateWriterProfile = async (req, res) => {
  let result = await DeleteUserService(req);

  if (result.status === "success") {
    res.status(200).json({
      status: result.status,
      message: "Your has been deleted",
    });
  } else {
    sendError(res);
  }
};

exports.CreateWriterProfile = async (req, res) => {
  let result = await DeleteUserService(req);

  if (result.status === "success") {
    res.status(200).json({
      status: result.status,
      message: "Your has been deleted",
    });
  } else {
    sendError(res);
  }
};

exports.CreateWriterProfile = async (req, res) => {
  let result = await DeleteUserService(req);

  if (result.status === "success") {
    res.status(200).json({
      status: result.status,
      message: "Your has been deleted",
    });
  } else {
    sendError(res);
  }
};