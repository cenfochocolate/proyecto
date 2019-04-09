'use strict';

const express = require('express');
const router = express.Router();
const api_pcomercial = require('./pcomercial.api');

router.route('/registrar_pcomercial')
  .post(
    function(req, res){
      api_pcomercial.registrar(req, res)
    }
  );
  router.route('/listar_pcomercial')
    .get(
      function(req, res){
        api_pcomercial.listar_todos(req, res)
      }
    );
  module.exports = router;
