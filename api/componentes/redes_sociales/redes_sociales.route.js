'use strict';
const express = require('express');
const router = express.Router();
const api_registrar_rs = require('./redes_sociales.api');
router.param('id_rs', function(req,res,next,id_rs){
  req.body.id_rs = id_rs;
  next();
});
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

    router.route('/buscar_rs/:id_rs')
    .get(
        function (req, res) {
            api_registrar_rs.buscar_por_id(req, res);
        }
    )

    router.route('/actualizar_rs')
    .post(
        function (req, res) {
            api_registrar_rs.actualizar_rs(req, res);
        }
    );
    router.route('/borrar_rs')
    .post(function(req, res){
        api_registrar_rs.borrar(req, res);
    });


  module.exports = router;
