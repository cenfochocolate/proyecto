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
            window.location = "inicio.html";


          }else{
            if(msg.tipo == "padre"){
              if(msg.contrasenna == pcontrasenia){
                swal.fire({
                    type: 'error',
                    title: 'cuenta baneada',
                    text: 'Su cuenta fue baneada'

              })
            }else{
              swal.fire({
                  type: 'error',
                  title: 'contraseña incorrecta',
                  text: 'Revise su contraseña'

            })
            }

          }else{
            if(msg.tipo == "institucion"){
            swal.fire({
                type: 'error',
                title: 'cuenta no aceptada',
                text: 'Su cuenta no ha sido aceptada'

          })
          }
        }

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
