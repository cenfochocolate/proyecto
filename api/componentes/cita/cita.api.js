'use strict';

const modelo_cita= require('./cita.model');

module.exports.registrar = (req, res) => {
    let nuevo_cita = new modelo_cita(
        {
            id_institucion: req.body.id_institucion,
            nombre: req.body.nombre,
            date: req.body.date,
            time: req.body.time,
            estado : 'Activo'

        }
    );

    nuevo_cita.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `No se pudo registrar la cita, ocurrió el siguiente error ${error}`
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg: `Se registró la cita`
                }
            );

        }

    });

};
module.exports.listar_todos = (req, res) => {
    modelo_cita.find().then(
        function (cita) {
            if (cita.length > 0) {
                res.json(
                    {
                        success: true,
                        cita: cita
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        cita: 'No se encontraron citas'
                    }
                )
            }
        }
    )
};
module.exports.buscar_por_id = (req, res) => {
    modelo_cita.find({_id : req.body.id_cita}).then(
        function (cita) {
            if (cita) {
                res.json(
                    {
                        success: true,
                        cita: cita
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        cita: 'No se encontraron citas'
                    }
                )
            }
        }
    )
};
module.exports.actualizar_cita = function (req, res)  {
    modelo_cita.findByIdAndUpdate(req.body.id, {$set: req.body},
        function (error) {
            if (error) {
                res.json(
                    {
                        success: false,
                        msg: `No se pudo actualizar la cita.`
                    }
                );
            } else {
                res.json(
                    {
                        success: true,
                        cita: `Se actualizó correctamente la cita.`
                    }
                );
            }
        }
        
        );
    
}

