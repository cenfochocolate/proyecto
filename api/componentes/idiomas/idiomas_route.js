'use strict'
const express=require('express');
const router=express.Router();
const api_idiomas=require('./idiomas_api')

router.route('/registrar_idiomas')
.post(
    function(req,res)
    {  
     api_idiomas.idiomas(req,res);
    }
);
router.route('/listar_idiomas')
.get(
    function(req,res){
        api_idiomas.listar_idiomas(req,res);
    }
)
module.exports=router;