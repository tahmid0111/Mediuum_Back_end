const express = require("express");
const router = express.Router();

const { AuthVerify } = require("../../middleware/tokenVerify");
const {
  CreateProduct,
  ReadAllProduct,
  ReadSingleProduct,
  UpdateProduct,
  DeleteProduct,
  DeleteAllProduct,
} = require("../../controllers/blog/blog.controller");

// guest features
router.post("/readAllBlog", CreateProduct);
router.get("/readAllCategory", ReadAllProduct);
router.get("/readAllTopicByCategory/:categoryID", ReadAllProduct);
router.get("/readBlogByCategory/:categoryID", ReadAllProduct);
router.get("/readBlogByTopic/:topicID", ReadAllProduct);
// reader features
router.get("/readSingleBlog/:blogID", ReadSingleProduct);
router.get("/readAllCommentByBlog/:blogID", ReadSingleProduct);
router.get("/readAllExpressionByBlog/:blogID", ReadSingleProduct);
router.get("/readSingleExpressionByBlog/:blogID", ReadSingleProduct);

module.exports = router;
