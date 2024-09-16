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
  AddToLibrary,
} = require("../controllers/blog.controller");

// guest features
router.get("/readAllBlog",AuthVerify, ReadAllBlog);
router.get("/readAllWriter", AuthVerify, ReadAllWriter);
router.get("/readSingleWriter/:writerID", AuthVerify, ReadSingleWriter);
router.get("/readSingleUser/:userID", AuthVerify, ReadSingleUser);
router.get("/readAllCategory", ReadAllCategory);
router.get("/readAllTopicByCategory/:categoryID", ReadAllTopicByCategory);
router.get("/readBlogByCategory/:categoryID", ReadBlogByCategory);
router.get("/readBlogByTopic/:topicID", ReadBlogByTopic);
// reader features
router.get("/readSingleBlog/:blogID", AuthVerify, ReadSingleBlog);
// library
router.get("/addToLibrary/:blogID", AuthVerify, AddToLibrary);
router.get("/removeFromLibrary/:blogID", AuthVerify, ReadSingleBlog);
router.get("/getFullLibrary", AuthVerify, ReadSingleBlog);
router.get("/removeFullLibrary", AuthVerify, ReadSingleBlog);

router.get("/readAllCommentByBlog/:blogID", AuthVerify,ReadAllCommentByBlog);
router.get(
  "/readAllExpressionByBlog/:blogID",
  AuthVerify,
  ReadAllExpressionByBlog
);
router.get(
  "/readSingleExpressionByBlog/:blogID",
  AuthVerify,
  ReadSingleExpressionByBlog
);

module.exports = router;
