const express = require("express");
const router = express.Router();

const { AuthVerify } = require("../middleware/AuthVerify.middleware");

const {
  LoginAsManager,
  ReadAllUser,
  CreateCategory,
  CreateTopic,
  DeleteCategory,
  DeleteTopic,
  SendNotice,
  DeleteNotice,
  ReadAllReportSubmitedByUser,
  ReadAllReportSubmitedByWriter,
  LogoutAsManager,
  BlockUser,
  UnblockUser,
  ReadSingleReportSubmitedByWriter,
  ReadSingleReportSubmitedByUser,
} = require("../controllers/manager.controller");

router.post("/loginAsManager", LoginAsManager);
router.post("/logoutAsManager", AuthVerify, LogoutAsManager);
// basic features
router.get("/readAllUser", AuthVerify, ReadAllUser);
router.post("/createCategory", AuthVerify, CreateCategory);
router.post("/createTopic/:category_id", AuthVerify, CreateTopic);
router.post("/deleteCategory/:category_id", AuthVerify, DeleteCategory);
router.post("/deleteTopic/:topic_id", AuthVerify, DeleteTopic);
// privacy features
router.post("/sendGlobalNotice", AuthVerify, SendNotice);
router.post("/sendNoticeToSingleUser/:user_id", AuthVerify, SendNotice);
router.post("/deleteNotice/:notice_id", AuthVerify, DeleteNotice);
router.post("/blockUser/:user_id", AuthVerify, BlockUser);
router.post("/unblockUser/:user_id", AuthVerify, UnblockUser);
router.get(
  "/readAllReportSubmitedByUser",
  AuthVerify,
  ReadAllReportSubmitedByUser
);
router.get(
  "/readSingleReportSubmitedByUser/:report_id",
  AuthVerify,
  ReadSingleReportSubmitedByUser
);
router.get(
  "/readAllReportSubmitedByWriter",
  AuthVerify,
  ReadAllReportSubmitedByWriter
);
router.get(
  "/readSingleReportSubmitedByWriter/:report_id",
  AuthVerify,
  ReadSingleReportSubmitedByWriter
);

module.exports = router;
