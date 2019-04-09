'use strict';
const mongoose = require('mongoose');

let schema_precio = new mongoose.Schema(
    {
        numero :{type : Number, required : true},
        formato :{type : String, required : true},
        precio : {type : Number, required : true},
        pago : {type : String, required : true}
    }
);
module.exports = mongoose.model('precio', schema_precio);
