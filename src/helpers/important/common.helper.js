const mongoose = require("mongoose");
// third party packages
const jwt = require("jsonwebtoken");
const { env_url, env_secret_key } = require("./dotenv.helper");

exports.connectDB = async () => {
  await mongoose.connect(env_url);
  console.log("database connencted");
};

// ===============================================================
// Json Web Token related helpers
exports.EncodeToken = (email, user_id, role = "user") => {
  let EXPIRE = { expiresIn: "24h" };
  let PAYLOAD = {
    email,
    user_id,
    role,
  };
  return jwt.sign(PAYLOAD, env_secret_key, EXPIRE);
};

exports.DecodeToken = (token) => {
  try {
    return jwt.verify(token, env_secret_key);
  } catch (e) {
    console.log(e);
    return null;
  }
};
// =================================================================
// Error handler
exports.sendError = (res, statusCode = 404) => {
  res
    .status(statusCode)
    .json({ status: "fail", message: "Something went wrong" });
};
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
// =================================================================
// cookies handler
exports.SetCookie = async (res, cookieName, cookieValue) => {
  let cookieOption = {
    expires: new Date(Date.now() + 24 * 6060 * 1000),
    httpOnly: false,
  };

  res.cookie(cookieName, cookieValue, cookieOption);
};
