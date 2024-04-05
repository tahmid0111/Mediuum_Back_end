const express = require('express');
const router = express.Router();
const { CreateAdmin } = require('../../controllers/admin/admin.controller');
const { AuthVerify } = require('../../middleware/tokenVerify');


router.post('/createManager', AuthVerify, CreateAdmin)
router.post('/updateManagerInfo', AuthVerify, CreateAdmin)
router.post('/updateManagerPassword', AuthVerify, CreateAdmin)
router.post('/deleteManager', AuthVerify, CreateAdmin)

module.exports = router;