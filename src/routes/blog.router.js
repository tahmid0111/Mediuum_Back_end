const express = require("express");
const router = express.Router();

const { AuthVerify } = require("../middleware/AuthVerify.middleware");
const { ReadAllBlog, ReadAllCategory, ReadAllTopicByCategory, ReadBlogByCategory, ReadBlogByTopic, ReadSingleBlog, ReadAllCommentByBlog, ReadAllExpressionByBlog, ReadSingleExpressionByBlog } = require("../controllers/blog.controller");

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
