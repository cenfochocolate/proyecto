'use strict';

const express = require('express');
const router = express.Router();
const api_utiles_mep = require('./utiles_mep.api');

router.param('id_mep', function(req, res, next, id_mep){
  req.body.id_mep = id_mep;
  next();
});

router.route('/registrar_util_mep')
  .post(
    function(req, res){
      api_utiles_mep.registrar_utiles_mep(req, res)
    }
  );

  router.route('/actualizar_utiles')
  .post(
      function(req , res){
          api_utiles_institucion.actualizar(req, res);
      }
  );

  router.route('/listar_utiles_mep')
  .get(
    function(req, res){
      api_utiles_mep.listar_todos(req,res)
    }
  );

  router.route('/buscar_utile/:id_mep')
  .get(
      function(req , res){
          api_utiles_mep.buscar_por_id(req, res);
      }
  );
  
  module.exports = router;
