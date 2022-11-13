var express = require('express');
var router = express.Router();
const userController = require('../controllers/usersController')
router.post('/alumnos', userController.alumnos);
router.post('/docentes', userController.docentes);
router.post('/admin', userController.admin);

module.exports = router;
