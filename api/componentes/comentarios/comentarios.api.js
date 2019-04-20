'use strict';
const modelo_comentario = require('./comentarios.model');

module.exports.registrar_comentario = (req,res) =>{
  let nuevo_comentario = new modelo_comentario({
    id_usuario:req.body.id_usuario,
    id_institucion:req.body.id_institucion,
    comentario:req.body.comentario
  });
  nuevo_comentario.save(function(error){
    if (error) {
      res.json({
        success:false,
        msj:`No se pudo registrar el comentario, ocurrió el siguiente error ${error}`
      });
    } else {
      res.json({
        success:true,
        msj:`Se ha registrado el comentario de manera satisfactoria`
      });
    }
  });
};

module.exports.listar_comentarios=(req,res)=>{
  modelo_comentario.find().then(
    function(comentarios){
      if (comentarios.length>0) {
        res.json({
          success:true,
          comentarios:comentarios
        })
      } else {
        res.json({
          success:false,
          comentarios:'No hay ningun comentario registrado'
        })
      }
    }
  )
};
