'use strict';
const modelo_noticia = require('./noticia.model');

module.exports.registrar = (req, res) =>{
  let nueva_noticia = new modelo_noticia(
    {
      id_institucion: req.body.id_institucion,
      nombre : req.body.nombre,
      descripcion : req.body.descripcion,
      imagen: req.body.imagen,
      estado : 'Activo'
    }
  );
  nueva_noticia.save(function(error){
    if (error) {
      res.json(
        {
          success : false,
          msj : `No se pudo registrar la noticia, ocurriò el siguiente error ${error}`
        }
      );
    } else {
      res.json(
        {
          success : true,
          msj : `Se registró  satisfactoriamente la noticia`
        }
      );
    }
  });
};
module.exports.listar_todos = (req, res) =>{
  modelo_noticia.find().then(
    function(noticias){
      if(noticias.length > 0){
        res.json(
          {
            success: true,
             noticias: noticias
          }
        )
      }else{
        res.json(
          {
            success: false,
            noticias: 'No hay noticias registradas'
          }
        )
      }
    }
  )
};
module.exports.buscar_por_id = function (req, res){
  modelo_noticia.find({_id : req.body.id}).then(
      function(noticia){
          if(noticia){
              res.json({success: true, noticia : noticia});
          }else{
              res.json({success: false, noticia : noticia});
          }
      }
  );
};


module.exports.actualizar = function(req, res){

  modelo_noticia.findByIdAndUpdate(req.body.id, { $set: req.body },
      function (error){
          if(error){
              res.json({success : false , msg : 'No se pudo actualizar la noticia'});
          }else{
              res.json({success: true , msg : 'La noticia se actualizó con éxito'});
          }
      }
  );
}

module.exports.borrar = (req, res) =>{
  modelo_noticia.findByIdAndDelete(req.body.id,
      function(error){
          if(error){
              res.json({ success : false, msg: 'No se pudo eliminar la noticia.'});

          }else{
              res.json({ success : true, msg: 'La noticia fue eliminada.'});
          }
      }
  )
};
