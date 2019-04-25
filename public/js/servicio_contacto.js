'use strict';


let buscar_contacto = (id_contacto) => {

    let contacto = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_contacto/"+id_contacto,
        method: "GET",
        data: {
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
    });

    request.done(function (res) {
        contacto= res.contacto;

    });
    request.fail(function (jqXHR, textStatus) {

    });
    return contacto;
};

let actualizar_contacto = ( pnombre, pdepartamento,  ptelefono, pcorreo, pextension, pimagen, pid) => {
  let request = $.ajax({
      url: "http://localhost:4000/api/actualizar_contacto",
      method: "POST",
      data: {
        nombre : pnombre,
        departamento:pdepartamento,
        telefono:ptelefono,
        correo:pcorreo,
        extension:pextension,
        imagen:pimagen,
         id: pid
           },

      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      dataType: "json",
      async: false
  });

  request.done(function (res) {

      swal.fire({
          type: 'success',
          title: 'Contacto actualizado correctamente',
          text: res.msg,
          onClose: () => {
            window.location.href = 'perfil_institucion.html';
          }
      });

  });

  request.fail(function (res) {
      swal.fire({
          type: 'error',
          title: 'Contacto no actualizado',
          text: res.msg

      });
  });
};
function borrar_contacto(pid){
    $.ajax({
        url: 'http://localhost:4000/api/borrar_contacto',
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

let registrar_contacto = ( pid_institucion, pnombre, pid, pdepartamento, ptelefono, pcorreo, pextension, pimagen) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_contacto",
        method: "POST",
        data: {
         id_institucion:pid_institucion,
         nombre: pnombre,
         id: pid,
         departamento : pdepartamento,
         telefono : ptelefono,
         correo : pcorreo,
         extension : pextension,
         imagen : pimagen
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });


    request.done(function (msg) {

        swal.fire({
            type: 'success',
            title: 'Contacto registrado'

        });

    });

    request.fail(function (jqXHR, textStatus) {

    });



};
let deshabilitar_contacto = (pid) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/actualizar_contacto",
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
            title: 'Contacto deshabiitado correctamente',
            text: res.msg,
            onClose: () => {
              window.location.href = 'perfil_institucion.html';
            }
        });

    });

    request.fail(function (res) {
        swal.fire({
            type: 'error',
            title: 'Contacto no deshabilitado',
            text: res.msg

        });
    });
  };

  let habilitar_contacto = (pid) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/actualizar_contacto",
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
            title: 'Contacto activada correctamente',
            text: res.msg,
            onClose: () => {
              window.location.href = 'perfil_institucion.html';
            }
        });

    });

    request.fail(function (res) {
        swal.fire({
            type: 'error',
            title: 'Contacto activada',
            text: res.msg

        });
    });
  };
