'use strict';
const modelo_sadicional = require('./sadicional.model');

module.exports.registrar = (req, res) =>{
  let nuevo_sadicional = new modelo_sadicional(
    {
      id_institucion: req.body.id_institucion,
      nombre : req.body.nombre,
      descripcion : req.body.descripcion,
      imagen: req.body.imagen,
      estado : 'Activo'
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

module.exports.buscar_por_id = function (req, res){
  modelo_sadicional.find({_id : req.body.id_servicio}).then(
      function(servicio){
          if(servicio){
              res.json({success: true, servicio : servicio});
          }else{
              res.json({success: false, servicio : servicio});
          }
      }

  );

};
module.exports.actualizar = function(req, res){
   
  modelo_sadicional.findByIdAndUpdate(req.body.id, { $set: req.body },
      function (error){
          if(error){
              res.json({success : false , msg : 'No se pudo actualizar los servicios adicionales '});
          }else{
              res.json({success: true , msg : 'Los servicio adicionales se actualizaron con éxito'});
          }
      }
  
  );
}

module.exports.borrar = (req, res) =>{
  modelo_sadicional.findByIdAndDelete(req.body.id,
      function(error){
          if(error){
              res.json({ success : false, msg: 'No se pudo eliminar la cita.'});
              
          }else{
              res.json({ success : true, msg: 'La pregunta fue eliminada.'});
          }
      }
  )
};
