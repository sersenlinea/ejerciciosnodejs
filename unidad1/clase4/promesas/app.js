const fs = require('fs')//Uso del módulo nativo de node FileSystem
const mostrarData = () => {
    fs.promises.readFile('./datos.json', 'utf-8')
        .then(data => console.log(data))
        .catch(error => console.log(error))
}
mostrarData()
const otraData =async() => {
    try {
        let data = await fs.promises.readFile('./datos.json', 'utf-8')
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
otraData();


//Ejemplo de promesa anidada
const getOne = async (id) => {
    fs.promises.readFile('./datos.json', 'utf-8', JSON.stringify())
        .then((objs) => {
            return JSON.parse(objs)
        })
        .then(d => console.log(d.filter((p => p.id == id))))
        .catch(err => console.log(err))
}
getOne(1)


