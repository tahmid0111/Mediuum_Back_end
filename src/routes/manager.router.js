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
  CreateTrendingBlog,
  CreatePopularWriter,
  DeleteTrendingBlog,
  DeletePopularWriter,
  ReadAllTrendingBlog,
  ReadAllPopularWriter,
} = require("../controllers/manager.controller");

router.post("/loginAsManager", LoginAsManager);
router.post("/logoutAsManager", AuthVerify, LogoutAsManager);
// basic features
router.get("/readAllUser", AuthVerify, ReadAllUser);
router.post("/createCategory", CreateCategory);
router.post("/createTopic/:categoryID", CreateTopic);
router.post("/deleteCategory/:categoryID", AuthVerify, DeleteCategory);
router.post("/deleteTopic/:topicID", AuthVerify, DeleteTopic);
// trending blogs and writers
router.post("/createTrendingBlog/:blogID", CreateTrendingBlog);
router.get("/readAllTrendingBlog", ReadAllTrendingBlog);
router.post("/createPopularWriter/:userID", CreatePopularWriter);
router.get("/readAllPopularWriter", ReadAllPopularWriter);
// router.post("/deleteTrendingBlog/:userID", DeleteTrendingBlog);
// router.post("/deletePopularWriter/:userID", DeletePopularWriter);
// privacy features
router.post("/sendGlobalNotice", AuthVerify, SendGlobalNotice);
router.post(
  "/sendNoticeToSingleUser/:userID",
  AuthVerify,
  SendNoticeToSingleUser
);
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
