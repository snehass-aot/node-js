const express = require('express');
const router = express.Router();
const { tokenDecode }=require('../middleware/tokenDecode');
const {taskCreate,getTask}=require('../handler/taskManagement/taskManagement');
const {registerPage,postLogin}=require('../handler/userMangement/userManagement');



router.post('/register',registerPage);
router.post('/login',postLogin);
router.post('/task',tokenDecode,taskCreate)
router.get('/task',tokenDecode,getTask)




module.exports = router;