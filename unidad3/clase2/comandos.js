db.usuarios.insertOne({name:"Pedro",lastName:"Ramirez"});
db.usuarios.insertOne({name:"Pablo",lastName:"Gonzalez"});
db.usuarios.insertOne({name:"Alejandro",lastName:"Péres"});
db.usuarios.insertOne({name:"José",lastName:"Ródriguez"});
db.usuarios.insertOne({name:"Alexandra",lastName:"Romero"});
db.usuarios.insertOne({name:"Luna",lastName:"Gúzman"});
db.usuarios.insertOne({name:"Paola",lastName:"Barrios"});
db.usuarios.insertOne({name:"Juana",lastName:"Carreño"});

//usando los filtros en la terminal (Read)

db.inventario.find({"anio":{$gt:2021}})
db.inventario.find({"anio":{$gte:2021}})
db.inventario.find({"anio":{$lt:2021}})
db.inventario.find({"anio":{$lte:2021}})
db.inventario.find({"anio":{$ne:2021}})
db.inventario.find({"anio":{$in:[2021,2022]}})
db.inventario.find({"anio":{$nin:[2021,2022]}})

//usando filtros update
db.coll.update({"id":1},{$unset:{"year":2}})
db.coll.update({"id":1},{$rename:{"year":"date"}})
db.coll.update({"id":1},{$inc:{"year":6}})
db.coll.update({"id":1},{$mul:{"price":NumberDecimal("120365.32"),qty:2}})
db.coll.update({"id":1},{$min:{"imdb":2}})
db.coll.update({"id":1},{$max:{"imdb":8}})
db.coll.update({"id":1},{$currentDate:{"lastModified":true}})
db.coll.update({"id":1},{$currentDate:{"lastModified":{$type:"timestamp"}}})
db.usuarios.updateMany(
    {name:{$eq:"Julían"}},
    {$set:{lastName:"Navas"}}
)
db.usuarios.deleteMany({name:"Julían"})

//Mongoose

//create
await prods.save()
.then(()=>{
    return console.log('Se guardaron los datos!')
})

// Read

await Productos.find()
.then((data)=>console.log(data))

//uodate

let data = await Productos.findById(id);
let query={_id:data.id}
await Productos.updateOne(query, newValues)
.then(()=>console.log('producto actualizado'))
.catch(err=>console.log(err))

//delete

await Productos.deleteOne({_id:id})
.then(()=>console.log('se eliminó el registro!'))
.catch(()=>console.log(' no se puedo borrar'))

//conexión para archivo config.js

const  url = "mongodb://127.0.0.1:27017/admin" 
const mongoose = require('mongoose');

const connectDB = async () => {
 try {
   await mongoose.connect(url);
   console.log('DB Connected');
 } catch (error) {
   console.log(error); 
 }
}
module.exports = connectDB;

//definiendo el esquema y exportando el modelo

const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
 {
   name: { type: String, required: true },
   lastName: String,
   email: { type: String, required: true },
   password: { type: String, required: true },
   dateOfBirth: Date,
   delete: { type: Boolean, default: false },
   deletedAt: Date,
 },
 {
   timestamps: true,
   versionKey: false,
 }
);

module.exports = mongoose.model('User', userSchema);


//CRUD ejemplo ejecutado en el index.js y creada la configuración anterior

require('./config')
const Productos = require('./modelos/Productos')
let pro= {code:"tv32", price:35000, desc:"Tv de 82 pulgadas", img:"tv32.png"};
 
 
//Create
async function guardar(){
    const prods = new Productos(pro);
    await prods.save()
    .then(()=>{
        return console.log('Se guardaron los datos!')
    })
}
//Read
const mostrarData=async()=>{
    await Productos.find()
    .then((data)=>console.log(data))
}
 
//update
let newValues={code:"tv32", price:48000, desc:"Tv de 32 pulgadas", img:"tv32.png"};
async function actualizar(id,newValues){
    let data = await Productos.findById(id);
    let query={_id:data.id}
    await Productos.updateOne(query, newValues)
    .then(()=>console.log('producto actualizado'))
    .catch(err=>console.log(err))
}
 
//delete
 
const borrar=async(id)=>{
    await Productos.deleteOne({_id:id}).then(()=>console.log('se eliminó el registro!')).catch(()=>console.log(' no se puedo borrar'))
}
const buscarFiltro=async(filtro,valor)=>{
    await Productos.findOne({price:valor}).then(data=>console.log(data)).catch((err)=>console.log(err))
}
guardar()
// actualizar('62c3a51b9930c0ae166ce8eb',newValues)
// mostrarData()
// borrar('62c3a51b9930c0ae166ce8eb')
// buscarFiltro('price',35000)



