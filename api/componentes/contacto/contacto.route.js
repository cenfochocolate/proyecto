'use strict';
const express = require('express');
const router = express.Router();
const api_contacto = require('./contacto.api');

router.route('/registrar_contacto')
    .post(
        function (req, res) {
            api_contacto.registrar(req, res);
        }
    );
router.route('/listar_contacto')
    .get(
        function (req, res) {
            api_contacto.listar_todos(req, res);
        }
    )

module.exports = router;