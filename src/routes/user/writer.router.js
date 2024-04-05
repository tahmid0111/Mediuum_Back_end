const express = require("express");
const {
  WidrawReportByWriter,
  ReadAllReportByWriter,
  ReportByWriter,
  DeleteCommentByWriter,
  DeleteBlog,
  UpdateBlog,
  PublishBlog,
  DeleteBlogDraft,
  UpdateBlogDraft,
  CreateBlogDraft,
  UpdateWriterProfile,
  ReadWriterProfile,
  CreateWriterProfile,
} = require("../../controllers/user/writer.controller");
const { AuthVerify } = require("../../middleware/tokenVerify");
const router = express.Router();

router.post("/createWriterProfile", AuthVerify, CreateWriterProfile);
router.post("/readWriterProfile", AuthVerify, ReadWriterProfile);
router.post("/updateWriterProfile", AuthVerify, UpdateWriterProfile);
// draft related API
router.post("/createBlogDraft", AuthVerify, CreateBlogDraft);
router.post("/updateBlogDraft", AuthVerify, UpdateBlogDraft);
router.post("/deleteBlogDraft", AuthVerify, DeleteBlogDraft);
// blog related API
router.post("/publishBlog", AuthVerify, PublishBlog);
router.post("/updateBlogContent", AuthVerify, UpdateBlog);
router.post("/deleteBlog", AuthVerify, DeleteBlog);
// comment related API
router.post("/deleteCommentByWriter", AuthVerify, DeleteCommentByWriter);
// report features
router.post("/reportByWriter", AuthVerify, ReportByWriter);
router.post("/readAllReportByWriter", AuthVerify, ReadAllReportByWriter);
router.post("/widrawReportByWriter", AuthVerify, WidrawReportByWriter);

module.exports = router;
