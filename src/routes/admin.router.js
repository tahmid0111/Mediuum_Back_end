const express = require("express");
const multer = require("multer");
const router = express.Router();

const storage = require("../utility/cloudinary.utility");
const upload = multer({ storage });

const { AuthVerify } = require("../middleware/AuthVerify.middleware");
const {
  LoginAsAdmin,
  ReadAdminProfile,
  CreateManager,
  UpdateManagerInfo,
  DeleteManager,
  LogoutAsAdmin,
  ReadAllManager,
  ReadSingleManager,
} = require("../controllers/admin.controller");

router.post("/loginAsAdmin", LoginAsAdmin);
router.post("/logoutAsAdmin", LogoutAsAdmin);
router.get("/readAdminProfile", AuthVerify, ReadAdminProfile);
// manager related API
router.post("/createManager", AuthVerify, upload.single("file"), CreateManager);
router.get("/readAllManager", AuthVerify, ReadAllManager);
router.get("/readSingleManager/:managerID", AuthVerify, ReadSingleManager);
router.post(
  "/updateManagerInfo/:managerID",
  AuthVerify,
  upload.single("file"),
  UpdateManagerInfo
);
router.post("/deleteManager/:managerID", AuthVerify, DeleteManager);

module.exports = router;
