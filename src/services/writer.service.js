const BlogModel = require("../models/blog/blog.model");
const CommentModel = require("../models/features/comment.model");
const DraftModel = require("../models/features/draft.model");
const FollowerModel = require("../models/features/follower.model");
const ReportByWriterModel = require("../models/privacy/reportByWriter.model");
const UserModel = require("../models/user/user.model");
const WriterModel = require("../models/user/writer.model");

exports.CreateWriterProfileService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let Query = { _id: user_id };
    let reqBody = req.body;
    let myBody = {
      ...reqBody,
      UserID: user_id,
      Image: req.file.path,
    };
    let result = await WriterModel.create(myBody);
    await UserModel.updateOne(Query, { $set: { WriterID: result._id } });
    return { status: "success" };
  } catch (error) {
    console.log(error);
    return { status: "fail" };
  }
};

exports.ReadWriterProfileService = async (req) => {
  try {
    let Query = { UserID: req.headers.user_id };
    let result = await WriterModel.findOne(Query);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadAllFollowerService = async (req) => {
  try {
    let Query = { WriterID: req.params.writer_id };
    let result = await FollowerModel.find(Query);

    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.UpdateWriterProfileService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let Query = { UserID: user_id };
    let reqBody = req.body;

    if (reqBody.WriterName || reqBody.UserID) {
      return { status: "fail" };
    }
    if (req.file) {
      let myBody = {
        ...reqBody,
        Image: req.file.path,
      };

      await WriterModel.updateOne(Query, myBody);
      return { status: "success" };
    } else {
      await WriterModel.updateOne(Query, reqBody);
      return { status: "success" };
    }
  } catch (error) {
    console.log(error);
    return { status: "fail" };
  }
};

exports.CreateBlogDraftService = async (req) => {
  try {
    let reqBody = req.body;
    let myBody = {
      ...reqBody,
      WriterID: req.params.writer_id,
    };

    await DraftModel.create(myBody);
    return { status: "success" };
  } catch (error) {
    console.log(error);
    return { status: "fail" };
  }
};

exports.ReadAllBlogDraftService = async (req) => {
  try {
    let Query = { WriterID: req.params.writer_id };
    let result = await DraftModel.find(Query);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadSingleBlogDraftService = async (req) => {
  try {
    let Query = { _id: req.params.draft_id };
    let result = await DraftModel.findOne(Query);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.UpdateBlogDraftService = async (req) => {
  try {
    let Query = { _id: req.params.draft_id };
    let reqBody = req.body;
    if (reqBody.WriterID) {
      return { status: "fail" };
    }
    await DraftModel.updateOne(Query, reqBody);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.DeleteBlogDraftService = async (req) => {
  try {
    let Query = { _id: req.params.draft_id };
    await DraftModel.deleteOne(Query);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.PublishBlogService = async (req) => {
  try {
    const removeExtraFieldsFromDraft = (draft) => {
      const plainObject = draft.toObject();
      const { _id, createdAt, updatedAt, ...rest } = plainObject;
      return rest;
    };
    let Query = { _id: req.params.draft_id };
    let draft = await DraftModel.findOne(Query);
    let modifiedDraft = removeExtraFieldsFromDraft(draft);
    let myBody = {
      ...modifiedDraft,
      Image: req.file.path,
    };

    await BlogModel.create(myBody);
    return { status: "success" };
  } catch (error) {
    console.log(error);
    return { status: "fail" };
  }
};

exports.ReadAllBlogByWriterService = async (req) => {
  try {
    let Query = { WriterID: req.params.writer_id };
    let result = await BlogModel.find(Query);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.UpdateBlogService = async (req) => {
  try {
    let Query = { _id: req.params.blog_id };
    let reqBody = req.body;
    if (reqBody.WriterID || reqBody.Title) {
      return { status: "fail" };
    }
    if (reqBody.CategoryID || reqBody.TopicID) {
      return { status: "fail" };
    }
    await BlogModel.updateOne(Query, reqBody);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.DeleteBlogService = async (req) => {
  try {
    let Query = { _id: req.params.blog_id };
    await BlogModel.deleteOne(Query);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReportByWriterService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let writer = await WriterModel.findOne({ UserID: user_id });
    let writer_id = writer._id;
    let reader_id = req.params.reader_id;

    let reported = await ReportByWriterModel.findOne({
      ReporterID: writer_id,
      ReportedReaderID: reader_id,
    });
    if (reported) {
      return { status: "alreadyReported" };
    }
    let myBody = {
      ReporterID: writer_id,
      ReportedReaderID: reader_id,
      Report: req.body.Report,
      ReportDetails: req.body.ReportDetails,
    };

    await ReportByWriterModel.create(myBody);
    return { status: "success" };
  } catch (error) {
    console.log(error);
    return { status: "fail" };
  }
};

exports.ReadAllReportByWriterService = async (req) => {
  try {
    let Query = { ReporterID: req.params.writer_id };
    let result = await ReportByWriterModel.find(Query);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.WidrawReportByWriterService = async (req) => {
  try {
    let Query = { _id: req.params.report_id };
    await ReportByWriterModel.deleteOne(Query);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};
