'use strict';
const express = require('express');
const router = express.Router();
const peticionRegistroApi = require('./peticiones_registro.api');

router.route('/peticion_registro')
    .post(
        function (req, res) {
            peticionRegistroApi.registrar(req, res)
        });

//router.route('/listar_instituciones')
//    .get(
//        function (req, res) {
//            peticionRegistroApi.listar_instituciones(req, res)
//        });

router.route('/validar_codigo')
    .post(
        function (req, res) {
        peticionRegistroApi.validar(req, res)
});


module.exports = router; 