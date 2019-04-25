'use strict';
let registar_requisito = (pid, pnivel, pdescripcion) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_requisito",
        method: "POST",
        data: {
            id_institucion: pid,
            nivel: pnivel,
            descripcion: pdescripcion,
            estado: "Activo"
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

    request.fail(function (res) {
        swal.fire({
            type: 'error',
            title: 'Proceso no realizado',
            text: res.msg
        });
    });
};

let listar_requisito = () => {
    let lista_requisito = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/listar_requisito",
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        lista_requisito = res.requisito;

    });

    request.fail(function (jqXHR, textStatus) {

    });

    return lista_requisito;
};
let buscar_requisito = (id_requisito) => {

    let requisito = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_requisito/" + id_requisito,
        method: "GET",
        data: {
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
    });

    request.done(function (res) {
        requisito = res.requisito;

    });
    request.fail(function (jqXHR, textStatus) {

    });
    return requisito;
};

let actualizar_requisito = (pnivel, pdescripcion, pid) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/actualizar_requisito",
        method: "POST",
        data: {

            nivel: pnivel,
            descripcion: pdescripcion,
            id: pid
        },

        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
    });


    request.done(function (res) {

        swal.fire({
            type: 'success',
            title: '¡Requisito actualizado correctamente!',
            text: res.msg,
            onClose: () => {
                window.location.href = 'listar_requisitos.html';
            }

        });

    });

    request.fail(function (res) {
        swal.fire({
            type: 'error',
            title: 'Requisito no actualizado',
            text: res.msg

        });
    });
};

function borrar_requisito(pid) {
    $.ajax({
        url: 'http://localhost:4000/api/borrar_requisito',
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
let habilitar_requisito = (pid) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/actualizar_requisito",
        method: "POST",
        data: {

            estado: "Activo",
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
                window.location.href = 'listar_requisitos.html';
            }

        });

    });

    request.fail(function (res) {
        swal.fire({
            type: 'error',
            title: 'Requisito no actualizado',
            text: res.msg

        });
    });
};
let deshabilitar_requisito = (pid) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/actualizar_requisito",
        method: "POST",
        data: {

            estado: "Desactivo",
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
                window.location.href = 'listar_requisitos.html';
            }

        });

    });

    request.fail(function (res) {
        swal.fire({
            type: 'error',
            title: 'Requisito no actualizado',
            text: res.msg

        });
    });
};