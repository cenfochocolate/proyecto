'use strict';

const express = require('express');
const router = express.Router();
const api_estrellas_usuarios = require('./estrellasUsuarios.api');

router.route('/registrar_valoracion_usuarios')
  .post(
    function(req, res){
      api_estrellas_usuarios.registrar_estrellas_u(req, res);
    }
  );

router.route('/listar_calificaciones_usuario')
  .get(
    function(req, res){
      api_estrellas_usuarios.listar_calificaciones_usuario(req,res);
    }
  );

module.exports =  router;
