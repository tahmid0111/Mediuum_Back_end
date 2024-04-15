const express = require("express");

const { AuthVerify } = require("../middleware/AuthVerify.middleware");
const {
  LoginAsManager,
  ReadAllUser,
  ReadAllWriter,
  CreateCategory,
  CreateTopic,
  DeleteCategory,
  DeleteTopic,
  SendNotice,
  DeleteNotice,
  GlobalBlockUser,
  GlobalUnblockUser,
  ReadAllReportSubmitedByUser,
  ReadAllReportSubmitedByWriter,
} = require("../controllers/manager.controller");
const router = express.Router();

router.post("/loginAsManager", LoginAsManager);
router.post("/logoutAsManager", AuthVerify, LoginAsManager);
// basic features
router.get("/readAllUser", AuthVerify, ReadAllUser);
router.get("/readAllWriter", ReadAllWriter);
router.post("/createCategory", CreateCategory);
router.post("/createTopic", CreateTopic);
router.post("/deleteCategory/:categoryID", DeleteCategory);
router.post("/deleteTopic/:topicID", DeleteTopic);
// privacy features
router.post("/sendGlobalNotice", SendNotice);
router.post("/sendSingleNotice", SendNotice);
router.post("/deleteNotice/:noticeID", DeleteNotice);
router.post("/globalBlockUser/:userID", GlobalBlockUser);
router.post("/globalUnblockUser/:userID", GlobalUnblockUser);
router.post(
  "/readAllReportSubmitedByUser/:userID",
  ReadAllReportSubmitedByUser
);
router.post(
  "/readAllReportSubmitedByWriter/:writerID",
  ReadAllReportSubmitedByWriter
);

module.exports = router;
