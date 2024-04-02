const express = require('express');
const { CreateAdmin } = require('../../controllers/admin/admin.controller');
const router = express.Router();

router.get('/', CreateAdmin)

module.exports = router;