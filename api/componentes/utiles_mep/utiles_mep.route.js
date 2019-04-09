'use strict';

const express = require('express');
const router = express.Router();
const api_utiles_mep = require('./utiles_mep.api');

router.route('/registrar_util_mep')
  .post(
    function(req, res){
      api_utiles_mep.registrar_utiles_mep(req, res)
    }
  );

  router.route('/listar_utiles_mep')
  .get(
    function(req, res){
      api_utiles_mep.listar_todos(req,res)
    }
  );

  module.exports = router;
