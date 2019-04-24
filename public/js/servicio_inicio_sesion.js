'use strict';

let validar_inicio_sesion = (pcorreo, pcontrasenia) => {

    try {


        let respuesta = '';

        let peticion = $.ajax({
            url: "http://localhost:4000/api/validar_credenciales",
            method: "post",
            dataType: "json",
            data: {
                ajaxid: 4,
                correo: pcorreo,
                contrasenna: pcontrasenia
            },
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            dataType: 'json',
            async: false

        });

        peticion.done(function (msg) {



            if (msg.success) {


            sessionStorage.setItem('conectado', msg.success);
            sessionStorage.setItem('tipo_usuario', msg.tipo);
            sessionStorage.setItem('idu', msg._id);
            sessionStorage.setItem('distritol', msg.distrito)
            window.location = "inicio.html";


          }else{
            swal.fire({
              type: 'error',
              title: '¡Algo salio mal!',
              text: 'Revise sus datos o pongase en contacto con el admin'
             
          });

          }
        });

        peticion.fail(function (jqXHR, textStatus) {
            console.log(textStatus);
        });
        return respuesta;

    } catch (e) {
        console.log(e);
    }

};
