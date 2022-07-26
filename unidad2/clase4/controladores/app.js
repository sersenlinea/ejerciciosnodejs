const express = require('express')
const server = express();  
const indexRouter = require('./routes/indexRouter')
const puerto =8080
server.use(express.json())
server.use(express.urlencoded({extended:false}))

server.use('/',indexRouter)

server.listen(puerto,()=>{
    console.log(`el servidor está escuchando en el puerto ${puerto}`);
})


