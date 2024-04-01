const express = require("express");
const {
  SendOTPRequest,
  SendOTPVerify,
} = require("../controllers/otp.controller");
const router = express.Router();

router.post("/sendOTPRequest", SendOTPRequest);
router.post("/sendOTPVerify", SendOTPVerify);

module.exports = router;
