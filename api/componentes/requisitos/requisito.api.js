'use strict';
const requisito_model = require ('./requisito.model');

module.exports.registrar = function (req,res){
    let nuevo_requisito = new requisito_model(
        {
           
            nivel : req.body.nivel,
            descripcion : req.body.descripcion,
            estado : 'Activo'
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

module.exports.listar_todos = function (req, res) {
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
module.exports.buscar_por_id = function (req, res){
    requisito_model.find({_id : req.body.id_requisito}).then(
        function (requisito) {
            if (requisito) {
                res.json(
                    {
                        success: true,
                        requisito : requisito
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        requisito: 'No se encontraron requisitos'
                    }
                )
            }
        }
    )
};
module.exports.actualizar_requisito = function (req, res)  {
    requisito_model.findByIdAndUpdate(req.body.id, {$set: req.body},
        function (error) {
            if (error) {
                res.json(
                    {
                        success: false,
                        msg: `No se pudo actualizar el requisito.`
                    }
                );
            } else {
                res.json(
                    {
                        success: true,
                        msg: `Se actualizó correctamente el requisito.`
                    }
                );
            }
        }
        
        );
    
}

module.exports.borrar = (req, res) =>{
    requisito_model.findByIdAndDelete(req.body.id,
        function(error){
            if(error){
                res.json({ success : false, msg: 'No se pudo eliminar la matrícula.'});
                
            }else{
                res.json({ success : true, msg: 'La matrícula fue eliminada.'});
            }
        }
    )
};