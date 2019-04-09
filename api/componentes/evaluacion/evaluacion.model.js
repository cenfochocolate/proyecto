
'use strict';
const mongoose = require('mongoose');

let schema_evaluacion = new mongoose.Schema(
    {
        nombre : {type : String, required : true},
        calificacion : {type : Number, required : true}
    }
); 
module.exports = mongoose.model('evaluacion', schema_evaluacion);