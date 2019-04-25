'use strict';

const express = require('express');
const router = express.Router();
const api_utiles_institucion = require('./utiles_institucion.api');


router.param('id_utiles', function(req, res, next, id_utiles){
  req.body.id_utiles = id_utiles;
  next();
});

router.route('/registrar_util_institucion')
  .post(
    function(req, res){
      api_utiles_institucion.registrar(req, res)
    }
  );



  router.route('/listar_utiles')
    .get(
      function(req, res){
        api_utiles_institucion.listar_todos(req, res)
      }
    );

    router.route('/buscar_lista/:id_utiles')
    .get(
        function(req , res){
            api_utiles_institucion.buscar_por_id(req, res);
        }
    );

router.route('/borrar_util')
    .post(function(req, res){
        api_utiles_institucion.borrar(req, res);
    });
  module.exports = router;
