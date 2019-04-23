'use strict';
const modelo_estrellas_usuarios = require('./estrellasUsuarios.model');

module.exports.registrar_estrellas_u = (req, res) => {
  let nueva_calificacion = new modelo_estrellas_usuarios({
    id_institucion: req.body.id_institucion,
    id_usuario: req.body.id_usuario,
    calificacion: req.body.calificacion
  });

  nueva_calificacion.save(function(error) {
    if (error) {
      res.json({
        success: false,
        msg: `No se pudo registrar su calificación, ocurrió el siguiente error ${error}`
      });
    } else {
      res.json({
        success: true,
        msg: `Se registró la calificación`
      });

    }
  });
};
module.exports.listar_calificaciones_usuario =(req,res)=>{
  modelo_estrellas_usuarios.find().then(
    function(valoraciones){
      if (valoraciones.length > 0) {
        res.json({
          success: true,
          valoraciones: valoraciones
        });
      } else {
        res.json({
          success: false,
          valoraciones: 'No se encontraron valoraciones'
        });
      }
    }
  );
};
