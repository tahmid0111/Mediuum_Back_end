// helpers
const { EncodePassword, DecodePassword } = require("../utility/bcrypt.utility");
const { ValidatePassword } = require("../helpers/regex.helper");
const { RemoveCookie, SetCookie } = require("../helpers/cookie.helper");
const { EncodeToken } = require("../utility/jwt.utility");
// models
const UserModel = require("../models/user/user.model");
const OTPModel = require("../models/otp/otp.model");
const ReportByReaderModel = require("../models/privacy/reportByReader.model");
const ExpressionModel = require("../models/features/expression.model");
const CommentModel = require("../models/features/comment.model");
const FollowerModel = require("../models/features/follower.model");
const NoticeModel = require("../models/privacy/notice.model");
const GlobalNoticeModel = require("../models/privacy/globalNotice.model");

// const DeactivatedModel = require("../models/privacy/deactivated.model");

exports.RegistrationService = async (req) => {
  try {
    let reqBody = req.body;
    let Query = { Email: reqBody.Email };

    let data = await OTPModel.findOne(Query);
    if (!data || data.Status !== true) {
      return { status: "notVerified" };
    }
    // Validating given info using regex
    if (!ValidatePassword(reqBody.Password)) {
      return { status: "weakPassword" };
    }
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
    console.log(error, "hi3");
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
    if (user.Deactivated) {
      return { status: "deactivated" };
    }
    let result = await DecodePassword(reqBody.Password, user.Password);
    if (!result) {
      return { status: "incorrectPassword" };
    }
    // generating jwt token and saving to the cookies
    let token = EncodeToken(user.Email, user._id);
    SetCookie(res, "token", token);

    return { status: "success", data: token };
  } catch (error) {
    console.log(error)
    return { status: "fail" };
  }
};

exports.LogoutService = async (req, res) => {
  try {
    await RemoveCookie(res);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadUserService = async (req) => {
  try {
    let Query = { Email: req.headers.email };
    console.log(req.headers.email)
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
    if (req.file.path) {
      let myBody = {
        ...reqBody,
        Image: req.file.path,
      };
      await UserModel.updateOne(Query, myBody);
      return { status: "success" };
    } else {
      await UserModel.updateOne(Query, reqBody);
      return { status: "success" };
    }
  } catch (error) {
    return { status: "fail" };
  }
};

exports.UpdatePasswordService = async (req) => {
  try {
    let reqBody = req.body;
    let Query = { Email: req.headers.email };
    let data = await UserModel.findOne(Query);
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

exports.DeleteUserService = async (req, res) => {
  try {
    let reqBody = req.body;
    let email = req.headers.email;
    let Query = { Email: email };

    let user = await UserModel.findOne(Query);
    let result = await DecodePassword(reqBody.Password, user.Password);
    if (!result) {
      return { status: "incorrectPassword" };
    }

    await UserModel.deleteOne(Query);
    await RemoveCookie(res, "token");

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

exports.DeactivateUserService = async (req, res) => {
  try {
    let reqBody = req.body;
    let email = req.headers.email;
    let Query = { Email: email };

    let user = await UserModel.findOne(Query);
    let result = await DecodePassword(reqBody.Password, user.Password);
    if (!result) {
      return { status: "incorrectPassword" };
    }
    // await DeactivatedModel.create(Query);
    await UserModel.updateOne(Query, { $set: { Deactivated: true } });
    await RemoveCookie(res, "token");

    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReactivateUserService = async (req, res) => {
  try {
    let Query = { Email: req.body.Email };

    // await DeactivatedModel.delete(Query);
    let result = await UserModel.updateOne(Query, {
      $set: { Deactivated: false },
    });
    console.log(result);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadAllGlobalNoticeService = async (req) => {
  try {
    let result = await GlobalNoticeModel.find();
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadAllNoticeByUserService = async (req) => {
  try {
    let Query = { UserID: req.params.user_id };
    let result = await NoticeModel.find(Query);

    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadGlobalSingleNoticeService = async (req) => {
  try {
    let Query = { _id: req.params.notice_id };
    let result = await GlobalNoticeModel.findOne(Query);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadSingleNoticeService = async (req) => {
  try {
    let Query = { _id: req.params.notice_id };
    let result = await NoticeModel.findOne(Query);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReportByUserService = async (req) => {
  try {
    let readerID = req.headers.user_id;
    let writerID = req.params.writerID;

    let reported = await ReportByReaderModel.findOne({
      ReporterID: readerID,
      ReportedWriterID: writerID,
    });
    if (reported) {
      return { status: "alreadyReported" };
    }
    let myBody = {
      ReporterID: readerID,
      ReportedWriterID: writerID,
      Report: req.body.Report,
      ReportDetails: req.body.ReportDetails,
    };

    await ReportByReaderModel.create(myBody);
    return { status: "success" };
  } catch (error) {
    console.log(error);
    return { status: "fail" };
  }
};

exports.ReadAllReportByUserService = async (req) => {
  try {
    let readerID = req.headers.user_id;
    let Query = { ReporterID: readerID };

    let result = await ReportByReaderModel.find(Query);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.WithrawReportByUserService = async (req) => {
  try {
    let readerID = req.headers.user_id;
    let writerID = req.body.writerID;
    let Query = {
      ReporterID: readerID,
      ReportedWriterID: writerID,
    };
    await ReportByReaderModel.deleteOne(Query);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.FollowWriterService = async (req) => {
  try {
    let followerID = req.headers.user_id;
    let writerID = req.params.writerID;

    let followed = await FollowerModel.findOne({
      FollowerID: followerID,
      WriterID: writerID,
    });
    if (followed) {
      return { status: "alreadyFollowed" };
    }
    let myBody = {
      FollowerID: followerID,
      WriterID: writerID,
    };

    await FollowerModel.create(myBody);
    return { status: "success" };
  } catch (error) {
    console.log(error);
    return { status: "fail" };
  }
};

exports.ReadAllFollowingService = async (req) => {
  try {
    let Query = { FollowerID: req.headers.user_id };

    let result = await FollowerModel.find(Query);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.AddExpressionService = async (req) => {
  try {
    let readerID = req.headers.user_id;
    let blogID = req.params.blogID;
    let expression = req.body.Expression;
    let Query = {
      ReaderID: readerID,
      BlogID: blogID,
    };
    let isLiked = await ExpressionModel.findOne(Query);
    if (isLiked) {
      await ExpressionModel.deleteOne(Query);
      return { status: "success" };
    }
    let myBody = {
      ReaderID: readerID,
      BlogID: blogID,
      Like: true,
      Expression: expression,
    };

    await ExpressionModel.create(myBody);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.CreateCommentService = async (req) => {
  try {
    let readerID = req.headers.user_id;
    let blogID = req.params.blogID;
    let myBody = {
      ReaderID: readerID,
      BlogID: blogID,
      Comment: req.body.Comment,
    };

    await CommentModel.create(myBody);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.DeleteCommentByUserService = async (req) => {
  try {
    let readerID = req.headers.user_id;
    let commentID = req.params.commentID;
    let Query = {
      ReaderID: readerID,
      _id: commentID,
    };

    await CommentModel.deleteOne(Query);
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};
