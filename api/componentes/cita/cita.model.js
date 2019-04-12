'use strict';
const mongoose = require ('mongoose');

let schema_cita = new mongoose.Schema(
    {
        id_institucion: {type : String, required : true}, 
        nombre : {type : String, required : true},
        date : {type : String, required : true},
        time : {type : String, required: true},
        estado : {type : String, required: true}
      

    }
);
module.exports = mongoose.model('cita', schema_cita);
