'use strict'
const mongoose = require ('mongoose');

let schera_preguntas = new mongoose.Schema(
    {
        id_institucion: {type : String, required : true},
        preguntas : {type : String, required : true},
        respuestas : {type : String, required : true}


    }
);
module.exports = mongoose.model('preguntas', schera_preguntas);
