'use strict';

const express = require('express');
const router = express.Router();
const api_pref_util = require('./seleccion_lista.api');

router.route('/registrar_pref_lista_utiles')
  .post(
    function(req, res){
      api_pref_util.registrar(req, res)
    }
  );

module.exports = router;
