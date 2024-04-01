const express=require('express');
const { CreateWriter } = require('../../controllers/user/writer.controller');
const router=express.Router();

router.post('/create', CreateWriter)

module.exports=router;