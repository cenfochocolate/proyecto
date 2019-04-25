'use strict'
const express=require('express');
const router=express.Router();
const api_idiomas=require('./idiomas_api')

router.param('id_idioma', function(req, res, next, id_idioma){
    req.body.id_idioma = id_idioma;
    next();
});

router.route('/registrar_idiomas')
.post(
    function(req,res)
    {  
     api_idiomas.idiomas(req,res);
    }
);

router.route('/actualizar_idioma')
.post(
    function(req , res){
        api_idiomas.actualizar(req, res);
    }
);

router.route('/listar_idiomas')
.get(
    function(req,res){
        api_idiomas.listar_idiomas(req,res);
    }
)

router.route('/buscar_idioma/:id_idioma')
.get(
    function(req , res){
        api_idiomas.buscar_por_id(req, res);
    }
);

router.route('/borrar_idioma')
    .post(function(req, res){
        api_idiomas.borrar(req, res);
    });
module.exports=router;