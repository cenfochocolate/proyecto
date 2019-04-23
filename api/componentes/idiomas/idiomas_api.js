'use strict';


const modelo_idiomas = require('./idiomas_model')

module.exports.idiomas=(req,res)=>{
 let nuevo_idiomas=new modelo_idiomas(
 {
    
    idioma:req.body.idioma,
    codigo_iso:req.body.codigo_iso,
    imagen:req.body.imagen, 
    estado : 'Activo'
 }
 );
 
 nuevo_idiomas.save(function(error){
    if (error) {
        res.json(
            {
                success: false,
                msg: 'No se pudo registrar el idioma, ocurrió el siguiente error '+error
            }
        );

    }else{
res.json(
      {
          success: true,
           msg: `se realizó correctamente el registro de el idioma`
       }
    
     );
    }
}) 
};
module.exports.listar_idiomas=(req, res)=>{
    modelo_idiomas.find().then(
        function (idiomas) {
            if (idiomas.length > 0) {
                res.json( 
                    {
                        success: true,
                        idiomas: idiomas
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        comentarios: 'No se encontraron registros de idiomas'
                    }
                )
            }
        }
    )
};

module.exports.buscar_por_id = function (req, res){
    modelo_idiomas.find({_id : req.body.id_idioma}).then(
        function(idioma){
            if(idioma){
                res.json({success: true, idioma : idioma});
            }else{
                res.json({success: false, idioma : idioma});
            }
        }

    );

};