'use strict'
const modelo_cita= require('./cita.model');

module.exports.registrar = (req, res) => {
    let nuevo_cita = new modelo_cita(
        {
            id_institucion: req.body.id_institucion,
            nombre: req.body.nombre,
            date: req.body.date,
            time: req.body.time,

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
