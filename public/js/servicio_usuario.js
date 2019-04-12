'use strict'

let registrar_institucion = (
    ptipo,
    pidentificacion,
    pnombre,
    pnombre_comercial,
    panio_funadacion,
    pgrado,
    pclase,
    pgenero,
    pespecialidad,
    prefencia_historica,
    pprovincia,
    pcanton,
    pdistrito,
    pdireccion,
    pmail,
    ptelefono,
    ptelefono_extencion,
    pfax,
    pweb,
    purl_archivo,
    purl_foto,
    pcontrasenna
) => {

    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_usuario",
        method: "POST",
        data: {
            tipo:ptipo,
            identificacion: pidentificacion,
            nombre: pnombre,
            nombre_comercial: pnombre_comercial,
            anio_fundacion: panio_funadacion,
            grado: pgrado,
            clase: pclase,
            genero: pgenero,
            especialidad: pespecialidad,
            refencia_historica: prefencia_historica,
            provincia: pprovincia,
            canton: pcanton,
            distrito: pdistrito,
            direccion: pdireccion,
            correo: pmail,
            telefono: ptelefono,
            extencion_telefono: ptelefono_extencion,
            fax:  pfax,
            web: pweb,
            url_archivo: purl_archivo,
            url_foto: purl_foto,
            contrasenna: pcontrasenna
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function (msg) {

        if (msg.success) {

            //swal.fire({
            //    type: 'success',
            //    title: 'Solicitud enviada',
            //    text: msg.msj
            //});
            //to go pagina verificacion
            sessionStorage.setItem('id_registro', pidentificacion);
            window.location = "verificar_codigo.html";

        } else {

            swal.fire({
                type: 'error',
                title: 'Upps!',
                text: msg.msj
            });
        }
    });

    request.fail(function (jqXHR, textStatus) { });
};
let registrar_padre = (
    ptipo,
    pidentificacion,
    pnombre,
    pprimer_apellido,
    psegundo_apellido,
    pnacionalidad,
    pcantidad_de_hijos,
    pprovincia,
    pcanton,
    pdistrito,
    pdireccion,
    pmail,
    ptelefono,
    purl_foto,
    pcontrasenna
) => {

    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_usuario",
        method: "POST",
        data: {
            tipo:ptipo,
            identificacion:pidentificacion,
            nombre: pnombre,
            primer_apellido:pprimer_apellido,
            segundo_apellido:psegundo_apellido,
            nacionalidad: pnacionalidad,
            cantidad_de_hijos: pcantidad_de_hijos,
            provincia: pprovincia,
            canton: pcanton,
            distrito: pdistrito,
            direccion: pdireccion,
            correo: pmail,
            telefono: ptelefono,
            url_foto: purl_foto,
            contrasenna: pcontrasenna
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function (msg) {

        if (msg.success) {

            sessionStorage.setItem('id_registro', pidentificacion);
            window.location = "verificar_codigo.html";

        } else {

            swal.fire({
                type: 'error',
                title: 'Upps!',
                text: msg.msj
            });
        }
    });

    request.fail(function (jqXHR, textStatus) { });
};


let listar_instituciones = () => {

    let lista_instituciones = [];
    let request = $.ajax({
        url: 'http://localhost:4000/api/listar_usuarios',
        method: 'GET',
        data: {},
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: 'json',
        async: false
    });

    request.done(function (res) {
        lista_instituciones = res.usuarios;
    });

    request.fail(function (jqXHR, textStatus) {

    });
    return lista_instituciones;
};
