
'use strict';
const evalucion_model = require('./evaluacion.model');

module.exports.registrar = (req, res) => {

    console.log('***+' + req.body.nombre);
    console.log('***+' + req.body.calificacion); 
    let nuevo_evaluacion = new evalucion_model(
        {
            nombre: req.body.nombre,
            calificacion: req.body.calificacion,
            estado : 'Activo'
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
module.exports.buscar_por_id = (req, res) => {
evalucion_model.find({_id : req.body.id_criterio}).then(
        function (criterio) {
            if (criterio) {
                res.json(
                    {
                        success: true,
                       criterio : criterio
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        criterio: 'No se encontraron evaluaciones'
                    }
                )
            }
        }
    )
};
module.exports.actualizar_criterio = function (req, res)  {
    evalucion_model.findByIdAndUpdate(req.body.id_criterio, {$set: req.body},
        function (error) {
            if (error) {
                res.json(
                    {
                        success: false,
                        msg: `No se pudo actualizar la evaluacion.`
                    }
                );
            } else {
                res.json(
                    {
                        success: true,
                        criterio: `Se actualizó correctamente la evaluacion.`
                    }
                );
            }
        }
        
        );
    
}

