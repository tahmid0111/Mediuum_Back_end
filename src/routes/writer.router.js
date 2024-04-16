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
router.get("/readAllFollower/:writer_id", AuthVerify, ReadAllFollower);
router.post(
  "/updateWriterProfile",
  AuthVerify,
  upload.single("file"),
  UpdateWriterProfile
);
// draft related API
router.post("/createBlogDraft/:writer_id", AuthVerify, CreateBlogDraft);
router.get(
  "/readAllBlogDraftByWriter/:writer_id",
  AuthVerify,
  ReadAllBlogDraft
);
router.get("/readSingleBlogDraft/:draft_id", AuthVerify, ReadSingleBlogDraft);
router.post("/updateBlogDraft/:draft_id", AuthVerify, UpdateBlogDraft);
router.post("/deleteBlogDraft/:draft_id", AuthVerify, DeleteBlogDraft);
// blog related API
router.post(
  "/publishBlog/:draft_id",
  AuthVerify,
  upload.single("file"),
  PublishBlog
);
router.get("/readAllBlogByWriter/:writer_id", AuthVerify, ReadAllBlogByWriter);
router.post("/updateBlogContent/:blog_id", AuthVerify, UpdateBlog);
router.post("/deleteBlog/:blog_id", AuthVerify, DeleteBlog);
// report features
router.post("/reportByWriter/:reader_id", AuthVerify, ReportByWriter);
router.get("/readAllReportByWriter/:writer_id", AuthVerify, ReadAllReportByWriter);
router.post("/widrawReportByWriter/:report_id", AuthVerify, WidrawReportByWriter);

module.exports = router;
