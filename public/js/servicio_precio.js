'use strict';
function registrar_precio (pid,pnumero, pformato, pprecio, ppago ) {

    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_precio",
        method: "POST",
        data: {
            id_institucion:pid,
            numero : pnumero,
            formato : pformato,
            precio : pprecio,
            pago: ppago,


        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function (res) {

        swal.fire({
            type: 'success',
            title: '¡Registro correctamente!',
            onClose: () =>{
                window.location.href ='lista_precio_matricula.html';
            }
        });

    });
    request.fail(function (res) {
        swal.fire({
            type: 'error',
            title: 'Proceso no realizado',
            text: res.msg
        });
    });
};

let listar_precio = () => {
    let lista_precio = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/listar_precio",
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        lista_precio = res.precio;

    });

    request.fail(function (jqXHR, textStatus) {

    });

    return lista_precio;
};
let actualizar_precio = ( pnumero, pformato, pprecio, ppago,pid ) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/actualizar_precio",
        method: "POST",
        data: {
            numero : pnumero,
            formato : pformato,
            precio : pprecio,
            pago: ppago,
           id: pid
             },

        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
    });


    request.done(function (res) {

        swal.fire({
            type: 'success',
            title:  '¡Actualizada correctamente!',
            text:res.msg,
            onClose: () =>{
                window.location.href ='lista_precio_matricula.html';
            }

        });

    });

    request.fail(function (res) {
        swal.fire({
            type: 'error',
            title: 'Matricula no actualizada',
            text: res.msg

        });
    });
};
let buscar_precio = (id_precio) => {

    let precio = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_precio/"+id_precio,
        method: "GET",
        data: {
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
    });

    request.done(function (res) {
   precio = res.precio;

    });
    request.fail(function (jqXHR, textStatus) {

    });
    return precio;
};

function borrar_precio(pid){
    $.ajax({
        url: 'http://localhost:4000/api/borrar_precio',
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

let deshabilitar_precio = (pid) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/actualizar_precio",
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
            onClose: () =>{
                window.location.href ='lista_precio_matricula.html';
            }
        });

    });
    request.fail(function (res) {
        swal.fire({
            type: 'error',
            title: 'Matricula no deshabilitada',
            text: res.msg

        });
    });
  };

  let habilitar_precio = (pid) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/actualizar_precio",
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
            onClose: () =>{
                window.location.href ='lista_precio_matricula.html';
            }
        });

    });

    request.fail(function (res) {
        swal.fire({
            type: 'Matricula no activada',
            text: res.msg

        });
    });
  };
