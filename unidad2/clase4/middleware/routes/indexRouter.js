const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController')

router.use((req,res,next)=>{
    console.log(req.query);
    if(req.query.userTipe=='admin'){
        next();
    }else{
        next({stack:"no se puede entrar"})
    }
})
router.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('Se rompió la aplicación!')
})

router.get('/',indexController.getIndex)
router.post('/', indexController.postIndex)
router.put('/',indexController.putIndex)
router.delete('/',indexController.delIndex)
module.exports = router;