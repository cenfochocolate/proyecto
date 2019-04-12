'use strict';
const express = require('express');
const router = express.Router();
const api_preguntas = require('./preguntas.api');

router.param('id_pregunta', function(req, res, next, id_pregunta){

    req.body.id_pregunta = id_pregunta;
    next();

});

router.route('/registrar_preguntas')
    .post(
        function (req, res) {
            api_preguntas.registrar(req, res);
        }
    );

router.route('/actualizar_pregunta')
    .post(
        function (req, res) {
            api_preguntas.actualizar_pregunta(req, res);
        }
    );

router.route('/listar_preguntas')
    .get(
        function (req, res) {
            api_preguntas.listar_todos(req, res);
        }
    )

    router.route('/buscar_pregunta/:id_pregunta')
    .get(
        function (req, res) {
            api_preguntas.buscar_por_id(req, res);
        }
    )

 
module.exports = router;