'use strict';
const express = require('express');
const router = express.Router();
const api_cita = require('./cita.api');

router.param('id_cita', function(req, res, next, id_cita){

    req.body.id_cita = id_cita;
    next();

});

router.route('/registrar_cita')
    .post(
        function (req, res) {
            api_cita.registrar(req, res);
        }
    );
    
    router.route('/actualizar_cita')
    .post(
        function (req, res) {
            api_cita.actualizar_cita(req, res);
        }
    );

router.route('/listar_cita')
    .get(
        function (req, res) {
            api_cita.listar_todos(req, res);
        }
    )

 router.route('/buscar_cita/:id_cita')
    .get(
        function (req, res) {
            api_cita.buscar_por_id(req, res);
        }
    )

module.exports = router;