const express = require("express");
const router = express.Router();

const {
  CreateManager,
  UpdateManagerInfo,
  UpdateManagerPassword,
  DeleteManager,
  LoginAsAdmin,
  ReadAdminProfile,
} = require("../../controllers/admin/admin.controller");
const { AuthVerify } = require("../middleware/AuthVerify.middleware");

router.post("/loginAsAdmin", LoginAsAdmin);
router.get("/readAdminProfile", AuthVerify, ReadAdminProfile);
router.post("/logoutAsAdmin", LoginAsAdmin);
// manager related API
router.post("/createManager", AuthVerify, CreateManager);
router.post("/ReadAllManagerProfile", AuthVerify, CreateManager);
router.post("/ReadSingleManagerProfile/:managerID", AuthVerify, CreateManager);
router.post("/updateManagerInfo/:managerID", AuthVerify, UpdateManagerInfo);
router.post("/updateManagerPassword", AuthVerify, UpdateManagerPassword);
router.post("/deleteManager", AuthVerify, DeleteManager);

module.exports = router;
