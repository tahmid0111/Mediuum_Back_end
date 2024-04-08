const express = require("express");
const {
  VerifyOTP,
  SendEmailWithOTP,
} = require("../../controllers/otp/otp.controller");
const router = express.Router();

router.post("/sendEmailWithOTP", SendEmailWithOTP);
router.post("/verifyOTP", VerifyOTP);

module.exports = router;
