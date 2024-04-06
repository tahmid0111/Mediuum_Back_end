const {
  CreateProductService,
  ReadAllProductService,
  ReadSingleProductService,
  UpdateProductService,
  DeleteProductService,
  DeleteAllProductService,
  ReadAllBlogService,
  ReadAllCategoryService,
  ReadAllTopicByCategoryService,
  ReadBlogByCategoryService,
  ReadBlogByTopicService,
  ReadSingleBlogService,
  ReadAllCommentByBlogService,
  ReadAllExpressionByBlogService,
  ReadSingleExpressionByBlogService,
} = require("../../services/blog/blog.service");

exports.ReadAllBlog = async (req, res) => {
  let result = await ReadAllBlogService(req);
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Product has been created Successfully",
      data: result.data,
    });
  } else {
    res.status(404).json({ status: "fail", message: "Something went wrong" });
  }
};

exports.ReadAllCategory = async (req, res) => {
  let result = await ReadAllCategoryService(req);
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Product has been created Successfully",
      data: result.data,
    });
  } else {
    res.status(404).json({ status: "fail", message: "Something went wrong" });
  }
};

exports.ReadAllTopicByCategory = async (req, res) => {
  let result = await ReadAllTopicByCategoryService(req);
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Product has been created Successfully",
      data: result.data,
    });
  } else {
    res.status(404).json({ status: "fail", message: "Something went wrong" });
  }
};

exports.ReadBlogByCategory = async (req, res) => {
  let result = await ReadBlogByCategoryService(req);
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Product has been created Successfully",
      data: result.data,
    });
  } else {
    res.status(404).json({ status: "fail", message: "Something went wrong" });
  }
};

exports.ReadBlogByTopic = async (req, res) => {
  let result = await ReadBlogByTopicService(req);
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Product has been created Successfully",
      data: result.data,
    });
  } else {
    res.status(404).json({ status: "fail", message: "Something went wrong" });
  }
};

exports.ReadSingleBlog = async (req, res) => {
  let result = await ReadSingleBlogService(req);
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Product has been created Successfully",
      data: result.data,
    });
  } else {
    res.status(404).json({ status: "fail", message: "Something went wrong" });
  }
};

exports.ReadAllCommentByBlog = async (req, res) => {
  let result = await ReadAllCommentByBlogService(req);
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Product has been created Successfully",
      data: result.data,
    });
  } else {
    res.status(404).json({ status: "fail", message: "Something went wrong" });
  }
};

exports.ReadAllExpressionByBlog = async (req, res) => {
  let result = await ReadAllExpressionByBlogService(req);
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Product has been created Successfully",
      data: result.data,
    });
  } else {
    res.status(404).json({ status: "fail", message: "Something went wrong" });
  }
};

exports.ReadSingleExpressionByBlog = async (req, res) => {
  let result = await ReadSingleExpressionByBlogService(req);
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Product has been created Successfully",
      data: result.data,
    });
  } else {
    res.status(404).json({ status: "fail", message: "Something went wrong" });
  }
};

exports.ReadSingleProduct = async (req, res) => {
  let result = await ReadSingleProductService(req);
  if (result.status === "success") {
    const createdAt = new Date(result.data.createdAt);
    const exactYear = createdAt.getFullYear();
    const exactMonth = createdAt.getMonth() + 1;
    const exactDate = createdAt.getDate();
    res.status(200).json({
      status: "success",
      message: "Product has been created Successfully",
      data: result.data,
      data2: `${exactYear} ${exactMonth} ${exactDate}`,
    });
  } else {
    res.status(404).json({ status: "fail", message: "Something went wrong" });
  }
};

exports.UpdateProduct = async (req, res) => {
  let result = await UpdateProductService(req);
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Product has been created Successfully",
      data: result.data,
    });
  } else {
    res.status(404).json({ status: "fail", message: "Something went wrong" });
  }
};

exports.DeleteProduct = async (req, res) => {
  let result = await DeleteProductService(req);
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Product has been created Successfully",
      data: result.data,
    });
  } else {
    res.status(404).json({ status: "fail", message: "Something went wrong" });
  }
};

exports.DeleteAllProduct = async (req, res) => {
  let result = await DeleteAllProductService(req);
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Product has been created Successfully",
      data: result.data,
    });
  } else {
    res.status(404).json({ status: "fail", message: "Something went wrong" });
  }
};
