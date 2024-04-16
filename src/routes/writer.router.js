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
router.get("/readAllBlogByOwn", AuthVerify, ReadWriterProfile);
router.get("/readAllfollower", AuthVerify, ReadWriterProfile);
router.post("/updateWriterProfile", AuthVerify, UpdateWriterProfile);
// draft related API
router.post("/createBlogDraft", AuthVerify, CreateBlogDraft);
router.post("/updateBlogDraft", AuthVerify, UpdateBlogDraft);
router.post("/deleteBlogDraft", AuthVerify, DeleteBlogDraft);
// blog related API
router.post("/publishBlog", AuthVerify, PublishBlog);
router.post("/updateBlogContent", AuthVerify, UpdateBlog);
router.post("/deleteBlog", AuthVerify, DeleteBlog);
router.post("/deleteCommentByWriter", AuthVerify, DeleteCommentByWriter);
// report features
router.post("/reportByWriter", AuthVerify, ReportByWriter);
router.post("/readAllReportByWriter", AuthVerify, ReadAllReportByWriter);
router.post("/widrawReportByWriter", AuthVerify, WidrawReportByWriter);

module.exports = router;
