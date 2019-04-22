'use strict';
let registrar_idioma = (pid,pcedula, pidioma, pduracion, ptitulo) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_idioma",
        method: "POST",
        data: {
            id:pid,
            cedula: pcedula,
            idioma: pidioma,
            duracion: pduracion,
            titulo: ptitulo
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function (msg) {

        swal.fire({
            type: 'success',
            title: 'Comentario enviado correctamente',
            text: `La identificacion es${pcedula}seleccionó el idioma${pidioma},la cual tendrá una duración de${pduracion} y se le informa que${ptitulo} tendra título`
        });

    });

    request.fail(function (jqXHR, textStatus) {

    });
};

let listar_idioma = () => {
    let lista_idioma = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/listar_idiomas",
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        lista_idioma = res.idioma;

    });

    request.fail(function (jqXHR, textStatus) {

    });

    return lista_idioma;
};
