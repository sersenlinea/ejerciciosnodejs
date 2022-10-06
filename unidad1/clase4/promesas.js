const fs = require('fs')
const getData = async (req, res) => {
    try {
        let data =  await fs.promises.readFile('./productos.json','utf-8');
        return data
    } catch (err) {
        return console.log(err);
    }
}
getData().then(data=>console.log(data)).catch(err=>console.error(err))
