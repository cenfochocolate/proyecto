'use strict';

let registrar_rs = (pid_institucion,pfacebook, pinstagram, ptwitter, pemail, pyoutube) =>{
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_redes_sociales",
    method: "POST",
    data: {
      id_institucion:pid_institucion,
      facebook : pfacebook,
      instagram: pinstagram,
      twitter : ptwitter,
      email : pemail,
      youtube : pyoutube
     },
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json"
    });

    request.done(function( msg ) {
      console.log(msg);
      swal.fire({
        type: 'success',
        title: 'Registro realizado satisfactoriamente',
        text: `Se han registrado las siguientes direcciones de corro ${pfacebook} ${pinstagram} ${ptwitter} ${pemail} ${pyoutube}`
      });
    });

    request.fail(function( jqXHR, textStatus ) {

    });
};

let listar_rs = () => {
  let lista_rs = [];

  let request = $.ajax({
    url: "http://localhost:4000/api//listar_rs",
    method: 'GET',
    data: {},
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async: false
  });
  request.done(function(res){
    lista_rs = res.rs;
  });
  request.fail(function( jqXHR, textStatus ){

  });
  return lista_rs;
};
