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
      youtube : req.body.youtube
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
