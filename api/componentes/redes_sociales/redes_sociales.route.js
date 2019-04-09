'use strict';
const express = require('express');
const router = express.Router();
const api_registrar_rs = require('./redes_sociales.api');

router.route('/registrar_redes_sociales')
  .post(
    function(req, res){
      api_registrar_rs.registrar(req,res)
    }
  );

  router.route('/listar_rs')
    .get(
      function(req, res){
        api_registrar_rs.listar_rs(req, res)
      }
    );

  module.exports = router;
