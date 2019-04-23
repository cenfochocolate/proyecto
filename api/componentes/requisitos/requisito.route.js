'use strict';

const express = require ('express');
const router = express.Router();
const api_requisito = require('./requisito.api');

router.param('id_requisito', function(req, res, next, id_requisito){
    req.body.id_requisito = id_requisito;
    next();
}); 

router.route('/registrar_requisito')
    .post(
        function(req,res){
            api_requisito.registrar(req,res);
        }
    );
    router.route('/listar_requisito')
    .get(
        function(req,res){
            api_requisito.listar_todos(req,res);
        }
    );

    router.route('/actualizar_requisito')
    .post(
        function (req, res) {
            api_requisito.actualizar_requisito(req, res);
        }
    );

    router.route('/buscar_requisito/:id_requisito')
    .get(
        function (req, res) {
            api_requisito.buscar_por_id(req, res);
        }
    )
    router.route('/borrar_requisito')
    .post(function(req, res){
        api_requisito.borrar(req, res);
    });

module.exports = router;