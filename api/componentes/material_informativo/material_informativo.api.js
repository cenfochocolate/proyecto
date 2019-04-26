'use strict';
const model_material = require('./material_informativo.model')



module.exports.registrar = (req, res)=>{
let nuevo_material = new model_material(
    {
    id_institucion : req.body.id_institucion,
     nombre_institucion: req.body.nombre_institucion,
     descripcion : req.body.descripcion,
     estado: 'Activo'
    }
    );


 nuevo_material.save(function(error){
    if (error) {
        res.json(
            {
                success: false,
                msg: `No se pudo registrar el material, ocurrió el siguiente error ${error}`
            }
        );

    }else{
res.json(
      {
          success: true,
           msg: `se realizó correctamente el registro de material`
       }

     );
    }
})
};
module.exports.listar_materiales=(req, res)=>{
    model_material.find().then(
        function (material) {
            if (material.length> 0) {
                res.json(
                    {
                        success: true,
                        material: material
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        comentarios: 'No se encontraron registros de material'
                    }
                )
            }
        }
    )
};
module.exports.buscar_por_id = (req, res) => {
    model_material.find({_id : req.body.id_material}).then(
        function (material) {
            if (material) {
                res.json(
                    {
                        success: true,
                        material: material
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        material: 'No se encontraró material informativo.'
                    }
                )
            }
        }
    )
};
module.exports.actualizar_material = function (req, res)  {
    model_material.findByIdAndUpdate(req.body.id, {$set: req.body},
        function (error) {
            if (error) {
                res.json(
                    {
                        success: false,
                        msg: `No se pudo actualizar el material informativo.`
                    }
                );
            } else {
                res.json(
                    {
                        success: true,
                        material: `Se actualizó correctamente el material informativo.`
                    }
                );
            }
        }
        
        );
    
}
module.exports.borrar = (req, res) =>{
    model_material.findByIdAndDelete(req.body.id,
        function(error){
            if(error){
                res.json({ success : false, msg: 'No se pudo eliminar.'});
                
            }else{
                res.json({ success : true, msg: 'El material fue eliminado.'});
            }
        }
    )
};