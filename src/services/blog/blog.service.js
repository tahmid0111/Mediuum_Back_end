const BlogModel = require("../../models/blog/blog.model");
const CategoryModel = require("../../models/blog/category.model");
const TopicModel = require("../../models/blog/topic.model");
const CommentModel = require("../../models/features/comment.model");
const ExpressionModel = require("../../models/features/expression.model");

exports.ReadAllBlogService = async (req) => {
  let reqBody = req.body;
  // let myBody = {
  //   UserEmail: req.headers.email,
  //   ...reqBody,
  // };
  try {
    const result = await BlogModel.create(reqBody);
    return { status: "success", data: result };
  } catch (error) {
    console.log(error)
    return { status: "fail" };
  }
};

exports.ReadAllCategoryService = async (req) => {
  let Email = req.headers.email;
  let Query = { UserEmail: Email };
  try {
    let result = await CategoryModel.find(Query).sort({ createdAt: -1 });
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadAllTopicByCategoryService = async (req) => {
  let ID = req.params.id;
  let Query = { _id: ID };
  try {
    let result = await TopicModel.findOne(Query);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadBlogByCategoryService = async (req) => {
  let ID = req.params.id;
  let reqBody = req.body;
  let Query = { _id: ID };
  try {
    let result = await BlogModel.updateOne(Query, reqBody);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadBlogByTopicService = async (req) => {
  let ID = req.params.id;
  let reqBody = req.body;
  let Query = { _id: ID };
  try {
    let result = await BlogModel.updateOne(Query, reqBody);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadSingleBlogService = async (req) => {
  let ID = req.params.id;
  let reqBody = req.body;
  let Query = { _id: ID };
  try {
    let result = await BlogModel.updateOne(Query, reqBody);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadAllCommentByBlogService = async (req) => {
  let ID = req.params.id;
  let reqBody = req.body;
  let Query = { _id: ID };
  try {
    let result = await CommentModel.updateOne(Query, reqBody);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadAllExpressionByBlogService = async (req) => {
  let ID = req.params.id;
  let reqBody = req.body;
  let Query = { _id: ID };
  try {
    let result = await ExpressionModel.updateOne(Query, reqBody);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadSingleExpressionByBlogService = async (req) => {
  let ID = req.params.id;
  let reqBody = req.body;
  let Query = { _id: ID };
  try {
    let result = await ExpressionModel.updateOne(Query, reqBody);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.UpdateProductService = async (req) => {
  let ID = req.params.id;
  let reqBody = req.body;
  let Query = { _id: ID };
  try {
    let result = await ProductModel.updateOne(Query, reqBody);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.UpdateProductService = async (req) => {
  let ID = req.params.id;
  let reqBody = req.body;
  let Query = { _id: ID };
  try {
    let result = await ProductModel.updateOne(Query, reqBody);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.UpdateProductService = async (req) => {
  let ID = req.params.id;
  let reqBody = req.body;
  let Query = { _id: ID };
  try {
    let result = await ProductModel.updateOne(Query, reqBody);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.UpdateProductService = async (req) => {
  let ID = req.params.id;
  let reqBody = req.body;
  let Query = { _id: ID };
  try {
    let result = await ProductModel.updateOne(Query, reqBody);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.DeleteProductService = async (req) => {
  let ID = req.params.id;
  let Query = { _id: ID };
  try {
    let result = await ProductModel.deleteOne(Query);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.DeleteAllProductService = async (req) => {
  let Email = req.headers.email;
  let Query = { UserEmail: Email };
  try {
    let result = await ProductModel.deleteMany(Query);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};
