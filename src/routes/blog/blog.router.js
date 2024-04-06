const express = require("express");
const router = express.Router();

const { AuthVerify } = require("../../middleware/tokenVerify");
const {
  ReadSingleExpressionByBlog,
  ReadAllExpressionByBlog,
  ReadAllCommentByBlog,
  ReadSingleBlog,
  ReadBlogByTopic,
  ReadBlogByCategory,
  ReadAllTopicByCategory,
  ReadAllCategory,
  ReadAllBlog,
} = require("../../controllers/blog/blog.controller");

// guest features
router.post("/readAllBlog", ReadAllBlog);
router.get("/readAllCategory", ReadAllCategory);
router.get("/readAllTopicByCategory/:categoryID", ReadAllTopicByCategory);
router.get("/readBlogByCategory/:categoryID", ReadBlogByCategory);
router.get("/readBlogByTopic/:topicID", ReadBlogByTopic);
// reader features
router.get("/readSingleBlog/:blogID", ReadSingleBlog);
router.get("/readAllCommentByBlog/:blogID", ReadAllCommentByBlog);
router.get("/readAllExpressionByBlog/:blogID", ReadAllExpressionByBlog);
router.get("/readSingleExpressionByBlog/:blogID", ReadSingleExpressionByBlog);

module.exports = router;
