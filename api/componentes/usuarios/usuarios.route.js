'use strict';
const express = require('express');
const router = express.Router();
const usuarioApi = require('./usuarios.api');

router.route('/registrar_usuario').post(
    function (req, res) {
        usuarioApi.registrar(req, res);
    });

router.route('/validar_credenciales')
    .post(
        function (req, res) {
            usuarioApi.validar(req, res);
        });

router.route('/listar_usuarios')
    .get(
        function (req, res) {
            usuarioApi.listar_usuarios(req, res);
        });


router.route('/buscar_institucion')
    .post(
        function (req, res) {
            usuarioApi.buscar_institucion(req, res);
        });


module.exports = router;