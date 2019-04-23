'use strict';
const mongoose = require('mongoose');

let schema_estrellas_usuarios = new mongoose.Schema({
  id_institucion:{type:String, required:true},
  id_usuario:{type:String, required:true},
  calificacion:{type:Number, required:true},
});

module.exports = mongoose.model('estrellas_contacto', schema_estrellas_usuarios);
