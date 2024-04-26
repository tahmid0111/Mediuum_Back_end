const {
  sendResponse,
  sendErrorResponse,
} = require("../helpers/response.helper");
const {
  SendEmailWithOTPService,
  VerifyOTPService,
} = require("../services/otp.service");

exports.SendEmailWithOTP = async (req, res) => {
  let result = await SendEmailWithOTPService(req);

  result.status === "success"
    ? sendResponse(res, "6 Digit OTP has been send!", result.userEmail)
    : result.status === "invalidEmail"
    ? sendResponse(res, "Please provide a valid email!", undefined, 409)
    : sendErrorResponse(res);
};

exports.VerifyOTP = async (req, res) => {
  let result = await VerifyOTPService(req, res);

  result.status === "success"
    ? sendResponse(res, "Email verified!")
    : result.status === "wrongOTP"
    ? sendResponse(res, "wrong otp code!", undefined, 200, result.status)
    : sendErrorResponse(res);
};
