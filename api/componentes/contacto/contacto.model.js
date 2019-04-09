'use strict'
const mongoose = require ('mongoose');

let schema_contacto = new mongoose.Schema(
    {
        id_institucion:{type:String, required:true},
        nombre : {type : String, required : true},
        id:{ type:String, required :true},
        departamento : {type : String, required: true},
        telefono : {type : String, required:true},
        correo : {type : String, required: true},
        extension : {type : String, required: true},
        imagen : {type: String, required: false}
    }
);
module.exports = mongoose.model('contacto', schema_contacto);
