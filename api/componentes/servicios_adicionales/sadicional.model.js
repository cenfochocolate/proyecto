'use strict';
const mongoose = require('mongoose');

let schema_sadicional = new mongoose.Schema(
  {
    id_institucion: {type : String, required : true},
    nombre : {type : String, required : true},
    descripcion : {type : String, required : true},
    imagen : {type : String, required : false}

  }
);

module.exports = mongoose.model('sadicional', schema_sadicional);
