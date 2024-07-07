const express = require("express");
const router = express.Router();

const {
  SendEmailWithOTP,
  VerifyOTP,
} = require("../controllers/otp.controller");

router.post("/sendEmailWithOTP", SendEmailWithOTP);
router.post("/verifyOTP", VerifyOTP);

module.exports = router;
