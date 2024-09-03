const express = require("express");
const multer = require("multer");
const router = express.Router();

const { AuthVerify } = require("../middleware/AuthVerify.middleware");

const {
  CreateWriterProfile,
  ReadWriterProfile,
  UpdateWriterProfile,
  CreateBlogDraft,
  UpdateBlogDraft,
  DeleteBlogDraft,
  PublishBlog,
  UpdateBlog,
  DeleteBlog,
  DeleteCommentByWriter,
  ReportByWriter,
  ReadAllReportByWriter,
  WidrawReportByWriter,
  ReadAllFollower,
  ReadAllBlogDraft,
  ReadSingleBlogDraft,
  ReadAllBlogByWriter,
} = require("../controllers/writer.controller");

const storage = require("../utility/cloudinary.utility");
const upload = multer({ storage });

router.post(
  "/createWriterProfile",
  AuthVerify,
  upload.single("file"),
  CreateWriterProfile
);
router.get("/readWriterProfile", AuthVerify, ReadWriterProfile);
router.get("/readAllFollower/:writerID", AuthVerify, ReadAllFollower);
router.post(
  "/updateWriterProfile",
  AuthVerify,
  upload.single("file"),
  UpdateWriterProfile
);
// draft related API
router.post("/createBlogDraft/:writerID", AuthVerify, CreateBlogDraft);
router.get(
  "/readAllBlogDraftByWriter/:writerID",
  AuthVerify,
  ReadAllBlogDraft
);
router.get("/readSingleBlogDraft/:draftID", AuthVerify, ReadSingleBlogDraft);
router.post("/updateBlogDraft/:draftID", AuthVerify, UpdateBlogDraft);
router.post("/deleteBlogDraft/:draftID", AuthVerify, DeleteBlogDraft);
// blog related API
router.post(
  "/publishBlog/:draftID",
  AuthVerify,
  upload.single("file"),
  PublishBlog
);
router.get("/readAllBlogByWriter/:writerID", AuthVerify, ReadAllBlogByWriter);
router.post("/updateBlogContent/:blogID", AuthVerify, UpdateBlog);
router.post("/deleteBlog/:blogID", AuthVerify, DeleteBlog);
// report features
router.post("/reportByWriter/:readerID", AuthVerify, ReportByWriter);
router.get("/readAllReportByWriter/:writerID", AuthVerify, ReadAllReportByWriter);
router.post("/widrawReportByWriter/:reportID", AuthVerify, WidrawReportByWriter);

module.exports = router;
