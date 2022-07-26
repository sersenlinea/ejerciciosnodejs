const express = require('express')
const server = express();  
const indexRouter = require('./routes/indexRouter')
const puerto =8080
const cors = require('cors')
// server.use((req,res,next)=>{
//     console.log(req.query);
//     if(req.query.userTipe=='admin'){
//         next();

//     }else{
//         res.send('Usuario no autorizado')
//     }
// })
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended:false}))

server.use('/',indexRouter)

server.listen(puerto,()=>{
    console.log(`el servidor está escuchando en el puerto ${puerto}`);
})



