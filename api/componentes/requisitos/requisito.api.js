'use strict';
const requisito_model = require ('./requisito.model');

module.exports.registrar = (req,res) =>{
    let nuevo_requisito = new requisito_model(
        {
            id: req.body.id,
            nivel : req.body.nivel,
            descripcion : req.body.descripcion
        }
    );
    nuevo_requisito.save(function(error){
        if(error){
            res.json(
                {
                    success: false,
                    msg : `No se pudo registrar la matrícula, ocurrió el siguiente error ${error}`
                }
            );
        }else{
            res.json(
                {
                    success : true,
                    msg : `Se envió correctamente el registro`
                }
            )
        }
    });
};

module.exports.listar_todos = (req, res) => {
    requisito_model.find().then(
        function(requisito){
            if (requisito.length > 0) {
                res.json(
                    {
                        success: true,
                        requisito: requisito
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        requisito : 'No se encontraron resultados'
                    }
                )
            }
        }
    )
};
