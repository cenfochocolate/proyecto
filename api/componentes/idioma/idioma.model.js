'use strict';
const mongoose = require('mongoose');

let schema_idioma = new mongoose.Schema(
    {
        id : {type : String, required : true},
        idioma : {type : String, required : true},
        duracion : {type : String, required : true},
        titulo : {type : String, required : true}
    }
);
module.exports = mongoose.model('idioma', schema_idioma);
