'use strict';
const mongoose = require('mongoose');

let schema_comentario = new mongoose.Schema(
  {
    id_usuario:{type:String, required:true},
    id_institucion:{type:String, required:true},
    comentario:{type:String, required:true},
  }
);

module.exports=mongoose.model('comentario', schema_comentario);
