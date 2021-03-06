'use strict';

const express = require('express');
const router = express.Router();
const api_sadicional = require('./sadicional.api');

router.param('id', function(req, res, next, id){
  req.body.id = id;
  next();
});

router.route('/registrar_sadicional')
  .post(
    function(req, res){
      api_sadicional.registrar(req, res)
    }
  );

  router.route('/actualizar_servicio')
  .post(
      function(req , res){
          api_sadicional.actualizar(req, res);
      }
  );


  router.route('/listar_sadicional')
    .get(
      function(req, res){
        api_sadicional.listar_todos(req, res)
      }
    );

    router.route('/buscar_servicio/:id')
.get(
    function(req , res){
        api_sadicional.buscar_por_id(req, res);
    }
);

router.route('/borrar_servicio')
    .post(function(req, res){
        api_sadicional.borrar(req, res);
    });

  module.exports = router;
