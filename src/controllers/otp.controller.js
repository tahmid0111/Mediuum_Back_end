const {
  SendOTPRequestService,
  SendOTPVerifyService,
} = require("../services/otp.service");

exports.SendOTPRequest = async (req, res) => {
  let result = await SendOTPRequestService(req);

  if (result.status === "success") {
    res.status(200).json({
      status: result.status,
      message: "6 Digit OTP has been send",
      userEmail: result.userEmail,
    });
  } else if (result.status === "invalidEmail") {
    res.status(200).json({
      status: result.status,
      message: "Please provide the right email",
    });
  } else {
    sendError(res);
  }
};

exports.SendOTPVerify = async (req, res) => {
  let result = await SendOTPVerifyService(req, res);

  if (result.status === "success") {
    res.status(200).json({
      status: result.status,
      message: "User verified",
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
