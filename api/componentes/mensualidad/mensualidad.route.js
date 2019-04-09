
'use strict';

const express = require ('express');
const router = express.Router();
const api_mensualidad = require('./mensualidad.api');

router.route('/registrar_mensualidad')
    .post(
        function(req,res){
            api_mensualidad.registrar(req,res);
        }
    );
    router.route('/listar_mensualidad')
    .get(
        function(req,res){
            api_mensualidad.listar_todos(req,res);
        }
    );
module.exports = router;
