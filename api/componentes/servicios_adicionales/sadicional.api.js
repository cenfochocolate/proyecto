'use strict';
const modelo_sadicional = require('./sadicional.model');

module.exports.registrar = (req, res) =>{
  let nuevo_sadicional = new modelo_sadicional(
    {
      id_institucion: req.body.id_institucion,
      nombre : req.body.nombre,
      descripcion : req.body.descripcion,
      imagen: req.body.imagen

    }
  );
  nuevo_sadicional.save(function(error){
    if (error) {
      res.json(
        {
          success : false,
          msj : `No se pudo registrar el servicio adicional, ocurrió el siguiente error ${error}`
        }
      );
    } else {
      res.json(
        {
          success : true,
          msj : `Se registró  satisfactoriamente el servicio adicional`
        }
      );
    }
  });
};
module.exports.listar_todos = (req, res) =>{
  modelo_sadicional.find().then(
    function(sadicional){
      if(sadicional.length > 0){
        res.json(
          {
            success: true,
             sadicional: sadicional
          }
        )
      }else{
        res.json(
          {
            success: false,
            sadicional: 'No hay noticias registradas'
          }
        )
      }
    }
  )
};
