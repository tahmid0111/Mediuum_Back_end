const express = require("express");
const { SendEmailWithOTP, VerifyOTP } = require("../controllers/otp.controller");
const router = express.Router();

router.post("/sendEmailWithOTP", SendEmailWithOTP);
router.post("/verifyOTP", VerifyOTP);

module.exports = router;
