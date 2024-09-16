const BlogModel = require("../models/blog/blog.model");
const CommentModel = require("../models/features/comment.model");
const DraftModel = require("../models/features/draft.model");
const FollowerModel = require("../models/features/follower.model");
const ReportByWriterModel = require("../models/privacy/reportByWriter.model");
const UserModel = require("../models/user/user.model");

// exports.CreateWriterProfileService = async (req) => {
//   try {
//     let userID = req.headers.userID;
//     let Query = { _id: userID };
//     let reqBody = req.body;
//     let myBody = {
//       ...reqBody,
//       UserID: userID,
//       Image: req.file.path,
//     };
//     let result = await WriterModel.create(myBody);
//     await UserModel.updateOne(Query, { $set: { WriterID: result._id } });
//     return { status: "success" };
//   } catch (error) {
//     console.log(error);
//     return { status: "fail" };
//   }
// };

// exports.ReadWriterProfileService = async (req) => {
//   try {
//     let Query = { UserID: req.headers.userID };
//     let result = await WriterModel.findOne(Query);
//     return { status: "success", data: result };
//   } catch (error) {
//     return { status: "fail" };
//   }
// };

exports.ReadAllFollowerService = async (req) => {
  try {
    let Query = { UserID: req.headers.userID };
    let result = await FollowerModel.find(Query);

    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

// exports.UpdateWriterProfileService = async (req) => {
//   try {
//     let userID = req.headers.userID;
//     let Query = { UserID: userID };
//     let reqBody = req.body;

//     if (reqBody.WriterName || reqBody.UserID) {
//       return { status: "fail" };
//     }
//     if (req.file) {
//       let myBody = {
//         ...reqBody,
//         Image: req.file.path,
//       };

//       await WriterModel.updateOne(Query, myBody);
//       return { status: "success" };
//     } else {
//       await WriterModel.updateOne(Query, reqBody);
//       return { status: "success" };
//     }
//   } catch (error) {
//     console.log(error);
//     return { status: "fail" };
//   }
// };

exports.CreateBlogDraftService = async (req) => {
  try {
    let reqBody = req.body;
    let myBody = {
      ...reqBody,
      UserID: req.headers.userID,
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
    let Query = { WriterID: req.params.writerID };
    let result = await DraftModel.find(Query);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadSingleBlogDraftService = async (req) => {
  try {
    let Query = { _id: req.params.draftID };
    let result = await DraftModel.findOne(Query);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.UpdateBlogDraftService = async (req) => {
  try {
    let Query = { _id: req.params.draftID };
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
    let Query = { _id: req.params.draftID };
    await DraftModel.deleteOne(Query);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.PublishBlogService = async (req) => {
  try {
    let Query = { _id: req.params.draftID };
    let draft = await DraftModel.findOne(Query);
    const removeExtraFieldsFromDraft = (draft) => {
      const plainObject = draft.toObject();
      const { _id, ...rest } = plainObject;
      return rest;
    };
    let modifiedDraft = removeExtraFieldsFromDraft(draft);
    let myBody = {
      ...modifiedDraft,
      Image: req.file.path,
    }
    await BlogModel.create(myBody);
    return { status: "success" };
  } catch (error) {
    console.log(error);
    return { status: "fail" };
  }
};

exports.ReadAllBlogByWriterService = async (req) => {
  try {
    let Query = { WriterID: req.params.writerID };
    let result = await BlogModel.find(Query);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.UpdateBlogService = async (req) => {
  try {
    let Query = { _id: req.params.blogID };
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
    let Query = { _id: req.params.blogID };
    await BlogModel.deleteOne(Query);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReportByWriterService = async (req) => {
  try {
    let userID = req.headers.userID;
    // let writer = await WriterModel.findOne({ UserID: userID });
    // let writerID = writer._id;
    let readerID = req.params.readerID;

    let reported = await ReportByWriterModel.findOne({
      ReporterID: writerID,
      ReportedReaderID: readerID,
    });
    if (reported) {
      return { status: "alreadyReported" };
    }
    let myBody = {
      ReporterID: writerID,
      ReportedReaderID: readerID,
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
    let Query = { ReporterID: req.params.writerID };
    let result = await ReportByWriterModel.find(Query);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.WidrawReportByWriterService = async (req) => {
  try {
    let Query = { _id: req.params.reportID };
    await ReportByWriterModel.deleteOne(Query);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};
