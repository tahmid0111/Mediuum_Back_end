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
exports.EncodeToken = (email, user_id) => {
  let EXPIRE = { expiresIn: "24h" };
  let PAYLOAD = {
    email: email,
    user_id: user_id,
  };
  return jwt.sign(PAYLOAD, env_secret_key, EXPIRE);
};

exports.DecodeToken = (token) => {
  try {
    return jwt.verify(token, secretKey);
  } catch (e) {
    return null;
  }
};
// =================================================================
// Error handler
exports.sendError = (res, statusCode= 404) => {
  res.status(statusCode).json({ status: "fail", message: "Something went wrong" });
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
