'use strict';
let mongoose = require('mongoose');

let usuarioSchema = new mongoose.Schema(
  {
    tipo:{type:String , required:true},
    identificacion: {type: String, unique:true,required:false},
    nombre: { type: String, required: false},
    primer_apellido:{type:String, required:false},
    segundo_apellido:{type:String,required:false},
    nacionalidad:{type:String,required:false},
    nombre_comercial: { type: String, required: false },
    cantidad_de_hijos: {type: String, required:false},
    anio_fundacion: { type: Number, required: false },
    grado: { type: String, required: false },
    clase: { type: String, required: false },
    genero: { type: String, required: false },
    especialidad: { type: String, required: false },
    refencia_historica: { type: String, required: false },
    provincia: { type: String, required: false },
    canton: { type: String, required: false },
    distrito: { type: String, required: false },
    direccion: { type: String, required: false },
    longitud: {type: String, required:false},
    latitud: {type: String, required:false},
    correo: { type: String, required: true},
    telefono: { type: String, required: true },
    extencion_telefono: { type: Number, required: false },
    fax: { type: Number, required: false},
    web: { type: String, required: false },
    url_archivo: { type: String, required: false },
    url_foto: { type: String, required: false },
    aprobada: { type: Boolean, default: false },
    estado: {type: String, required:true},
    fecha:{type:Date  , required:true},
    contrasenna:{ type:String, required: true}
  }
);


module.exports = mongoose.model('usuarios', usuarioSchema);
