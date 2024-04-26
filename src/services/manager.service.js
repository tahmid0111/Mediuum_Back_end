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
    if (!VerifyManager(req)) {
      return { status: "fail" };
    }
    let reqBody = req.body;
    let result = await CategoryModel.create(reqBody);

    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.CreateTopicService = async (req) => {
  try {
    if (!VerifyManager(req)) {
      return { status: "fail" };
    }
    let category_id = req.params.category_id;
    let reqBody = req.body;
    let myBody = {
      ...reqBody,
      CategoryID: category_id,
    };
    await TopicModel.create(myBody);

    return { status: "success" };
  } catch (error) {
    console.log(error)
    return { status: "fail" };
  }
};

exports.DeleteCategoryService = async (req) => {
  try {
    if (!VerifyManager(req)) {
      return { status: "fail" };
    }
    let Query = { _id: req.params.category_id };
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
    let Query = { _id: req.params.topic_id };
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
    let manager_id = req.headers.user_id;
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
    let user_id = req.params.user_id;
    let manager_id = req.headers.user_id;
    let reqBody = req.body;
    let myBody = {
      ...reqBody,
      UserID: user_id,
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
    let Query = { _id: req.params.notice_id };
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
      UserID: req.params.user_id,
      ManagerID: req.headers.user_id,
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
    let Query = { UserID: req.params.user_id, ManagerID: req.headers.user_id };
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
    let Query = { _id: req.params.report_id };
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
    let Query = { _id: req.params.report_id };
    let result = await ReportByWriterModel.findOne(Query);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};
