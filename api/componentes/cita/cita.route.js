'use strict';
const express = require('express');
const router = express.Router();
const api_cita = require('./cita.api');

router.route('/registrar_cita')
    .post(
        function (req, res) {
            api_cita.registrar(req, res);
        }
    );
router.route('/listar_cita')
    .get(
        function (req, res) {
            api_cita.listar_todos(req, res);
        }
    )

module.exports = router;