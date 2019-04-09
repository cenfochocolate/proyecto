'use strict';

const express = require ('express');
const router = express.Router();
const api_requisito = require('./requisito.api');

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
module.exports = router;