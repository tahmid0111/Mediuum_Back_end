const { LoginAsAdminService, ReadAdminProfileService, CreateManagerService, UpdateManagerInfoService, UpdateManagerPasswordService, DeleteManagerService } = require("../services/admin.service");


exports.LoginAsAdmin = async (req, res) => {
  let result = await LoginAsAdminService(req, res);
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Login Successful",
    });
  } else if (result.status === "wrongPassword") {
    res.status(404).json({ status: "fail", message: "Incorrect Password" });
  } else {
    res.status(404).json({ status: "fail", message: "Something went wrong" });
  }
};

exports.ReadAdminProfile = async (req, res) => {
  let result = await ReadAdminProfileService(req);
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Your requested data is here",
      data: result.data,
    });
  } else {
    res.status(404).json({ status: "fail", message: "Something went wrong" });
  }
};

exports.CreateManager = async (req, res) => {
  let result = await CreateManagerService(req);

  const responseStatus = result.status;
  const messages = {
    success: "User Successfully Registered",
    weakPassword: "Use a strong Password",
    invalidPhoneNumber: "Invalid Phone Number",
    fail: "Something went wrong",
  };

  const message = messages[responseStatus];
  const data = responseStatus === "success" ? result.data : undefined;

  res.status(responseStatus === "success" ? 200 : 404).json({
    status: responseStatus,
    message,
    data,
  });
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
