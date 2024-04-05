const express = require('express');
const { CreateManager } = require('../../controllers/admin/manager.controller');
const router = express.Router();

router.post('/readAllUser', CreateManager)
router.post('/readAllWriter', CreateManager)
router.post('/createCategory', CreateManager)
router.post('/createTopic', CreateManager)
router.post('/deleteCategory', CreateManager)
router.post('/deleteTopic', CreateManager)
// privacy features
router.post('/sendNotice', CreateManager)
router.post('/deleteNotice', CreateManager)
router.post('/globalBlockUser', CreateManager)
router.post('/globalBlockWriter', CreateManager)
router.post('/readAllReportSubmitedByWriter', CreateManager)
router.post('/readAllReportSubmitedByUser', CreateManager)

module.exports = router;