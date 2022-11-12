var express = require('express');
var router = express.Router();
const indexController=require('../controllers/indexController')
/* GET home page. */
router.get('/', indexController.index);
router.get('/alumnos',indexController.alumnos);
 router.get('/docentes', indexController.docentes);
 router.get('/administradores', indexController.admin);
 

module.exports = router;
