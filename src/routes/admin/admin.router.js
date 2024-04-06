const express = require("express");
const router = express.Router();

const {
  CreateManager,
  UpdateManagerInfo,
  UpdateManagerPassword,
  DeleteManager,
} = require("../../controllers/admin/admin.controller");
const { AuthVerify } = require("../../middleware/tokenVerify");

router.post("/createManager", AuthVerify, CreateManager);
router.post("/updateManagerInfo/:managerID", AuthVerify, UpdateManagerInfo);
router.post("/updateManagerPassword", AuthVerify, UpdateManagerPassword);
router.post("/deleteManager", AuthVerify, DeleteManager);

module.exports = router;
