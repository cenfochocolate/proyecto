'use strict';

const express = require('express');
const router = express.Router();
const api_utiles_institucion = require('./utiles_institucion.api');

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

  module.exports = router;
