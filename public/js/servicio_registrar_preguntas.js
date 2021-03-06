'use strict';

let listar_preguntas = () => {
    let lista_preguntas = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/listar_preguntas",
        method: "GET",
        data: {
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
    });

    request.done(function (res) {
    lista_preguntas= res.preguntas;

    });
    request.fail(function (jqXHR, textStatus) {

    });
    return lista_preguntas;
};

let buscar_pregunta = (id_pregunta) => {

    let preguntas  = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_pregunta/"+id_pregunta,
        method: "GET",
        data: {
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
    });

    request.done(function (res) {
   preguntas= res.preguntas;

    });
    request.fail(function (jqXHR, textStatus) {

    });
    return preguntas;
};

let actualizar_pregunta = (pid_institucion,ppreguntas, prespuestas, pid) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/actualizar_pregunta",
        method: "POST",
        data: {
            id_institucion:pid_institucion,
            preguntas: ppreguntas,
            respuestas: prespuestas,
            id: pid
             },

        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });


    request.done(function (res) {

        swal.fire({
            type: 'success',
            title: 'Pregunta actualizada correctamente',
            text:res.msg,
            onClose: () =>{
                window.location.href ='listar_preguntas_frecuentes.html';
            }
        });

    });

    request.fail(function (res) {
        swal.fire({
            type: 'error',
            title: 'Pregunta no actualizada',
            text: res.msg

        });
    });
};

function borrar_pregunta(pid){
    $.ajax({
        url: 'http://localhost:4000/api/borrar_pregunta',
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

let registrar_preguntas = (pid_institucion,ppreguntas, prespuestas) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_preguntas",
        method: "POST",
        data: {
          id_institucion:pid_institucion,
          preguntas: ppreguntas,
          respuestas: prespuestas



        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });


    request.done(function (msg) {

        swal.fire({
            type: 'success',
            title: 'Pregunta registrada',
            onClose: () =>{
                window.location.href ='listar_preguntas_frecuentes.html';
            }

        });

    });

    request.fail(function (jqXHR, textStatus) {

    });



};
let deshabilitar_pregunta = (pid) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/actualizar_pregunta",
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
            title: 'Deshabiitada correctamente',
            text: res.msg,
            onClose: () => {
              window.location.href = 'listar_preguntas_frecuentes.html';
            }
        });

    });

    request.fail(function (res) {
        swal.fire({
            type: 'error',
            title: 'Pregunta no deshabilitada',
            text: res.msg

        });
    });
  };

  let habilitar_pregunta = (pid) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/actualizar_pregunta",
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
            title: 'Pregunta activada correctamente',
            text: res.msg,
            onClose: () => {
              window.location.href = 'listar_preguntas_frecuentes.html';
            }
        });

    });

    request.fail(function (res) {
        swal.fire({
            type: 'error',
            title: 'activada',
            text: res.msg

        });
    });
  };
