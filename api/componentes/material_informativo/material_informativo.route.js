'use strict';
const express = require('express');
const router = express.Router();
const api_material_informativo=require('./material_informativo.api');

router.route('/registrar_materiales')
.post(
    function(req, res){
        api_material_informativo.registrar(req, res);
    }
);
router.route('/actualizar_material')
    .post(
        function (req, res) {
            api_material_informativo.actualizar_material(req, res);
        }
    );
router.route('/listar_material')
.get(
    function(req, res){
        api_material_informativo.listar_materiales(req, res);
    }
);
router.route('/buscar_material/:id_material')
    .get(
        function (req, res) {
            api_material_informativo.buscar_por_id(req, res);
        }
    )
module.exports = router;
