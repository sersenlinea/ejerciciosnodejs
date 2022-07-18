const express = require('express')
const app= express();
const axios = require('axios')
const puerto =8080
app.use(express.json())
app.use(express.urlencoded({extended:false}))
 
app.get('/',async(req,res)=>{
    axios.get('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
  .then(function (response) {
    // al momento de cumplirse la promesa
    res.status(200).json(response.data);
  })
  .catch(function (error) {
    // al momento de que la promesa sea rechazada  
    res.status(500)
            .send({ message: 'Error buscando datos', error: error })
  })
})
app.listen(puerto,()=>{
    console.log(`Escucahndo por el puerto ${puerto}`);
})
