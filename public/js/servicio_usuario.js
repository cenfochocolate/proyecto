'use strict';

let registrar_institucion = (
    paprobada,
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
    plongitud,
    platitud,
    pmail,
    ptelefono,
    ptelefono_extencion,
    pfax,
    pweb,
    purl_archivo,
    purl_foto,
    pfecha,
    pcontrasenna
) => {

    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_usuario",
        method: "POST",
        data: {
            aprobada:paprobada,
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
            longitud: plongitud,
            latitud: platitud,
            correo: pmail,
            telefono: ptelefono,
            extencion_telefono: ptelefono_extencion,
            fax:  pfax,
            web: pweb,
            url_archivo: purl_archivo,
            url_foto: purl_foto,
            fecha: pfecha,
            contrasenna: pcontrasenna
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function (msg) {

        if (msg.success) {
        let tipo = sessionStorage.getItem('tipo_usuario');
            //swal.fire({
            //    type: 'success',
            //    title: 'Solicitud enviada',
            //    text: msg.msj
            //});
            //to go pagina verificacion
            sessionStorage.setItem('id_registro', pidentificacion);
            if(tipo == "admin"){
              window.location = "listar_usuarios.html";
            }else{
              window.location = "verificar_codigo.html";
            }


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
    paprobada,
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
    plongitud,
    platitud,
    pmail,
    ptelefono,
    purl_foto,
    pcontrasenna
) => {

    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_usuario",
        method: "POST",
        data: {
            aprobada:paprobada,
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
            longitud: plongitud,
            latitud: platitud,
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

let aceptar_institucion = (pid) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/actualizar_perfil_padre",
        method: "POST",
        data: {
          aprobada : true,
           id: pid
             },

        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
    });

    request.done(function (res) {

        swal.fire({
            type: 'success',
            title: 'Institucion activada correctamente',
            text: res.msg,
            onClose: () => {
              window.location.href = 'listas.html';
            }
        });

    });
};

let habilitar_usuario = (pid) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/actualizar_perfil_padre",
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
            title: 'Institucion activada correctamente',
            text: res.msg,
            onClose: () => {
              window.location.href = 'listas.html';
            }
        });

    });
};

let deshabilitar_usuario = (pid) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/actualizar_perfil_padre",
        method: "POST",
        data: {
          estado : "Desactivado",
           id: pid
             },

        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
    });

    request.done(function (res) {

        swal.fire({
            type: 'success',
            title: 'usuario deshabilitado correctamente',
            text: res.msg,
            onClose: () => {
              window.location.href = 'listas.html';
            }
        });

    });
};

function eliminar_institucion(pid){
    $.ajax({
        url: 'http://localhost:4000/api/borrar_institucion',
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
