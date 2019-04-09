'use strict';
let registar_requisito = (pid, pnivel, pdescripcion) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_requisito",
        method: "POST",
        data: {
            id:pid,
            nivel : pnivel,
            descripcion : pdescripcion
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });
    request.done(function (msg) {

        swal.fire({
            type: 'success',
            title: 'Su registro se envio correctamente',
            text: `El nivel deseado en la institucion es ${pnivel} con la descripcion de ${pdescripcion}`
        });

    });

    request.fail(function (jqXHR, textStatus) {

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
