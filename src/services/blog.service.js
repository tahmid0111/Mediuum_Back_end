const { VerifyManager } = require("../helpers/others/verifyAdmin.helper");
const BlogModel = require("../models/blog/blog.model");
const CategoryModel = require("../models/blog/category.model");
const TopicModel = require("../models/blog/topic.model");
const CommentModel = require("../models/features/comment.model");
const ExpressionModel = require("../models/features/expression.model");

exports.ReadAllBlogService = async (req) => {
  try {
    const result = await BlogModel.find().sort({ createdAt: -1 });
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadAllCategoryService = async (req) => {
  try {
    let result = await CategoryModel.find();
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadAllTopicByCategoryService = async (req) => {
  try {
    let Query = { CategoryID: req.paramas.category_id };
    let result = await TopicModel.find(Query);

    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadBlogByCategoryService = async (req) => {
  try {
    let Query = { CategoryID: req.paramas.category_id };
    let result = await BlogModel.find(Query);

    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadBlogByTopicService = async (req) => {
  try {
    let Query = { TopicID: req.paramas.topic_id };
    let result = await BlogModel.find(Query);

    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadSingleBlogService = async (req) => {
  try {
    let Query = { _id: req.paramas.blog_id };
    let result = await BlogModel.findOne(Query);

    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadAllCommentByBlogService = async (req) => {
  try {
    let Query = { BlogID: req.paramas.blog_id };
    let result = await CommentModel.find(Query);

    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadAllExpressionByBlogService = async (req) => {
  try {
    let Query = { BlogID: req.paramas.blog_id };
    let result = await ExpressionModel.find(Query);

    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadSingleExpressionByBlogService = async (req) => {
  try {
    let Query = { BlogID: req.paramas.blog_id };
    let result = await ExpressionModel.aggregate([
      { $match: Query },
      { $group: { _id: "$Expression" } },
    ]);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};
