// Success handler
exports.sendResponse = (
  res,
  message = "Request Success",
  data = undefined,
  statusCode = 200,
  status = "success"
) => {
  res.status(statusCode).json({ status: status, message: message, data: data });
};

// error handler
exports.sendErrorResponse = (res, statusCode = 302) => {
  res
    .status(statusCode)
    .json({ status: "fail", message: "Something went wrong" });
};
