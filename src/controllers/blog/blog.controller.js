const {
  CreateProductService,
  ReadAllProductService,
  ReadSingleProductService,
  UpdateProductService,
  DeleteProductService,
  DeleteAllProductService,
} = require("../../services/blog/blog.service");

exports.CreateProduct = async (req, res) => {
  let result = await CreateProductService(req);
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

exports.ReadAllProduct = async (req, res) => {
  let result = await ReadAllProductService(req);
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
