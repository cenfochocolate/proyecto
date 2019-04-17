
'use strict';
const mongoose = require('mongoose');

let schema_mensualidad = new mongoose.Schema(
    {
        grado : {type : String, required : true},
        institucion : {type : String, required : true},
        descripcion : {type : String, required : true},
        estado : {type : String, required: true}
    }
);
module.exports = mongoose.model('mensualidad', schema_mensualidad);
