'use strict';
const mongoose = require('mongoose');

let schema_noticia = new mongoose.Schema(
  {
    id_institucion : {type : String, required : true},
    nombre : {type : String, required : true},
    descripcion : {type : String, required : true},
    imagen : {type : String, required : true}

  }
);

module.exports = mongoose.model('noticia', schema_noticia);
