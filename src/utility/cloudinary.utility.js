const cloudinary = require("cloudinary").v2;
const {
  env_cloud_name,
  env_api_key,
  env_api_secret,
} = require("../helpers/important/dotenv.helper");

cloudinary.config({
  cloud_name: env_cloud_name,
  api_key: env_api_key,
  api_secret: env_api_secret,
});

module.exports = cloudinary;
