'use strict'; 
const modelo_pc = require('./pcomercial.model'); 
 
module.exports.registrar = (req, res) => { 
  let nueva_pagina = new modelo_pc( 
    { 
      id_institucion: req.body.id_institucion, 
      pcomercial: req.body.pcomercial, 
      estado: 'Activo' 
 
    } 
  ); 
  nueva_pagina.save(function (error) { 
    if (error) { 
      res.json( 
        { 
          success: false, 
          msg: `No se pudo registrar la página, ocurriò el siguiente error ${error}` 
        } 
      ); 
    } else { 
      res.json( 
        { 
          success: true, 
          msg: `¡Se registró correctamente!`
        } 
      ); 
    } 
  }); 
}; 
module.exports.listar_todos = (req, res) =>  { 
  modelo_pc.find().then( 
    function (pcomercial) { 
      if (pcomercial.length > 0) { 
        res.json( 
          { 
            success: true, 
            pcomercial: pcomercial 
          } 
        ) 
      } else { 
        res.json( 
          { 
            success: false, 
            pcomercial: 'No hay página comercial registrada' 
          } 
        ) 
      } 
    } 
  ) 
}; 
 
module.exports.buscar_por_id = (req, res) => { 
  modelo_pc.find({ _id: req.body.id_pagina }).then( 
    function (pcomercial) { 
      if (pcomercial) { 
        res.json( 
          { 
            success: true, 
            pcomercial: pcomercial 
          } 
        ) 
      } else { 
        res.json( 
          { 
            success: false, 
            pcomercial: 'No hay página comercial registrada' 
          } 
        ) 
      } 
    } 
  ) 
}; 
 
module.exports.actualizar_pagina = function (req, res) { 
  modelo_pc.findByIdAndUpdate(req.body.id, { $set: req.body }, 
    function (error) { 
      if (error) { 
        res.json( 
          { 
            success: true, 
            msg: `No se pudo actualizar.` 
          } 
        ); 
      } else { 
        res.json( 
          { 
            success:false , 
            msg: `¡Se actualizó correctamente!` 
          } 
        ); 
      } 
    } 
 
  ); 
 
} 


module.exports.borrar = (req, res) =>{
  modelo_pc.findByIdAndDelete(req.body.id,
      function(error){
          if(error){
              res.json({ success : false, msg: 'No se pudo eliminar la página.'});
              
          }else{
              res.json({ success : true, msg: '¡Eliminado correctamente!'});
          }
      }
  )
};