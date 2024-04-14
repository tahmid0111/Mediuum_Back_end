const { CreateOTP, SendOTP } = require("../helpers/others/otp.helper");
const { ValidateEmail } = require("../helpers/others/regex.helper");
const OTPModel = require("../models/otp/otp.model");

exports.SendEmailWithOTPService = async (req) => {
  try {
    let email = req.body.Email;
    let Query = { Email: email };
    if (!ValidateEmail(email)) {
      return { status: "invalidEmail" };
    }
    let code = CreateOTP();
    let myBody = {
      Email: email,
      otp: code,
    };
    await OTPModel.updateOne(Query, myBody, { upsert: true });
    await SendOTP(email, code);

    return { status: "success", userEmail: email };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.VerifyOTPService = async (req) => {
  try {
    let { Email, otp } = req.body;
    let Query = { Email: Email, otp: otp };
    let result = await OTPModel.findOne(Query);
    if (!result) {
      return { status: "wrongOTP" };
    }
    await OTPModel.updateOne(Query, { $set: { Status: true } });
    return { status: "success" };
  } catch (error) {
    return { status: "fail" };
  }
};
