const express = require('express')// Almacenamos en una constante la librería del framework express
const server = express();  //Creamos nuestro servidor
const fs = require('fs')

//Creamos la ruta de inico y enviamos una respuesta
server.get('/',(req,res)=>{
    let data = fs.readFileSync('./usuarios.json');
    //res.send(data)//envia el archivo directamente
    res.send({datos:JSON.parse(data)})
})
//Asignamos el puerto a usar 
server.listen(3000,()=>{
    //Indicamos el puerto de escucha
    console.log("el servidor está escuchando en el puerto 3000");
})
