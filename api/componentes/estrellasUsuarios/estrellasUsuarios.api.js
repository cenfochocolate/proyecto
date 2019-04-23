'use strict';
const modelo_estrellas_usuarios = require('./estrellasUsuarios.model');

module.exports.registrar_estrellas_u = (req, res) =>{
  let nueva_calificacion = new modelo_estrellas_usuarios({
    id_institucion : req.body.id_institucion,
    id_usuario : req.body.id_usuario,
    calificacion : req.body.calificacion
  });

  nueva_calificacion.save(function(error) {
    if (error) {
        res.json(
            {
                success: false,
                msg: `No se pudo registrar su calificación, ocurrió el siguiente error ${error}`
            }
        );
    } else {
        res.json(
            {
                success: true,
                msg: `Se registró la calificación`
            }
        );

    }
  })
}
