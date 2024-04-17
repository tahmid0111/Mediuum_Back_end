const express = require("express");
const router = express.Router();

const { AuthVerify } = require("../middleware/AuthVerify.middleware");
const {
  ReadAllBlog,
  ReadAllCategory,
  ReadAllTopicByCategory,
  ReadBlogByCategory,
  ReadBlogByTopic,
  ReadSingleBlog,
  ReadAllCommentByBlog,
  ReadAllExpressionByBlog,
  ReadSingleExpressionByBlog,
} = require("../controllers/blog.controller");

// guest features
router.get("/readAllBlog", ReadAllBlog);
router.get("/readAllCategory", ReadAllCategory);
router.get("/readAllTopicByCategory/:category_id", ReadAllTopicByCategory);
router.get("/readBlogByCategory/:category_id", ReadBlogByCategory);
router.get("/readBlogByTopic/:topic_id", ReadBlogByTopic);
// reader features
router.get("/readSingleBlog/:blog_id", AuthVerify, ReadSingleBlog);
router.get("/readAllCommentByBlog/:blog_id", AuthVerify, ReadAllCommentByBlog);
router.get(
  "/readAllExpressionByBlog/:blog_id",
  AuthVerify,
  ReadAllExpressionByBlog
);
router.get(
  "/readSingleExpressionByBlog/:blog_id",
  AuthVerify,
  ReadSingleExpressionByBlog
);

module.exports = router;
