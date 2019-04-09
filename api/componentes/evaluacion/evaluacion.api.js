
'use strict';
const evalucion_model = require('./evaluacion.model');

module.exports.registrar = (req, res) => {

    console.log('**********************************************************+' + req.body.nombre);
    console.log('**********************************************************+' + req.body.calificacion); 
    let nuevo_evaluacion = new evalucion_model(
        {
            nombre: req.body.nombre,
            calificacion: req.body.calificacion
        }
    );
    nuevo_evaluacion.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `No se pudo registrar el comentario, ocurrió el siguiente error ${error}`
                }
            );
        } else {

            
            res.json(
                {
                    success: true,
                    msg: `Se envió correctamente el comentario`
                }
            );
        }
    });
};
module.exports.listar_todos = (req, res) => {
    evalucion_model.find().then(
        function (evaluacion) {
            if (evaluacion.length > 0) {
                res.json(
                    {
                        success: true,
                        evaluacion: evaluacion
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        idioma: 'No se encontraron comentarios'
                    }
                )
            }
        }
    )
};