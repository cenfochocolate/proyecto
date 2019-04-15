
'use strict';
const express = require ('express');
const router = express.Router();
const api_evaluacion = require('./evaluacion.api');

router.param('id_criterio', function(req, res, next, id_criterio){

    req.body.id_criterio = id_criterio;
    next();

});

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
router.route('/actualizar_criterio')
    .post(
        function (req, res) {
            api_evaluacion.actualizar_criterio(req, res);
        }
);
router.route('/buscar_criterio/:id_criterio')
.get(
    function (req, res) {
        api_evaluacion.buscar_por_id(req, res);
    }
)

module.exports = router;