'use strict';
const mongoose = require('mongoose');

let schema_requisito = new mongoose.Schema(
    {
       
        nivel : {type : String, required : true},
        descripcion : {type : String, required : true},
        estado : {type : String, required: true}
    }
);
module.exports = mongoose.model('requisito', schema_requisito);
