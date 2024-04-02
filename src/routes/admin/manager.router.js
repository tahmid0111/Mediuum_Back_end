const express = require('express');
const { CreateManager } = require('../../controllers/admin/manager.controller');
const router = express.Router();

router.get('/', CreateManager)

module.exports = router;