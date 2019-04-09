'use strict';
const modelo_seleccion_lista = require('./seleccion_lista.model');

module.exports.registrar = (req, res) =>{
  let nueva_seleccion_lista = new modelo_seleccion_lista(
    {
      id: req.body.id,
      utiles: req.body.utiles,
    }
  );
  nueva_seleccion_lista.save(function(error){
    if (error) {
      res.json(
        {
          success:false,
          msj : `No se ha podido registrar su selección de lista de útiles, ha ocurrido el siguiente error ${error}`
        }
      );
    } else {
      res.json(
        {
          success: true,
          msj: `Se ha registrado su preferencia de manera satisfactoria`
        }
      );
    }
  });
};
