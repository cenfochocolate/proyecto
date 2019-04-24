'use strict';

const express = require('express');
const router = express.Router();
const api_utiles_institucion = require('./utiles_institucion.api');

router.param('id', function(req, res, next, id){
  req.body.id = id;
  next();
});

router.route('/registrar_util_institucion')
  .post(
    function(req, res){
      api_utiles_institucion.registrar(req, res)
    }
  );

  router.route('/actualizar_utiles')
  .post(
      function(req , res){
          api_utiles_institucion.actualizar(req, res);
      }
  );

  router.route('/listar_utiles')
    .get(
      function(req, res){
        api_utiles_institucion.listar_todos(req, res)
      }
    );

    router.route('/buscar_utiles/:id')
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
