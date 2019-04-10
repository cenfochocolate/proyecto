'use strict';
const modelo_noticia = require('./noticia.model');

module.exports.registrar = (req, res) =>{
  let nueva_noticia = new modelo_noticia(
    {
      id_institucion: req.body.id_institucion,
      nombre : req.body.nombre,
      descripcion : req.body.descripcion,
      imagen: req.body.imagen

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