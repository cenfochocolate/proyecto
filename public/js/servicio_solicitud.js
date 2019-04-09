'use strict'

let listar_solicitud = () => {
    let lista_solicitud = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/listar_centros_por_aprobar",
        method: "GET",
        data: {
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
    });

    request.done(function (res) {
        lista_solicitud = res.instituciones;

    });
    request.fail(function (jqXHR, textStatus) {

    });
    return lista_solicitud;
};
