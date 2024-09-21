const { VerifyManager } = require("../helpers/verifyAdmin.helper");
const { EncodeToken } = require("../utility/jwt.utility");
const { SetCookie, RemoveCookie } = require("../helpers/cookie.helper");

const ManagerModel = require("../models/user/manager.model");
const CategoryModel = require("../models/blog/category.model");
const TopicModel = require("../models/blog/topic.model");
const NoticeModel = require("../models/privacy/notice.model");
const ReportByReaderModel = require("../models/privacy/reportByReader.model");
const ReportByWriterModel = require("../models/privacy/reportByWriter.model");
const UserModel = require("../models/user/user.model");
const GlobalNoticeModel = require("../models/privacy/globalNotice.model");
const BlockedModel = require("../models/privacy/block.model");
const BlogModel = require("../models/blog/blog.model");
const TrendingBlogModel = require("../models/trending/TrendingBlog.model");
const PopularWriterModel = require("../models/trending/popularWriter.model");

exports.LoginAsManagerService = async (req, res) => {
  try {
    let email = req.body.Email;
    let password = req.body.Password;
    let Query = { Email: email };
    let Query2 = { Email: email, Password: password };

    let user = await ManagerModel.findOne(Query);
    if (!user) {
      return { status: "fail" };
    }
    let result = await ManagerModel.findOne(Query2);
    if (!result) {
      return { status: "wrongPassword" };
    }
    // generating jwt token and saving to the cookies
    let token = EncodeToken(user.Email, user._id, "manager");
    SetCookie(res, "token", token);

    return { status: "success" };
  } catch (error) {
    console.log(error);
    return { status: "fail" };
  }
};

exports.LogoutAsManagerService = async (req, res) => {
  try {
    if (!VerifyManager(req)) {
      return { status: "fail" };
    }
    await RemoveCookie(res);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadAllUserService = async (req) => {
  try {
    if (!VerifyManager(req)) {
      return { status: "fail" };
    }
    let result = await UserModel.find();
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.CreateCategoryService = async (req) => {
  try {
    // if (!VerifyManager(req)) {
    //   return { status: "fail" };
    // }
    let reqBody = req.body;
    await CategoryModel.create(reqBody);

    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.CreateTrendingBlogService = async (req) => {
  try {
    // if (!VerifyManager(req)) {
    //   return { status: "fail" };
    // }
    let Query = { _id: req.params.blogID };
    let result = await BlogModel.findOne(Query);
    let Query2 = { _id: result.UserID };
    let result2 = await UserModel.findOne(Query2);
    let Query3 = { _id: result.TopicID };
    let result3 = await TopicModel.findOne(Query3);
    let myBody = {
      BlogID: result._id,
      Title: result.Title,
      Image: result.Image,
      TopicName: result3.TopicName,
      WriterName: result2.FullName,
      WriterImage: result2.Image,
    }
    await TrendingBlogModel.create(myBody);

    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadAllTrendingBlogService = async (req) => {
  try {
    let result = await TrendingBlogModel.find();
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.CreatePopularWriterService = async (req) => {
  try {
    // if (!VerifyManager(req)) {
    //   return { status: "fail" };
    // }
    let Query = { _id: req.params.userID };
    let result = await UserModel.findOne(Query);
    let myBody = {
      UserID: req.params.userID,
      UserName: result.FullName,
      UserImage: result.Image,
      SubTitle: result.SubTitle,
    };
    await PopularWriterModel.create(myBody);

    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.readAllPopularWriterService = async (req) => {
  try {
    let result = await PopularWriterModel.find();
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.DeleteTrendingBlogService = async (req) => {
  try {
    // if (!VerifyManager(req)) {
    //   return { status: "fail" };
    // }
    let reqBody = req.body;
    await CategoryModel.create(reqBody);

    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.DeletePopularWriterService = async (req) => {
  try {
    // if (!VerifyManager(req)) {
    //   return { status: "fail" };
    // }
    let reqBody = req.body;
    await CategoryModel.create(reqBody);

    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.CreateTopicService = async (req) => {
  try {
    // if (!VerifyManager(req)) {
    //   return { status: "fail" };
    // }
    let categoryID = req.params.categoryID;
    let reqBody = req.body;
    let myBody = {
      ...reqBody,
      CategoryID: categoryID,
    };
    await TopicModel.create(myBody);

    return { status: "success" };
  } catch (error) {
    console.log(error);
    return { status: "fail" };
  }
};

exports.DeleteCategoryService = async (req) => {
  try {
    if (!VerifyManager(req)) {
      return { status: "fail" };
    }
    let Query = { _id: req.params.categoryID };
    await CategoryModel.deleteOne(Query);

    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.DeleteTopicService = async (req) => {
  try {
    if (!VerifyManager(req)) {
      return { status: "fail" };
    }
    let Query = { _id: req.params.topicID };
    await TopicModel.deleteOne(Query);

    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.SendGlobalNoticeService = async (req) => {
  try {
    if (!VerifyManager(req)) {
      return { status: "fail" };
    }
    let manager_id = req.headers.userID;
    let reqBody = req.body;
    let myBody = {
      ...reqBody,
      ManagerID: manager_id,
    };
    let result = await GlobalNoticeModel.create(myBody);

    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.SendNoticeToSingleUserService = async (req) => {
  try {
    if (!VerifyManager(req)) {
      return { status: "fail" };
    }
    let userID = req.params.userID;
    let manager_id = req.headers.userID;
    let reqBody = req.body;
    let myBody = {
      ...reqBody,
      UserID: userID,
      ManagerID: manager_id,
    };
    await NoticeModel.create(myBody);

    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.DeleteNoticeService = async (req) => {
  try {
    if (!VerifyManager(req)) {
      return { status: "fail" };
    }
    let Query = { _id: req.params.noticeID };
    let result = await NoticeModel.deleteOne(Query);

    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.BlockUserService = async (req) => {
  try {
    if (!VerifyManager(req)) {
      return { status: "fail" };
    }
    let myBody = {
      UserID: req.params.userID,
      ManagerID: req.headers.userID,
    };
    await BlockedModel.create(myBody);

    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.UnblockUserService = async (req) => {
  try {
    if (!VerifyManager(req)) {
      return { status: "fail" };
    }
    let Query = { UserID: req.params.userID, ManagerID: req.headers.userID };
    await BlockedModel.deleteOne(Query);

    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadAllReportSubmitedByUserService = async (req) => {
  try {
    if (!VerifyManager(req)) {
      return { status: "fail" };
    }
    let result = await ReportByReaderModel.find();
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadSingleReportSubmitedByUserService = async (req) => {
  try {
    if (!VerifyManager(req)) {
      return { status: "fail" };
    }
    let Query = { _id: req.params.reportID };
    let result = await ReportByReaderModel.findOne(Query);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadAllReportSubmitedByWriterService = async (req) => {
  try {
    if (!VerifyManager(req)) {
      return { status: "fail" };
    }
    let result = await ReportByWriterModel.find();
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadSingleReportSubmitedByWriterService = async (req) => {
  try {
    if (!VerifyManager(req)) {
      return { status: "fail" };
    }
    let Query = { _id: req.params.reportID };
    let result = await ReportByWriterModel.findOne(Query);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};
