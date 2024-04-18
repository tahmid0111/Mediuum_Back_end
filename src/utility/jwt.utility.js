const jwt = require("jsonwebtoken");
const { env_secret_key } = require("../config/dotenv.config");

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
