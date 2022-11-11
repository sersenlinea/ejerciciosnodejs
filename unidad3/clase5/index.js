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
// guardar()
// actualizar('62c3a51b9930c0ae166ce8eb',newValues) 
mostrarData()
// borrar('62c3a51b9930c0ae166ce8eb')
// buscarFiltro('price',35000)