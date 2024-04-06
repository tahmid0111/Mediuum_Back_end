const AdminModel = require("../../models/admin/admin.model");
const ManagerModel = require("../../models/admin/manager.model");

exports.CreateManagerService = async (req) => {
  let ID = req.params.id;
  let reqBody = req.body;
  let Query = { _id: ID };
  try {
    let result = await ManagerModel.updateOne(Query, reqBody);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.UpdateManagerInfoService = async (req) => {
  let ID = req.params.id;
  let reqBody = req.body;
  let Query = { _id: ID };
  try {
    let result = await ManagerModel.updateOne(Query, reqBody);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.UpdateManagerPasswordService = async (req) => {
  let ID = req.params.id;
  let reqBody = req.body;
  let Query = { _id: ID };
  try {
    let result = await ManagerModel.updateOne(Query, reqBody);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.DeleteManagerService = async (req) => {
  let ID = req.params.id;
  let reqBody = req.body;
  let Query = { _id: ID };
  try {
    let result = await ManagerModel.updateOne(Query, reqBody);
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
