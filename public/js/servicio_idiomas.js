'use strict';
let registra_idiomas = (pidioma, pcodigo_iso, pimagen, ) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_idiomas",
    method: "POST",
    data: {
      idioma: pidioma,
      codigo_iso: pcodigo_iso,
      imagen: pimagen,

    },
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json"
  });

  request.done(function(msg) {
    swal.fire({
      type: 'success',
      title: 'Cita deshabiitada correctamente',
      text: res.msg,
      onClose: () => {
        window.location.href = 'listar_idioma.html';
      }
    });
  });

  request.fail(function(jqXHR, textStatus) {
    console.log("Request fail error" + textStatus)
  });
};
let listar_idiomas = () => {
  let listar_idiomas = [];
  let request = $.ajax({
    url: "http://localhost:4000/api/listar_idiomas",
    method: "GET",
    data: {

    },
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json",
    async: false
  });

  request.done(function(res) {
    listar_idiomas = res.idiomas;

  });

  request.fail(function(jqXHR, textStatus) {

  });
  return listar_idiomas;
}

let buscar_idioma = (id_idioma) => {
  let idioma = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/buscar_idioma/" + id_idioma,
    method: "GET",
    data: {},
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async: false
  });

  request.done(function(res) {
    idioma = res.idioma;

  });

  request.fail(function(jqXHR, textStatus) {

  });
  return idioma;

};

let actualizar_idioma = (pidioma, pcodigo, pimagen, pid) => {
  let request = $.ajax({
    url: 'http://localhost:4000/api/actualizar_idioma',
    method: "POST",
    data: {
      idioma: pidioma,
      codigo_iso: pcodigo,
      imagen: pimagen,
      id: pid
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function(res) {


    swal.fire({
      type: 'success',
      title: 'Idioma actualizado con éxito',
      text: res.msg,
      onClose: () => {
        window.location.href = 'listar_idioma.html';
      }
    });

  });

  request.fail(function(res) {
    swal.fire({
      type: 'error',
      title: 'Proceso no realizado',
      text: res.msg
    });

  });

};

function borrar_idioma(pid) {
  $.ajax({
    url: 'http://localhost:4000/api/borrar_idioma',
    method: 'POST',
    contentType: "application/x-www-form-urlencoded; charset=utf-8",
    data: {
      id: pid
    },
    beforeSend: function beforeSend() {

    },
    success: function success(response) {

    },
    error: function error(_error) {
      console.log("Request fail error: " + _error);

    }
  });
};

let deshabilitar_idioma = (pid) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/actualizar_idioma",
    method: "POST",
    data: {
      estado: "Desactivo",
      id: pid
    },

    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json",
    async: false
  });

  request.done(function(res) {

    swal.fire({
      type: 'success',
      title: 'Cita deshabilitada correctamente',
      text: res.msg,
      onClose: () => {
        window.location.href = 'listar_idioma.html';
      }
    });

  });

  request.fail(function(res) {
    swal.fire({
      type: 'error',
      title: 'Cita no deshabilitada',
      text: res.msg

    });
  });
};

let habilitar_idioma = (pid) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/actualizar_idioma",
    method: "POST",
    data: {
      estado: "Activo",
      id: pid
    },

    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json",
    async: false
  });

  request.done(function(res) {

    swal.fire({
      type: 'success',
      title: 'Cita activada correctamente',
      text: res.msg,
      onClose: () => {
        window.location.href = 'listar_idioma.html';
      }
    });

  });

  request.fail(function(res) {
    swal.fire({
      type: 'error',
      title: 'Cita activada',
      text: res.msg

    });
  });
};
