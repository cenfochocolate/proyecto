'use strict'

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
            title: 'Pregunta registrada'

        });

    });

    request.fail(function (jqXHR, textStatus) {

    });



};
