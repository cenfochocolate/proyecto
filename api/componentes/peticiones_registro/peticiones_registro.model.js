'use strict';

let mongoose = require('mongoose');

let peticion_registroSchema = new mongoose.Schema({
    cedula_compania: { type: String, requerid: true },
    codigo: { type: String, required: true },
    fecha_peticion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Peticion Registro', peticion_registroSchema);
