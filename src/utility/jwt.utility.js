const jwt = require('jsonwebtoken')
const { env_jwt_secret_key } = require("../config/dotenv.config");

exports.EncodeToken = (email, userID, role = "user") => {
  let EXPIRE = { expiresIn: "24h" };
  let PAYLOAD = {
    email,
    userID,
    role,
  };
  return jwt.sign(PAYLOAD, env_jwt_secret_key, EXPIRE);
};

exports.DecodeToken = (token) => {
  try {
    return jwt.verify(token, env_jwt_secret_key);
  } catch (e) {
    console.log(e);
    return null;
  }
};
