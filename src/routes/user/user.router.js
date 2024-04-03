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
router.get("/readUser", AuthVerify, ReadUser);
router.post("/updateUser", AuthVerify, UpdateUser);
router.post("/updatePassword", AuthVerify, UpdatePassword);
router.post("/deactivateUser", AuthVerify, UpdatePassword);
router.post("/deleteUser", AuthVerify, DeleteUser);
// extra features
router.post("/recoveryPassword", RecoveryPassword);

module.exports = router;
