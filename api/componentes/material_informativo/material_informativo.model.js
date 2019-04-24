'use strict';

let mongoose = require('mongoose');

let schema_material=new mongoose.Schema(
    {
        nombre_institucion:{ type: String, required: true },
        descripcion : { type: String, required: true },
        estado: { type: String, required: true }
    }
);
module.exports=mongoose.model('material', schema_material);
