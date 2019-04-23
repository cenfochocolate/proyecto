'use strict';
const modelo_util_institucino = require('./utiles_institucion.model');

module.exports.registrar = (req, res) =>{
  let nuevo_util_institucion = new modelo_util_institucino(
    {
      id_institucion: req.body.id_institucion,
      util : req.body.util,
      descripcion : req.body.descripcion,
      cantidad : req.body.cantidad,
      nivel : req.body.nivel,
      estado : 'Activo'
    }
  );
  nuevo_util_institucion.save(function(error){
    if (error) {
      res.json(
        {
          success : false,
          msj : `No se pudo registrar el útil, ocurriò el siguiente error ${error}`
        }
      );
    } else {
      res.json(
        {
          success : true,
          msj : `Se registró  satisfactoriamente el útil`
        }
      );
    }
  });
};

module.exports.listar_todos = (req, res) =>{
  modelo_util_institucino.find().sort({util : 'asc'}).then(
    function(utiles){
      if(utiles.length > 0){
        res.json(
          {
            success: true,
            utiles: utiles
          }
        )
      }else{
        res.json(
          {
            success: false,
            utiles: 'No se encontraron utiles'
          }
        )
      }
    }
  )
};

module.exports.buscar_por_id = function (req, res){
  modelo_util_institucino.find({_id : req.body.id_utiles}).then(
      function(util){
          if(util){
              res.json({success: true, util : util});
          }else{
              res.json({success: false, utile : util});
          }
      }

  );

};

module.exports.actualizar = function(req, res){
   
  modelo_util_institucino.findByIdAndUpdate(req.body.id, { $set: req.body },
      function (error){
          if(error){
              res.json({success : false , msg : 'No se pudo actualizar el util '});
          }else{
              res.json({success: true , msg : 'El util se actualizó con éxito'});
          }
      }
  
  );
}

module.exports.borrar = (req, res) =>{
  modelo_util_institucino.findByIdAndDelete(req.body.id,
      function(error){
          if(error){
              res.json({ success : false, msg: 'No se pudo eliminar el util.'});
              
          }else{
              res.json({ success : true, msg: 'El util fue eliminado.'});
          }
      }
  )
};

