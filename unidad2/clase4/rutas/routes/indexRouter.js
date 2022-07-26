const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
  res.send('home page');
})
router.post('/', (req, res)=> {
  res.send(req.params);
})
router.put('/',(req,res)=>{
  res.send({user:req.query.user,password:req.query.password})
})
router.delete('/',(req,res)=>{
  res.send({id:req.params.id})

})
module.exports = router;