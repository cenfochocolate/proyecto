'use strict';
const express = require ('express');
const router = express.Router();
const api_precio = require('./precio.api');

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
module.exports = router;