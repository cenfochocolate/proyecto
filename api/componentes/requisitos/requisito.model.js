'use strict';
const mongoose = require('mongoose');

let schema_requisito = new mongoose.Schema(
    {
        id:{type: String, required: true},
        nivel : {type : Number, required : true},
        descripcion : {type : String, required : true}
    }
);
module.exports = mongoose.model('requisito', schema_requisito);
