const BlogModel = require("../models/blog/blog.model");
const CommentModel = require("../models/features/comment.model");
const DraftModel = require("../models/features/draft.model");
const ReportByWriterModel = require("../models/privacy/reportByWriter.model");
const WriterModel = require("../models/user/writer.model");

exports.CreateWriterProfileService = async (req) => {
  try {
    let Query = { Email: req.headers.email };
    await WriterModel.deleteOne(Query);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadWriterProfileService = async (req) => {
  try {
    let Query = { Email: req.headers.email };
    await WriterModel.deleteOne(Query);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.UpdateWriterProfileService = async (req) => {
  try {
    let Query = { Email: req.headers.email };
    await WriterModel.deleteOne(Query);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.CreateBlogDraftService = async (req) => {
  try {
    let Query = { Email: req.headers.email };
    await DraftModel.deleteOne(Query);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.UpdateBlogDraftService = async (req) => {
  try {
    let Query = { Email: req.headers.email };
    await DraftModel.deleteOne(Query);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.DeleteBlogDraftService = async (req) => {
  try {
    let Query = { Email: req.headers.email };
    await DraftModel.deleteOne(Query);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.PublishBlogService = async (req) => {
  try {
    let Query = { Email: req.headers.email };
    await BlogModel.deleteOne(Query);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.UpdateBlogService = async (req) => {
  try {
    let Query = { Email: req.headers.email };
    await BlogModel.deleteOne(Query);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.DeleteBlogService = async (req) => {
  try {
    let Query = { Email: req.headers.email };
    await BlogModel.deleteOne(Query);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.DeleteCommentByWriterService = async (req) => {
  try {
    let Query = { Email: req.headers.email };
    await CommentModel.deleteOne(Query);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReportByWriterService = async (req) => {
  try {
    let Query = { Email: req.headers.email };
    await ReportByWriterModel.deleteOne(Query);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadAllReportByWriterService = async (req) => {
  try {
    let Query = { Email: req.headers.email };
    await ReportByWriterModel.deleteOne(Query);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.WidrawReportByWriterService = async (req) => {
  try {
    let Query = { Email: req.headers.email };
    await ReportByWriterModel.deleteOne(Query);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};
