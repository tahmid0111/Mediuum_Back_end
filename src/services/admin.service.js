const {
  EncodeToken,
  SetCookie,
  RemoveCookie,
} = require("../helpers/important/common.helper");
const {
  ValidatePassword,
  ValidatePhoneNumber,
} = require("../helpers/others/regex.helper");
const { VerifyAdmin } = require("../helpers/others/verifyAdmin.helper");
const AdminModel = require("../models/user/admin.model");
const ManagerModel = require("../models/user/manager.model");

exports.LoginAsAdminService = async (req, res) => {
  try {
    let email = req.body.Email;
    let password = req.body.Password;
    let Query = { Email: email };
    let Query2 = { Email: email, Password: password };

    let user = await AdminModel.findOne(Query);
    if (!user) {
      return { status: "fail" };
    }
    let result = await AdminModel.findOne(Query2);
    if (!result) {
      return { status: "wrongPassword" };
    }
    // generating jwt token and saving to the cookies
    let token = EncodeToken(user.Email, user._id, "admin");
    SetCookie(res, "token", token);

    return { status: "success" };
  } catch (error) {
    console.log(error);
    return { status: "fail" };
  }
};

exports.ReadAdminProfileService = async (req) => {
  try {
    if (!VerifyAdmin(req)) {
      return { status: "fail" };
    }
    let email = req.headers.email;
    let Query = { Email: email };

    let result = await AdminModel.findOne(Query);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.LogoutAsAdminService = async (req, res) => {
  try {
    if (!VerifyAdmin(req)) {
      return { status: "fail" };
    }
    await RemoveCookie(res);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.CreateManagerService = async (req) => {
  try {
    if (!VerifyAdmin(req)) {
      return { status: "fail" };
    }
    let reqBody = req.body;
    console.log(reqBody);
    // Validating given info using regex
    if (!ValidatePassword(reqBody.Password)) {
      return { status: "weakPassword" };
    }
    if (!ValidatePhoneNumber(reqBody.Mobile)) {
      return { status: "invalidPhoneNumber" };
    }
    let result = await ManagerModel.create(reqBody);

    return { status: "success", data: result };
  } catch (error) {
    console.log(error);
    return { status: "fail" };
  }
};

exports.ReadAllManagerService = async (req) => {
  try {
    if (!VerifyAdmin(req)) {
      return { status: "fail" };
    }
    let result = await ManagerModel.find();
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadSingleManagerService = async (req) => {
  try {
    if (!VerifyAdmin(req)) {
      return { status: "fail" };
    }
    let Query = { _id: req.params.manager_id };
    let result = await ManagerModel.findOne(Query);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.UpdateManagerInfoService = async (req) => {
  try {
    if (!VerifyAdmin(req)) {
      return { status: "fail" };
    }
    let reqBody = req.body;
    let Query = { _id: req.params.manager_id };

    let result = await ManagerModel.updateOne(Query, reqBody);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.DeleteManagerService = async (req) => {
  try {
    let Query = { _id: req.params.manager_id };
    let result = await ManagerModel.deleteOne(Query);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};
