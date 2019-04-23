'use strict';
const modelo_preguntas= require('./preguntas.model');

module.exports.registrar = (req, res) => {
    let nuevo_preguntas = new modelo_preguntas(
        {
            id_institucion: req.body.id_institucion,
            preguntas : req.body.preguntas,
            respuestas : req.body.respuestas,
            estado : 'Activo'


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
module.exports.buscar_por_id = (req, res) => {
    modelo_preguntas.find({_id : req.body.id_pregunta}).then(
        function (preguntas) {
            if (preguntas) {
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
module.exports.actualizar_pregunta = function (req, res)  {
    modelo_preguntas.findByIdAndUpdate(req.body.id, {$set: req.body},
        function (error) {
            if (error) {
                res.json(
                    {
                        success: false,
                        msg: `No se pudo actualizar la pregunta.`
                    }
                );
            } else {
                res.json(
                    {
                        success: true,
                        preguntas: `Se actualizó correctamente la pregunta y repuesta.`
                    }
                );
            }
        }
        
        );
    
}
module.exports.borrar = (req, res) =>{
    modelo_preguntas.findByIdAndDelete(req.body.id,
        function(error){
            if(error){
                res.json({ success : false, msg: 'No se pudo eliminar la pregunta.'});
                
            }else{
                res.json({ success : true, msg: 'La pregunta fue eliminada.'});
            }
        }
    )
};

