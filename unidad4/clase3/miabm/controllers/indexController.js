const alumnos = require('../db/alumnos.json');
const docentes = require('../db/docentes.json');
const adms = require('../db/administradores.json');

const indexController ={ 
    index:function(req, res, next) {
        res.send('Nuestro Home');
      },
      alumnos: function(req, res) {
        res.send(alumnos);
       },
       docentes:function(req, res) {
        res.send(docentes);
       },
       admin:function(req, res) {
        res.send(adms);
       }
 
 }
 module.exports = indexController;