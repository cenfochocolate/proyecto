'use strict'
const mongoose = require('mongoose');

let schema_redes_sociales = new mongoose.Schema(
  {
    id_institucion : {type : String, required : true},
    facebook : {type : String, required : false},
    instagram : {type : String, required : false},
    twitter : {type : String, required : false},
    email : {type : String, required : false},
    youtube : {type : String, required : false}
  }
);

module.exports = mongoose.model('redes_sociales', schema_redes_sociales);
