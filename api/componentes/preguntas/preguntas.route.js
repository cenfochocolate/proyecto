'use strict';
const express = require('express');
const router = express.Router();
const api_preguntas = require('./preguntas.api');

router.route('/registrar_preguntas')
    .post(
        function (req, res) {
            api_preguntas.registrar(req, res);
        }
    );
router.route('/listar_preguntas')
    .get(
        function (req, res) {
            api_preguntas.listar_todos(req, res);
        }
    )

module.exports = router;