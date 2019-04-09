'use strict';
const model_material = require('./material_informativo.model')



module.exports.registrar = (req, res)=>{
let nuevo_material = new model_material(
    {
      id:req.body.id,
     nombre_de_la_institucion:req.body.nombre_de_la_institucion,
     descripcion : req.body.descripcion
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
