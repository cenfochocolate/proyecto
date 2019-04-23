
'use strict';
const evalucion_model = require('./evaluacion.model');

module.exports.registrar = function (req, res) {

    console.log('***+' + req.body.nombre);
    console.log('***+' + req.body.calificacion);
    let nuevo_evaluacion = new evalucion_model(
        {
            nombre: req.body.nombre,
            calificacion: req.body.calificacion,
            estado: 'Activo'
        }
    );
    nuevo_evaluacion.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `No se pudo registrar la evaluacion , ocurrió el siguiente error ${error}`
                }
            );
        } else {


            res.json(
                {
                    success: true,
                    msg: `Se envió correctamente el registro`
                }
            );
        }
    });
};
module.exports.listar_todos = function (req, res) {
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
                        evaluacion: 'No se encontro evaluación'
                    }
                )
            }
        }
    )
};
module.exports.buscar_por_id = function (req, res) {
    evalucion_model.find({ _id: req.body.id_criterio }).then(
        function (evaluacion) {
            if (evaluacion) {
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
                        evaluacion: 'No se encontraron evaluaciones'
                    }
                )
            }
        }
    )
};
module.exports.actualizar_criterio = function (req, res) {
    evalucion_model.findByIdAndUpdate(req.body.id, { $set: req.body },
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
                        msg: `Se actualizó correctamente la evaluacion.`
                    }
                );
            }
        }

    );
}

module.exports.borrar = (req, res) => {
    evalucion_model.findByIdAndDelete(req.body.id,
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo eliminar la evaluación.' });

            } else {
                res.json({ success: true, msg: 'La pregunta fue evaluación.' });
            }
        }
    )
};
