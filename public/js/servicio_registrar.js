'use strict'

let listar_citas = () => {
    let lista_cita = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/listar_cita",
        method: "GET",
        data: {
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
    });

    request.done(function (res) {
    lista_cita= res.cita;

    });
    request.fail(function (jqXHR, textStatus) {

    });
    return lista_cita;
};
let registrar_citas = (pid_institucion,pnombre, ptime, pdate) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_cita",
        method: "POST",
        data: {
          id_institucion: pid_institucion,
          nombre: pnombre,
          date: pdate,
          time: ptime


        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });


    request.done(function (msg) {

        swal.fire({
            type: 'success',
            title: 'Fecha registrada correctamente'

        });

    });

    request.fail(function (jqXHR, textStatus) {

    });



};
