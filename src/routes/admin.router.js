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
router.get("/readAdminProfile", AuthVerify, ReadAdminProfile);
router.post("/logoutAsAdmin", LogoutAsAdmin);
// manager related API
router.post("/createManager", AuthVerify, upload.single("file"), CreateManager);
router.get("/readAllManager", AuthVerify, ReadAllManager);
router.get("/readSingleManager/:manager_id", AuthVerify, ReadSingleManager);
router.post(
  "/updateManagerInfo/:manager_id",
  AuthVerify,
  upload.single("file"),
  UpdateManagerInfo
);
router.post("/deleteManager/:manager_id", AuthVerify, DeleteManager);

module.exports = router;
