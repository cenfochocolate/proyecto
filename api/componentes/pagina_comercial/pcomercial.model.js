'use strict';
const mongoose = require('mongoose');

let schema_pcomercial = new mongoose.Schema(
  {
    id_institucion: {type : String, required : true},
    pcomercial : {type : String, required : true},
    estado : {type : String, required: true}
  }
);

module.exports = mongoose.model('pcomercial', schema_pcomercial);
