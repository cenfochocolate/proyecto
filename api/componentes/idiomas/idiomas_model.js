'use strict'

let mongoose=require('mongoose');

let schema_idiomas=new mongoose.Schema(
  {
    
      idioma:{type:String,required:true},
      codigo_iso:{type:String,required:true},
      imagen:{type:String,required:true},
      estado : {type : String, required : true}
  }
);
module.exports=mongoose.model('idiomas',schema_idiomas);