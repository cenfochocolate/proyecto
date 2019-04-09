'use strict';
const idioma_model = require ('./idioma.model');

module.exports.registrar = (req,res) =>{
    let nuevo_idioma = new idioma_model(
        {
            id: req.body.id,
            cedula : req.body.cedula,
            idioma : req.body.idioma,
            duracion : req.body.duracion,
            titulo :req.body.titulo
        }
    );
    nuevo_idioma.save(function(error){
        if(error){
            res.json(
                {
                    success : false,
                    msg : `No se pudo registrar el comentario, ocurrió el siguiente error ${error}`
                }
            );
        }else{
            res.json(
                {
                    success : true,
                    msg : `Se envió correctamente el comentario`
                }
            );
        }
    });
};
module.exports.listar_todos = (req, res) => {
    idioma_model.find().then(
        function (idioma) {
            if (idioma.length > 0) {
                res.json(
                    {
                        success: true,
                        idioma: idioma

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
