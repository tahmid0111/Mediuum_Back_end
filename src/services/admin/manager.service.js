const {
  CreateCategory,
} = require("../../controllers/admin/manager.controller");
const { SetCookie, EncodeToken } = require("../../helpers/important/common.helper");
const ManagerModel = require("../../models/admin/manager.model");
const CategoryModel = require("../../models/blog/category.model");
const TopicModel = require("../../models/blog/topic.model");
const NoticeModel = require("../../models/privacy/notice.model");
const ReportByReaderModel = require("../../models/privacy/reportByReader.model");
const ReportByWriterModel = require("../../models/privacy/reportByWriter.model");
const UserModel = require("../../models/user/user.model");
const WriterModel = require("../../models/user/writer.model");

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

exports.ReadAllUserService = async (req) => {
  try {
    let role = req.headers.role;
    if(!role === 'admin' || !role === 'manager') {
      return { status: "fail" };
    }
    let result = await UserModel.find();
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadAllWriterService = async (req) => {
  let ID = req.params.id;
  let reqBody = req.body;
  let Query = { _id: ID };
  try {
    let result = await WriterModel.updateOne(Query, reqBody);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.CreateCategoryService = async (req) => {
  let ID = req.params.id;
  let reqBody = req.body;
  let Query = { _id: ID };
  try {
    let result = await CreateCategory.updateOne(Query, reqBody);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.CreateTopicService = async (req) => {
  let ID = req.params.id;
  let reqBody = req.body;
  let Query = { _id: ID };
  try {
    let result = await TopicModel.updateOne(Query, reqBody);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.DeleteCategoryService = async (req) => {
  let ID = req.params.id;
  let reqBody = req.body;
  let Query = { _id: ID };
  try {
    let result = await CategoryModel.updateOne(Query, reqBody);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.DeleteTopicService = async (req) => {
  let ID = req.params.id;
  let reqBody = req.body;
  let Query = { _id: ID };
  try {
    let result = await TopicModel.updateOne(Query, reqBody);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.SendNoticeService = async (req) => {
  let ID = req.params.id;
  let reqBody = req.body;
  let Query = { _id: ID };
  try {
    let result = await NoticeModel.updateOne(Query, reqBody);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.DeleteNoticeService = async (req) => {
  let ID = req.params.id;
  let reqBody = req.body;
  let Query = { _id: ID };
  try {
    let result = await NoticeModel.updateOne(Query, reqBody);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.GlobalBlockUserService = async (req) => {
  let ID = req.params.id;
  let reqBody = req.body;
  let Query = { _id: ID };
  try {
    let result = await UserModel.updateOne(Query, reqBody);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.GlobalUnblockUserService = async (req) => {
  let ID = req.params.id;
  let reqBody = req.body;
  let Query = { _id: ID };
  try {
    let result = await UserModel.updateOne(Query, reqBody);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadAllReportSubmitedByWriterService = async (req) => {
  let ID = req.params.id;
  let reqBody = req.body;
  let Query = { _id: ID };
  try {
    let result = await ReportByWriterModel.updateOne(Query, reqBody);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadAllReportSubmitedByUserService = async (req) => {
  let ID = req.params.id;
  let reqBody = req.body;
  let Query = { _id: ID };
  try {
    let result = await ReportByReaderModel.updateOne(Query, reqBody);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};
