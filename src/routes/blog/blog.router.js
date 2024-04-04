const express = require("express");
const router = express.Router();

const { AuthVerify } = require("../../middleware/tokenVerify");
const {
  CreateProduct,
  ReadAllProduct,
  ReadSingleProduct,
  UpdateProduct,
  DeleteProduct,
  DeleteAllProduct,
} = require("../../controllers/blog/blog.controller");

router.post("/createProduct", CreateProduct);
router.get("/readallproduct", ReadAllProduct);
router.get("/readproduct/:id", ReadSingleProduct);
router.post("/updateproduct/:id", AuthVerify, UpdateProduct);
router.post("/deleteproduct/:id", AuthVerify, DeleteProduct);
router.post("/deleteallproduct", AuthVerify, DeleteAllProduct);

module.exports = router;
