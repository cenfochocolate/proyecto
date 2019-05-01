'use strict';

let registrar_util = (pid_institucion, putil, pdescripcion, pnumero, pnivel) =>{
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_util_institucion",
    method: "POST",
    data: {
      id_institucion: pid_institucion,
      util : putil,
      descripcion : pdescripcion,
      cantidad : pnumero,
      nivel : pnivel
     },
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json"
    });

    request.done(function( msg ) {
      console.log(msg);
      swal.fire({
        type: 'success',
        title: 'Registro realizado satisfactoriamente',
        text: `Hola, el útil: ${putil} con la descripción ${pdescripcion} y su cantidad: ${pnumero} para el siguiente nivel: ${pnivel} se ha registrado completamente`
      });
    });

    request.fail(function( jqXHR, textStatus ) {

    });
};

let listar_utiles = () => {
  let lista_utiles = [];
  let request = $.ajax({
    url: "http://localhost:4000/api/listar_utiles",
    method: "GET",
    data: {

     },
     dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
    });

    request.done(function( res ) {
      lista_utiles = res.utiles;
    });

    request.fail(function( jqXHR, textStatus ) {

    });
    return lista_utiles;
};

let buscar_utile = (id_utiles) => {
  let util = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/buscar_utile/"+id_utiles,
    method: "GET",
    data: {
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
  });

  request.done(function (res) {
    util = res.util;
    
  });

  request.fail(function (jqXHR, textStatus) {
    
  });
  return util;
};

let actualizar_utiles = ( putil, pdescripcion, pnumero,pnivel, pid) =>{
  let request = $.ajax({
      url : 'http://localhost:4000/api/actualizar_utiles',
      method : "POST",
      data : {
          util : putil,
          descripcion : pdescripcion,
          numero : pnumero,
          nivel: pnivel,
          id : pid
      },
      dataType : "json",
      contentType : 'application/x-www-form-urlencoded; charset=UTF-8' 
  });

  request.done(function(res){
      
     
      swal.fire({
          type : 'success',
          title : 'util actualizado con éxito',
          text : res.msg,
          onClose: () => {
              window.location.href = 'listar_utiles.html';
            }    
      });

  });

  request.fail(function(res){
      swal.fire({
          type : 'error',
          title : 'Proceso no realizado',
          text : res.msg
      });

  });

};
function borrar_util(pid){
  $.ajax({
      url: 'http://localhost:4000/api/borrar_util',
      method: 'POST',
      contentType: "application/x-www-form-urlencoded; charset=utf-8",
      data: {
          id: pid
      },
      beforeSend: function beforeSend(){

      },
      success: function success(response){

      },
      error: function error(_error){
          console.log("Request fail error: " + _error);

      }
  });
};