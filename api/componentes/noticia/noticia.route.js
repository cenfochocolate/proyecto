'use strict';

const express = require('express');
const router = express.Router();
const api_noticia = require('./noticia.api');

router.param('id_noticia',function(req,res,next,id_noticia){
req.body.id_noticia=id_noticia;
next();
});

router.route('/registrar_noticia')
  .post(
    function(req, res){
      api_noticia.registrar(req, res)
    }
  );

  router.route('/actualizar_noticia')
  .post(
      function(req , res){
          api_noticia.actualizar(req, res);
      }
  );

  router.route('/listar_noticias')
    .get(
      function(req, res){
        api_noticia.listar_todos(req, res)
      }
    );
  
  router.route('/buscar_noticia/:id_noticia')
  .get(
    function(req,res){
      api_noticia.buscar_por_id(req,res);
    }
  );

  module.exports = router;
