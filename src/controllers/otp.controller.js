const { sendError } = require("../helpers/important/common.helper");
const {
  SendEmailWithOTPService,
  VerifyOTPService,
} = require("../services/otp.service");

exports.SendEmailWithOTP = async (req, res) => {
  let result = await SendEmailWithOTPService(req);

  if (result.status === "success") {
    res.status(200).json({
      status: result.status,
      message: "6 Digit OTP has been send",
      userEmail: result.userEmail,
    });
  } else if (result.status === "invalidEmail") {
    res.status(200).json({
      status: result.status,
      message: "Please provide a valid email",
    });
  } else {
    sendError(res);
  }
};

exports.VerifyOTP = async (req, res) => {
  let result = await VerifyOTPService(req, res);

  if (result.status === "success") {
    res.status(200).json({
      status: result.status,
      message: "Email verified",
    });
  } else if (result.status === "wrongOTP") {
    res.status(200).json({
      status: result.status,
      message: "wrong otp code",
    });
  } else {
    sendError(res);
  }
};
