'use strict';
const express = require ('express');
const router = express.Router();
const api_precio = require('./precio.api');

router.param('id_pregunta', function(req, res, next, id_precio){

    req.body.id_precio = id_precio;
    next();

});

router.route('/registrar_precio')
    .post(
        function(req,res){
            api_precio.registrar(req, res);
        }
    );
    router.route('/listar_precio')
    .get(
        function(req,res){
            api_precio.listar_todos(req,res);
        }
    );
    router.route('/actualizar_precio')
    .post(
        function (req, res) {
            api_precio.actualizar_precio(req, res);
        }
    );
    router.route('/buscar_precio/:id_precio')
    .get(
        function (req, res) {
            api_precio.buscar_por_id(req, res);
        }
    );


module.exports = router;