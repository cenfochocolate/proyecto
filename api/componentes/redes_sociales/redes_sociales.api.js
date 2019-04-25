'use strict';
const modelo_rs = require('./redes_sociales.model');

module.exports.registrar = (req, res) =>{
  let nuevas_rs = new modelo_rs(
    {
      id_institucion:req.body.id_institucion,
      facebook : req.body.facebook,
      instagram : req.body.instagram,
      twitter: req.body.twitter,
      email : req.body.email,
      youtube : req.body.youtube,
      estado : 'Activo'
    }
  );
  nuevas_rs.save(function(error){
    if (error) {
      res.json(
        { 
          success : false,
          msj : `No se han podido registrar las redes sociales, ha ocurrido el siguiente error ${error}`
        }
      );
    } else {
      res.json(
        {
          success : true,
          msj : `Se ha completado el registro de manera exitosa`
        }
      );
    }
  });
};

module.exports.listar_rs = (req, res) =>{
  modelo_rs.find().then(
    function(rs){
      if(rs.length > 0){
        res.json(
          {
            success: true,
            rs: rs
          }
        )
      }else{
        res.json(
          {
            success: false,
            rs: 'No se encontraron redes sociales'
          }
        )
      }
    }
  )
};
module.exports.buscar_por_id = (req, res) => {
  modelo_rs.find({_id : req.body.id_rs}).then(
      function (rs) {
          if (rs) {
              res.json(
                  {
                      success: true,
                      rs: rs
                  }
              )
          } else {
              res.json(
                  {
                      success: false,
                     rs: 'No se encontraron redes sociales'
                  }
              )
          }
      }
  )
};
module.exports.actualizar_rs = function (req, res)  {
  modelo_rs.update({id_institucion : req.body.id_institucion}, {$set: req.body},
      function (error) {
          if (error) {
              res.json(
                  {
                      success: false,
                      msg: `No se pudo actualizar la red social.`
                  }
              );
          } else {
              res.json(
                  {
                      success: true,
                      msg: `Se actualizó correctamente la red social.`
                  }
              );
          }
      }
      
      );
  
}


module.exports.borrar = (req, res) =>{
  modelo_rs.findByIdAndDelete(req.body.id,
      function(error){
          if(error){
              res.json({ success : false, msg: 'No se pudo eliminar.'});
              
          }else{
              res.json({ success : true, msg: 'Fue eliminada.'});
          }
      }
  )
};