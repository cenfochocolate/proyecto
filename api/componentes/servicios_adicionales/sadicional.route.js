'use strict';

const express = require('express');
const router = express.Router();
const api_sadicional = require('./sadicional.api');

router.route('/registrar_sadicional')
  .post(
    function(req, res){
      api_sadicional.registrar(req, res)
    }
  );
  router.route('/listar_sadicional')
    .get(
      function(req, res){
        api_sadicional.listar_todos(req, res)
      }
    );

  module.exports = router;
