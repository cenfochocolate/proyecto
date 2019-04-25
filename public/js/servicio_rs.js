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
        text: `Se han registrado las siguientes direcciones de corro ${pfacebook} ${pinstagram} ${ptwitter} ${pemail} ${pyoutube}`,
        onClose: () => {
                  window.location.href = 'perfil_institucion.html';
                }
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

let actualizar_rs = (id_rs,pfacebook, pinstagram, ptwitter, pemail, pyoutube) => {
  let request = $.ajax({
      url: "http://localhost:4000/api/actualizar_rs",
      method: "POST",
      data: {
        id_rs:id_rs,
        facebook : pfacebook,
        instagram: pinstagram,
        twitter : ptwitter,
        email : pemail,
        youtube : pyoutube
           },

      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      dataType: "json"
  });


  request.done(function (res) {

      swal.fire({
          type: 'success',
          title: 'Red social actualizada correctamente',
          text:res.msg,
          onClose: () => {
                    window.location.href = 'perfil_institucion.html';
                  }

      });

  });

  request.fail(function (res) {
      swal.fire({
          type: 'error',
          title: 'Red social no actualizada',
          text: res.msg

      });
  });
};

function buscar_rs(id_rs){
  let rs=[];
  let request=$.ajax({
    url:"http://localhost:4000/api/buscar_rs/"+id_rs,
    method: "GET",
    data:{
    },
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json",
    async: false
  });
  request.done(function (msg){
    rs=msg.rs;
  })
  return rs;
};
