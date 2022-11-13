const alumnos = require('../db/alumnos.json');
const docentes = require('../db/docentes.json');
const adms = require('../db/administradores.json');

const userController ={ 

      alumnos: function(req, res) {
        res.json(alumnos);
       },
       docentes:function(req, res) {
        res.json(docentes);
       },
       admin:function(req, res) {
        res.json(adms);
       }
 
 }
 module.exports = userController;