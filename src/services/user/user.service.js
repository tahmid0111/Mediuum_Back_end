const UserModel = require("../../models/user/user.model");
const OTPModel = require("../../models/otp/otp.model");
// helpers
const {
  EncodePassword,
  DecodePassword,
} = require("../../helpers/others/bcrypt.helper");
const { ValidatePassword } = require("../../helpers/others/regex.helper");
const {
  EncodeToken,
  SetCookie,
} = require("../../helpers/important/common.helper");
const ReportByReaderModel = require("../../models/privacy/reportByReader.model");
const ExpressionModel = require("../../models/features/expression.model");
const CommentModel = require("../../models/features/comment.model");
const DeactivatedModel = require("../../models/privacy/deactivated.model");

exports.RegistrationService = async (req) => {
  try {
    let reqBody = req.body;
    let Query = { Email: reqBody.Email };
    // let data = await OTPModel.findOne(Query);
    // if (!data || data.Status !== true) {
    //   return { status: "notVerified" };
    // }
    // Validating given info using regex
    if (!ValidatePassword(reqBody.Password)) {
      return { status: "weakPassword" };
    }
    // if (!reqBody.FavourateCategory.length === 3) {
    //   return { status: "fail" };
    // }
    // checking existing user
    let existingUser = await UserModel.findOne(Query);
    if (existingUser) {
      return { status: "existingUser" };
    }
    // if all is okay then a new user will be registered with an encrypted password
    let hashedPass = await EncodePassword(reqBody.Password);
    let myBody = {
      ...reqBody,
      Password: hashedPass,
      Image: req.file.path,
    };
    // creating new account
    await UserModel.create(myBody);
    // setting default value
    await OTPModel.updateOne(Query, { $set: { otp: 0, Status: false } });

    return { status: "success" };
  } catch (error) {
    console.log(error);
    return { status: "fail" };
  }
};

exports.LoginService = async (req, res) => {
  try {
    let reqBody = req.body;
    let Query = { Email: reqBody.Email };
    const user = await UserModel.findOne(Query);
    if (!user) {
      return { status: "newUser" };
    }
    let result = await DecodePassword(reqBody.Password, user.Password);
    if (!result) {
      return { status: "incorrectPassword" };
    }
    // generating jwt token and saving to the cookies
    let token = EncodeToken(user.Email, user._id);
    SetCookie(res, "token", token);

    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadUserService = async (req) => {
  try {
    let Query = { Email: req.headers.email };
    const projection = { Password: 0 };
    const result = await UserModel.findOne(Query, projection);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.UpdateUserService = async (req) => {
  try {
    let reqBody = req.body;
    let Query = { Email: req.headers.email };
    if (reqBody.Email || reqBody.Password) {
      return { status: "fail" };
    }
    await UserModel.updateOne(Query, reqBody);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.UpdatePasswordService = async (req) => {
  try {
    let reqBody = req.body;
    let Query = { Email: req.headers.email };
    let data = await UserModel.findOne(Query);
    if (!data) {
      return { status: "fail" };
    }
    let user = await DecodePassword(reqBody.OldPassword, data.Password);
    if (!user) {
      return { status: "incorrectPassword" };
    }
    if (reqBody.OldPassword === reqBody.NewPassword) {
      return { status: "samePassword" };
    }
    if (!ValidatePassword(reqBody.NewPassword)) {
      return { status: "weakPassword" };
    }
    let hashedPass = await EncodePassword(reqBody.NewPassword);
    await UserModel.updateOne(Query, { $set: { Password: hashedPass } });

    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.DeactivateUserService = async (req) => {
  try {
    let Query = { Email: req.headers.email };
    await DeactivatedModel.deleteOne(Query);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.DeleteUserService = async (req) => {
  try {
    let Query = { Email: req.headers.email };
    await UserModel.deleteOne(Query);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.RecoveryPasswordService = async (req) => {
  try {
    let { Email, Password } = req.body;
    let Query = { Email: Email };
    let result = await OTPModel.findOne(Query);
    if (result.Status !== true) {
      return { status: "invalidUser" };
    }
    if (!ValidatePassword(Password)) {
      return { status: "weakPassword" };
    }
    let hashedPassword = await EncodePassword(Password);
    await UserModel.updateOne(Query, { $set: { Password: hashedPassword } });
    // setting status value
    await OTPModel.updateOne(Query, { $set: { Status: false } });

    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.AddExpressionService = async (req) => {
  try {
    let Query = { Email: req.headers.email };
    await ExpressionModel.deleteOne(Query);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.CreateCommentService = async (req) => {
  try {
    let Query = { Email: req.headers.email };
    await CommentModel.deleteOne(Query);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReportByUserService = async (req) => {
  try {
    let Query = { Email: req.headers.email };
    await ReportByReaderModel.deleteOne(Query);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadAllReportByUserService = async (req) => {
  try {
    let Query = { Email: req.headers.email };
    await ReportByReaderModel.deleteOne(Query);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.WidrawReportByUserService = async (req) => {
  try {
    let Query = { Email: req.headers.email };
    await ReportByReaderModel.deleteOne(Query);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.DeleteUserService = async (req) => {
  try {
    let Query = { Email: req.headers.email };
    await UserModel.deleteOne(Query);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.DeleteUserService = async (req) => {
  try {
    let Query = { Email: req.headers.email };
    await UserModel.deleteOne(Query);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.DeleteUserService = async (req) => {
  try {
    let Query = { Email: req.headers.email };
    await UserModel.deleteOne(Query);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.DeleteUserService = async (req) => {
  try {
    let Query = { Email: req.headers.email };
    await UserModel.deleteOne(Query);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};
