const express = require("express");
const router = express.Router();
// importing user controllers
const {
  Registration,
  Login,
  ReadUser,
  UpdateUser,
  DeleteUser,
  UpdatePassword,
  RecoveryPassword,
} = require("../../controllers/user/user.controller");
const { AuthVerify } = require("../../middleware/tokenVerify");

router.post("/register", Registration);
router.post("/login", Login);
router.get("/readUserProfile", AuthVerify, ReadUser);
router.post("/updateUserInfo", AuthVerify, UpdateUser);
router.post("/updateUserPassword", AuthVerify, UpdatePassword);
router.post("/deactivateUser", AuthVerify, UpdatePassword);
router.post("/deleteUser", AuthVerify, DeleteUser);
// extra features
router.post("/recoveryPassword", RecoveryPassword);
// blog related features
router.post("/addExpression", AuthVerify, DeleteUser);
router.post("/createComment", AuthVerify, DeleteUser);
// report features
router.post("/reportByUser", AuthVerify, DeleteUser);
router.post("/readAllReportByUser", AuthVerify, DeleteUser);
router.post("/widrawReportByUser", AuthVerify, DeleteUser);

module.exports = router;
