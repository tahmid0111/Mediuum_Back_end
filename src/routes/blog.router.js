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
  ReadAllWriter,
  ReadSingleWriter,
  ReadSingleUser,
} = require("../controllers/blog.controller");

// guest features
router.get("/readAllBlog", ReadAllBlog);
router.get("/readAllWriter", ReadAllWriter);
router.get("/readSingleWriter/:writer_id", AuthVerify, ReadSingleWriter);
router.get("/readSingleUser/:user_id", AuthVerify, ReadSingleUser);
router.get("/readAllCategory", ReadAllCategory);
router.get("/readAllTopicByCategory/:categoryID", ReadAllTopicByCategory);
router.get("/readBlogByCategory/:categoryID", ReadBlogByCategory);
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
