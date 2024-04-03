import {v2 as cloudinary} from 'cloudinary';
require('dotenv').config();

let cloud_name = process.env.COUDINARY_CLOUD_NAME;
let api_key = process.env.COUDINARY_API_KEY;
let api_secret = process.env.COUDINARY_API_SECRET;
          
cloudinary.config({ 
  cloud_name: cloud_name, 
  api_key: api_key, 
  api_secret: api_secret 
});

module.exports = cloudinary;