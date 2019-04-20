'use strict';

const express = require('express');
const router = express.Router();
const api_comentario = require('./comentarios.api');

router.route('/registrar_comentario')
  .post(
    function(req,res){
      api_comentario.registrar_comentario(req,res)
    }
  );
  router.route('/listar_comentarios')
  .get(
    function(req,res){
      api_comentario.listar_comentarios(req,res)
    }
  );
module.exports=router;
