
'use strict';

const express = require ('express');
const router = express.Router();
const api_mensualidad = require('./mensualidad.api');

router.param('id_mensualidad', function(req, res, next, id_mensualidad){

    req.body.id_mensualidad = id_mensualidad;
    next();

});

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
router.route('/actualizar_mensualidad')
    .post(
        function (req, res) {
            api_mensualidad.actualizar_mensualidad(req, res);
        }
    );
router.route('/buscar_mensualidad/:id_mensualidad')
    .get(
        function (req, res) {
            api_mensualidad.buscar_por_id(req, res);
        }
    );

module.exports = router;
