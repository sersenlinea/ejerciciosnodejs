var express = require('express');
var router = express.Router();
const userController=require('../controllers/userController')
/* GET users listing. */
router.get('/', userController.userList);
router.post('/login', userController.login);
router.post('/signup', userController.signup);
router.post('/update/:id', userController.userEdit);
router.get('/detail/:id', userController.getData);

module.exports = router;
