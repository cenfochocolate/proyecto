'use strict';

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
let buscar_cita = (id_cita) => {
    
    let cita = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_cita/"+id_cita,
        method: "GET",
        data: {
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
    });

    request.done(function (res) {
   cita= res.cita;
       
    });
    request.fail(function (jqXHR, textStatus) {

    });
    return cita;
};

let actualizar_cita = (pnombre, ptime, pdate, pid) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/actualizar_cita",
        method: "POST",
        data: {
            nombre: pnombre,
           date: pdate,
           time: ptime,
           id: pid
             },
             
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });
    

    request.done(function (res) {
      
        swal.fire({
            type: 'success',
            title: 'Cita actualizada correctamente',
            text:res.msg
           
        });

    });

    request.fail(function (res) {
        swal.fire({
            type: 'error',
            title: 'Cita no actualizada',
            text: res.msg
           
        });
    });
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
            title: 'Cita registrada correctamente'

        });

    });

    request.fail(function (jqXHR, textStatus) {

    });



};
