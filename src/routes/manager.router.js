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
  SendGlobalNotice,
  SendNoticeToSingleUser,
} = require("../controllers/manager.controller");

router.post("/loginAsManager", LoginAsManager);
router.post("/logoutAsManager", AuthVerify, LogoutAsManager);
// basic features
router.get("/readAllUser", AuthVerify, ReadAllUser);
router.post("/createCategory", AuthVerify, CreateCategory);
router.post("/createTopic/:categoryID", AuthVerify, CreateTopic);
router.post("/deleteCategory/:categoryID", AuthVerify, DeleteCategory);
router.post("/deleteTopic/:topicID", AuthVerify, DeleteTopic);
// privacy features
router.post("/sendGlobalNotice", AuthVerify, SendGlobalNotice);
router.post("/sendNoticeToSingleUser/:userID", AuthVerify, SendNoticeToSingleUser);
router.post("/deleteNotice/:noticeID", AuthVerify, DeleteNotice);
router.post("/blockUser/:userID", AuthVerify, BlockUser);
router.post("/unblockUser/:userID", AuthVerify, UnblockUser);
router.get(
  "/readAllReportSubmitedByUser",
  AuthVerify,
  ReadAllReportSubmitedByUser
);
router.get(
  "/readSingleReportSubmitedByUser/:reportID",
  AuthVerify,
  ReadSingleReportSubmitedByUser
);
router.get(
  "/readAllReportSubmitedByWriter",
  AuthVerify,
  ReadAllReportSubmitedByWriter
);
router.get(
  "/readSingleReportSubmitedByWriter/:reportID",
  AuthVerify,
  ReadSingleReportSubmitedByWriter
);

module.exports = router;
