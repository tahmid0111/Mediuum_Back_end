const {
  CreateAdminService,
  DeleteManagerService,
  UpdateManagerPasswordService,
  UpdateManagerInfoService,
  CreateManagerService,
} = require("../../services/admin/admin.service");

exports.CreateManager = async (req, res) => {
  let result = await CreateManagerService(req);
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

exports.UpdateManagerInfo = async (req, res) => {
  let result = await UpdateManagerInfoService(req);
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

exports.UpdateManagerPassword = async (req, res) => {
  let result = await UpdateManagerPasswordService(req);
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

exports.DeleteManager = async (req, res) => {
  let result = await DeleteManagerService(req);
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

exports.createManager = async (req, res) => {
  let result = await CreateAdminService(req);
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
exports.createManager = async (req, res) => {
  let result = await CreateAdminService(req);
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
exports.createManager = async (req, res) => {
  let result = await CreateAdminService(req);
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
exports.createManager = async (req, res) => {
  let result = await CreateAdminService(req);
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
exports.createManager = async (req, res) => {
  let result = await CreateAdminService(req);
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
exports.createManager = async (req, res) => {
  let result = await CreateAdminService(req);
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
