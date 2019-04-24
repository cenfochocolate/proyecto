'use strict';
const express = require('express');
const router = express.Router();
const api_contacto = require('./contacto.api');

router.param('id_contacto', function(req, res, next, id_contacto){

    req.body.id_contacto = id_contacto;
    next();

});

router.route('/registrar_contacto')
    .post(
        function (req, res) {
            api_contacto.registrar(req, res);
        }
    );

    router.route('/actualizar_contacto')
    .post(
        function (req, res) {
            api_contacto.actualizar_contacto(req, res);
        }
    );

router.route('/listar_contacto')
    .get(
        function (req, res) {
            api_contacto.listar_todos(req, res);
        }
    )

    router.route('/buscar_contacto/:id_contacto')
    .get(
        function (req, res) {
            api_contacto.buscar_por_id(req, res); 
        }
    )
    router.route('/borrar_contacto')
    .post(function(req, res){
        api_contacto.borrar(req, res);
    });

module.exports = router; 