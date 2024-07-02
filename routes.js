const express = require('express');
const router = express.Router();
const{getData,getOnetask,postData, putData,deleteData} = require('./functions');
router.get('/',getData);
router.get('/:id', getOnetask);
router.post('/',postData);
router.put('/:id',putData);
router.delete('/:id',deleteData);
module.exports = router;