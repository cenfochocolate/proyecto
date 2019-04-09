'use strict'
const modelo_preguntas= require('./preguntas.model');

module.exports.registrar = (req, res) => {
    let nuevo_preguntas = new modelo_preguntas(
        {
            id_institucion: req.body.id_institucion,
            preguntas : req.body.preguntas,
            respuestas : req.body.respuestas,


        }
    );

    nuevo_preguntas.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `No se pudo registrar la pregunta ni la repuesta, ocurrió el siguiente error ${error}`
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg: `Se registró la pregunta y su respuesta`
                }
            );

        }

    });

};
module.exports.listar_todos = (req, res) => {
    modelo_preguntas.find().then(
        function (preguntas) {
            if (preguntas.length > 0) {
                res.json(
                    {
                        success: true,
                        preguntas: preguntas
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        preguntas: 'No se encontraron preguntas'
                    }
                )
            }
        }
    )
};
