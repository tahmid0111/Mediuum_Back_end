const {
  sendResponse,
  sendErrorResponse,
} = require("../helpers/response.helper");
const {
  ReadAllBlogService,
  ReadAllCategoryService,
  ReadAllTopicByCategoryService,
  ReadBlogByCategoryService,
  ReadBlogByTopicService,
  ReadSingleBlogService,
  ReadAllCommentByBlogService,
  ReadAllExpressionByBlogService,
  ReadSingleExpressionByBlogService,
  UpdateProductService,
  ReadAllWriterService,
  ReadSingleWriterService,
  ReadSingleUserService,
} = require("../services/blog.service");

exports.ReadAllBlog = async (req, res) => {
  let result = await ReadAllBlogService(req);

  result.status === "success"
    ? sendResponse(res, "Your expected data is here!", result.data)
    : sendErrorResponse(res);
};

exports.ReadAllWriter = async (req, res) => {
  let result = await ReadAllWriterService(req);

  result.status === "success"
    ? sendResponse(res, "Your expected data is here!", result.data)
    : sendErrorResponse(res);
};

exports.ReadSingleWriter = async (req, res) => {
  let result = await ReadSingleWriterService(req);

  result.status === "success"
    ? sendResponse(res, "Your expected data is here!", result.data)
    : sendErrorResponse(res);
};

exports.ReadSingleUser = async (req, res) => {
  let result = await ReadSingleUserService(req);

  result.status === "success"
    ? sendResponse(res, "Your expected data is here!", result.data)
    : sendErrorResponse(res);
};

exports.ReadAllCategory = async (req, res) => {
  let result = await ReadAllCategoryService(req);

  result.status === "success"
    ? sendResponse(res, "Your expected data is here!", result.data)
    : sendErrorResponse(res);
};

exports.ReadAllTopicByCategory = async (req, res) => {
  let result = await ReadAllTopicByCategoryService(req);

  result.status === "success"
    ? sendResponse(res, "Your expected data is here!", result.data)
    : sendErrorResponse(res);
};

exports.ReadBlogByCategory = async (req, res) => {
  let result = await ReadBlogByCategoryService(req);

  result.status === "success"
    ? sendResponse(res, "Your expected data is here!", result.data)
    : sendErrorResponse(res);
};

exports.ReadBlogByTopic = async (req, res) => {
  let result = await ReadBlogByTopicService(req);

  result.status === "success"
    ? sendResponse(res, "Your expected data is here!", result.data)
    : sendErrorResponse(res);
};

exports.ReadSingleBlog = async (req, res) => {
  let result = await ReadSingleBlogService(req);

  result.status === "success"
    ? sendResponse(res, "Your expected data is here!", result.data)
    : sendErrorResponse(res);
};

exports.ReadAllCommentByBlog = async (req, res) => {
  let result = await ReadAllCommentByBlogService(req);

  result.status === "success"
    ? sendResponse(res, "Your expected data is here!", result.data)
    : sendErrorResponse(res);
};

exports.ReadAllExpressionByBlog = async (req, res) => {
  let result = await ReadAllExpressionByBlogService(req);

  result.status === "success"
    ? sendResponse(res, "Your expected data is here!", result.data)
    : sendErrorResponse(res);
};

exports.ReadSingleExpressionByBlog = async (req, res) => {
  let result = await ReadSingleExpressionByBlogService(req);

  result.status === "success"
    ? sendResponse(res, "Your expected data is here!", result.data)
    : sendErrorResponse(res);
};

exports.ReadSingleProduct = async (req, res) => {
  let result = await UpdateProductService(req);
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
