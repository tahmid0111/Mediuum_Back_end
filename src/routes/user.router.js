const express = require("express");
const multer = require("multer");
const router = express.Router();

const storage = require("../utility/cloudinary.utility");

const { AuthVerify } = require("../middleware/AuthVerify.middleware");
// importing user controllers
const {
  Registration,
  Login,
  ReadUser,
  UpdateUser,
  UpdatePassword,
  DeactivateUser,
  RecoveryPassword,
  DeleteUser,
  Logout,
  ReactivateUser,
  ReportByUser,
  ReadAllReportByUser,
  WithrawReportByUser,
  FollowWriter,
  ReadAllFollowing,
  AddExpression,
  CreateComment,
  DeleteCommentByUser,
  ReadAllGlobalNotice,
  ReadAllNoticeByUser,
  ReadGlobalSingleNotice,
  ReadSingleNotice,
} = require("../controllers/user.controller");

// Initialize Multer with the storage configuration
const upload = multer({ storage });

router.post("/register", upload.single("file"), Registration);
router.post("/login", Login);
router.post("/logout", AuthVerify, Logout);

router.get("/readUserProfile", AuthVerify, ReadUser);
router.post("/updateUserInfo", AuthVerify, upload.single("file"), UpdateUser);
router.post("/updateUserPassword", AuthVerify, UpdatePassword);
router.post("/deleteUser", AuthVerify, DeleteUser);
// security features
router.post("/recoveryPassword", RecoveryPassword);
router.post("/deactivateUser", AuthVerify, DeactivateUser);
router.post("/reactivateUser", ReactivateUser);

router.get("/readAllGlobalNotice", AuthVerify, ReadAllGlobalNotice);
router.get("/readAllNoticeByUser/:user_id", AuthVerify, ReadAllNoticeByUser);
router.get(
  "/readGlobalSingleNotice/:notice_id",
  AuthVerify,
  ReadGlobalSingleNotice
);
router.get("/readSingleNotice/:notice_id", AuthVerify, ReadSingleNotice);

router.post("/reportByUser/:writerID", AuthVerify, ReportByUser);
router.get("/readAllReportByUser/:user_id", AuthVerify, ReadAllReportByUser);
router.post("/withrawReportByUser/:report_id", AuthVerify, WithrawReportByUser);
// blog related features
router.post("/followWriter/:writerID", AuthVerify, FollowWriter);
router.get("/readAllFollowing/:writer_id", AuthVerify, ReadAllFollowing);

router.post("/addExpression/:blogID", AuthVerify, AddExpression);
router.post("/createComment/:blogID", AuthVerify, CreateComment);
router.post("/deleteCommentByUser/:commentID", AuthVerify, DeleteCommentByUser);

module.exports = router;
