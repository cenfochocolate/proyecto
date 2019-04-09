'use strict'

let listar_contacto = () => {
    let lista_contacto = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/listar_contacto",
        method: "GET",
        data: {
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
    });

    request.done(function (res) {
    lista_contacto= res.contacto;

    });
    request.fail(function (jqXHR, textStatus) {

    });
    return lista_contacto;
};
let registrar_contacto = ( pid_institucion,pnombre, pid,  pdepartamento,  ptelefono, pcorreo, pextension, pimagen) => {
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
