'use strict';

let registrar_paginacomercial = (pid_institucion, ppagina_comercial) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_pcomercial",
    method: "POST",
    data: {
      id_institucion: pid_institucion,
      pcomercial: ppagina_comercial,
    },
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json"
  });

  request.done(function (msg) {

    swal.fire({
      type: 'success',
      title: 'La página se registro correctamente',
      text: `La página comercial de su institución fue registrada, su dirección es: ${ppagina_comercial}`
    });
  });

  request.fail(function (jqXHR, textStatus) {

    swal.fire({
      type: 'error',
      title: 'Proceso no realizado',
      text: res.msg
    });

  });
};
let listar_pcomercial = () => {
  let lista_pcomercial = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/listar_pcomercial",
    method: "GET",
    data: {
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async: false
  });
  request.done(function (res) {
    lista_pcomercial = res.pcomercial;

  });
  request.fail(function (jqXHR, textStatus) {

  });
  return lista_pcomercial;
};


let buscar_pagina = (id_pagina) => {

  let pagina = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/buscar_pagina/" + id_pagina,
    method: "GET",
    data: {
    },
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json",
    async: false
  });

  request.done(function (res) {
    pagina = res.pcomercial;

  });
  request.fail(function (jqXHR, textStatus) {

  });
  return pagina;
};

let actualizar_pagina = (ppagina_comercial, pid) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/actualizar_pagina",
    method: "POST",
    data: {

      pcomercial: ppagina_comercial,
      id: pid
    },

    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json",
    async: false

  });

  request.done(function (res) {

    swal.fire({
      type: 'success',
      title: 'Pagina actualizada correctamente',
      text: 'Pagina actualizada correctamente',
      onClose: () => {
        window.location.href = 'listar_pagina_comercial.html';
      }
    });

  });

  request.fail(function (res) {
    swal.fire({
      type: 'error',
      title: 'Pagina no actualizada',
      text: res.msg

    });
  });
};
