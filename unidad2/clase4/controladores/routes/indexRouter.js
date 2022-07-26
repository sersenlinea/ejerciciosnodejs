const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController')
router.get('/',indexController.getIndex)
router.post('/', indexController.postIndex)
router.put('/',indexController.putIndex)
router.delete('/',indexController.delIndex)
module.exports = router;