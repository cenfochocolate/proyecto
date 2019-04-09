'use strict';

const express = require('express');
const router = express.Router();
const api_noticia = require('./noticia.api');

router.route('/registrar_noticia')
  .post(
    function(req, res){
      api_noticia.registrar(req, res)
    }
  );
  router.route('/listar_noticias')
    .get(
      function(req, res){
        api_noticia.listar_todos(req, res)
      }
    );
    
  module.exports = router;
