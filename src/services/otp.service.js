const { CreateOTP, SendOTP } = require("../helpers/important/otp.helper");
const { ValidateEmail } = require("../helpers/others/regex.helper");
const OTPModel = require("../models/otp.model");

exports.SendOTPRequestService = async (req) => {
  try {
    let email = req.body.Email;
    if (!ValidateEmail(email)) {
      return { status: "invalidEmail" };
    }
    let code = CreateOTP();
    let myBody = {
      Email: email,
      otp: code,
    };
    await OTPModel.create(myBody);
    await SendOTP(email, code);

    return { status: "success", userEmail: email };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.SendOTPVerifyService = async (req) => {
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
