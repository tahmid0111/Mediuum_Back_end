const express = require("express");
const {
  CreateManager,
  ReadAllUser,
  ReadAllWriter,
  CreateCategory,
  CreateTopic,
  DeleteCategory,
  DeleteTopic,
  SendNotice,
  DeleteNotice,
  ReadAllReportSubmitedByUser,
  ReadAllReportSubmitedByWriter,
  GlobalUnblockUser,
  GlobalBlockUser,
} = require("../../controllers/admin/manager.controller");
const router = express.Router();

router.post("/readAllUser", ReadAllUser);
router.post("/readAllWriter", ReadAllWriter);
// basic features
router.post("/createCategory", CreateCategory);
router.post("/createTopic", CreateTopic);
router.post("/deleteCategory/:categoryID", DeleteCategory);
router.post("/deleteTopic/:topicID", DeleteTopic);
// privacy features
router.post("/sendNotice", SendNotice);
router.post("/deleteNotice/:noticeID", DeleteNotice);
router.post("/globalBlockUser/:userID", GlobalBlockUser);
router.post("/globalUnblockUser/:userID", GlobalUnblockUser);
router.post("/readAllReportSubmitedByWriter/:writerID", ReadAllReportSubmitedByWriter);
router.post(
  "/readAllReportSubmitedByUser/:userID",
  ReadAllReportSubmitedByUser
);

module.exports = router;
