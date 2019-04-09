'use strict';
const mongoose = require('mongoose');

let schema_seleccion_utiles = new mongoose.Schema(
  {
    id:{type:String, required: true},
    utiles: {type: String, required : true}
  }
);

module.exports = mongoose.model('seleccion_utiles', schema_seleccion_utiles);
