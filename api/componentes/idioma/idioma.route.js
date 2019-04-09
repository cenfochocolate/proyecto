'use strict';
const express = require ('express');
const router = express.Router();
const api_idioma = require('./idioma.api');

router.route('/registrar_idioma')
    .post(
        function(req,res){
            api_idioma.registrar(req, res);
        }
    );
    router.route('/listar_idioma')
    .get(
        function(req,res){
            api_idioma.listar_todos(req, res);
        }
    );

module.exports = router;
