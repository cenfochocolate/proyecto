
'use strict';
const express = require ('express');
const router = express.Router();
const api_evaluacion = require('./evaluacion.api');

router.route('/registrar_evaluacion')
    .post(
        function(req,res){
            api_evaluacion.registrar(req,res);
        }
    );
    router.route('/listar_evaluacion')
    .get(
        function(req,res){
            api_evaluacion.listar_todos(req,res);
        }
    );
module.exports = router;