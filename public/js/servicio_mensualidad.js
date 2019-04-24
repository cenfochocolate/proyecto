
'use strict';

function registrar_mensualidad (pid, pgrado,pinstitucion, pdescripcion,) {

  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_mensualidad",
    method: "POST",
    data: {
        id_institucion:pid,
        grado : pgrado,
        institucion : pinstitucion,
        descripcion : pdescripcion,

      },
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      dataType: "json"
  });
  request.done(function (res) {

      swal.fire({
        type: 'success',
        title: '¡Registro correctamente!'
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

let listar_mensualidad = () => {
    let lista_mensualidad = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/listar_mensualidad",
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        lista_mensualidad = res.mensualidad;

    });

    request.fail(function (jqXHR, textStatus) {

    });

    return lista_mensualidad;
};
let buscar_mensualidad = (id_mensualidad) => {
  let mensualidad = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/buscar_mensualidad/"+ id_mensualidad,
    method: "GET",
    data: {
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
  });

  request.done(function (res) {
      mensualidad = res.mensualidad;
    
  });

  request.fail(function (jqXHR, textStatus) {
    
  });
  return mensualidad;
 
};


let actualizar_mensualidad = ( pgrado,pinstitucion, pdescripcion, pid) => {
  let request = $.ajax({
      url: "http://localhost:4000/api/actualizar_mensualidad",
      method: "POST",
      data: {
        grado : pgrado,
        institucion : pinstitucion,
        descripcion : pdescripcion,
         id: pid
           },
           
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      dataType: "json",
      async: false
  });

  request.done(function (res) {
    
      swal.fire({
          type: 'success',
          title: '¡Actualizada correctamente!',
          text: '',
          onClose: () => {
            window.location.href = 'lista_mensualidad.html';
          }    
      });

  });

  request.fail(function (res) {
      swal.fire({
          type: 'error',
          title: 'Mensualidad no actualizada',
          text: res.msg
         
      });
  });
};

function borrar_mensualidad(pid){
  $.ajax({
      url: 'http://localhost:4000/api/borrar_mensualidad',
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

let deshabilitar_mensualidad = (pid) => {
  let request = $.ajax({
      url: "http://localhost:4000/api/actualizar_mensualidad",
      method: "POST",
      data: {
        estado : "Desactivo",
         id: pid
           },
           
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      dataType: "json",
      async: false
  });

  request.done(function (res) {
    
      swal.fire({
          type: 'success',
          title: '¡Deshabiitada correctamente!',
          text: res.msg,
          onClose: () => {
            window.location.href = 'lista_mensualidad.html';
          }    
      });

  });

  request.fail(function (res) {
      swal.fire({
          type: 'error',
          title: 'Mensualidad no deshabilitada',
          text: res.msg
         
      });
  });
};

let habilitar_mensualidad = (pid) => {
  let request = $.ajax({
      url: "http://localhost:4000/api/actualizar_mensualidad",
      method: "POST",
      data: {
        estado : "Activo",
         id: pid
           },
           
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      dataType: "json",
      async: false
  });

  request.done(function (res) {
    
      swal.fire({
          type: 'success',
          title: '¡Activada correctamente!',
          text: res.msg,
          onClose: () => {
            window.location.href = 'lista_mensualidad.html';
          }    
      });

  });

  request.fail(function (res) {
      swal.fire({
          type: 'error',
          title: 'Mensualidad no activada',
          text: res.msg
         
      });
  });
};