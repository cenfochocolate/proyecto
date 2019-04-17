
'use strict';
const mensualidad_model = require('./mensualidad.model');

module.exports.registrar = (req, res) => {
    let nuevo_mensualidad = new mensualidad_model(
        {
            grado: req.body.grado,
            institucion: req.body.institucion,
            descripcion: req.body.descripcion,
            estado : 'Activo'
        }
    );
    nuevo_mensualidad.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `No se pudo registrar la descripcion, ocurrió el siguiente error ${error}`
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

module.exports.listar_todos = (req, res) => {
    mensualidad_model.find().then(
        function (mensualidad) {
            if (mensualidad.length > 0) {
                res.json(
                    {
                        success: true,
                        mensualidad: mensualidad

                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                       mensualidad: 'No se encontraron resultados'
                    }
                )
            }
        }
    )
};
module.exports.buscar_por_id = (req, res) => {
    mensualidad_model.find({_id : req.body.id_mensualidad}).then(
        function (mensualidad) {
            if (mensualidad) {
                res.json(
                    {
                        success: true,
                        mensualidad : mensualidad
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        mensualidad : 'No se encontro la mensualidad'
                    }
                )
            }
        }
    )
};
module.exports.actualizar_mensualidad = function (req, res)  {
    mensualidad_model.findByIdAndUpdate(req.body.id, {$set: req.body},
        function (error) {
            if (error) {
                res.json(
                    {
                        success: false,
                        msg: `No se pudo actualizar la mensualidad.`
                    }
                );
            } else {
                res.json(
                    {
                        success: true,
                        mensualidad: `Se actualizó correctamente la mensualidad.`
                    }
                );
            }
        }
        
        );
    
}

