'use strict';

let registrar_noticia = (pid_institucion,pnombre,pdescripcion,pimagen) =>{
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_noticia",
    method: "POST",
    data: {
      id_institucion:pid_institucion,
      nombre:pnombre,
      descripcion:pdescripcion,
      imagen:pimagen
    },
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json"
  });

  request.done(function (msg) {

    swal.fire({
        type: 'success',
        title: 'Noticia registrada'

    });

});
    request.fail(function( jqXHR, textStatus ) {

    });

};


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
function borrar_contacto(pid){
  $.ajax({
      url: 'http://localhost:4000/api/borrar_contacto',
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
let registrar_contacto = (pid_institucion, pnombre, pidentificacion, pdepartamento, ptelefono, pcorreo, pextension, pimagen) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_contacto",
        method: "POST",
        data: {
          id_institucion:pid_institucion,
          nombre: pnombre,
          identificacion: pidentificacion,
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
let deshabilitar_contacto = (pid) => {
  let request = $.ajax({
      url: "http://localhost:4000/api/actualizar_contacto",
      method: "POST",
      data: {
        estado : "Desactivo",
         id: pid
           },

      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      dataType: "json",
      async: false
  });

  request.done(function (res) {

      swal.fire({
          type: 'success',
          title: 'Contacto deshabiitado correctamente',
          text: res.msg,
          onClose: () => {
            window.location.href = 'perfil_institucion.html';
          }
      });

  });

  request.fail(function (res) {
      swal.fire({
          type: 'error',
          title: 'Contacto no deshabilitado',
          text: res.msg

      });
  });
};

let habilitar_contacto = (pid) => {
  let request = $.ajax({
      url: "http://localhost:4000/api/actualizar_contacto",
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
          title: 'Contacto activado correctamente',
          text: res.msg,
          onClose: () => {
            window.location.href = 'perfil_institucion.html';
          }
      });

  });

  request.fail(function (res) {
      swal.fire({
          type: 'error',
          title: 'contacto activada',
          text: res.msg

      });
  });
};



let registrar_rs = (pfacebook, pinstagram, ptwitter, pemail, pyoutube) =>{
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_redes_sociales",
    method: "POST",
    data: {
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


let registrar_comentario = (pid_usuario, pid_institucion, pcomentario)=>{
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_comentario",
    method: "POST",
    data: {
      id_usuario:pid_usuario,
      id_institucion:pid_institucion,
      comentario:pcomentario
     },
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json"
  });
  request.done(function(msg){
    swal.fire({
      type: 'success',
      title: 'Comentario registrado satisfactoriamente',
    });
  });
  request.fail(function (jqXHR, textStatus) {
  });
};

let registrar_estrellas = (pid_institucion, pid_user, pcalificacion)=>{
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_valoracion_usuarios",
    method: "POST",
    data: {
      id_institucion:pid_institucion,
      id_usuario:pid_user,
      calificacion:pcalificacion
     },
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json"
  });
  request.done(function(msg){
    swal.fire({
      type: 'success',
      title: 'Puntuacion se ha registrado de manera exitosa',
    });
  });
  request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'warning',
      title: 'No se ha podido registrar la calificación',
    });
  });
};

let listar_datos_users =()=>{
  let lista_valoraciones = [];
  let request = $.ajax({
    url: "http://localhost:4000/api/listar_calificaciones_usuario",
    method: "GET",
    data: {},
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json",
    async: false
  });

  request.done(function(res){
    lista_valoraciones=res.estrellas_contactos;
  });
  request.fail(function (jqXHR, textStatus) {

  });
  return lista_valoraciones;
};

let listar_comentarios = () =>{
  let lista_comentarios =[];

  let request = $.ajax({
    url: "http://localhost:4000/api/listar_comentarios",
    method: "GET",
    data: {},
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json",
    async: false
  });

  request.done(function(res){
    lista_comentarios=res.comentarios;
  });
  request.fail(function (jqXHR, textStatus) {

  });
  return lista_comentarios;
};


let registrar_pref=(pid, pslt_utiles)=>{
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_pref_lista_utiles",
    method: "POST",
    data: {
      utiles : pslt_utiles
     },
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json"
    });

    request.done(function( msg ) {
      console.log(msg);
      swal.fire({
        type: 'success',
        title: 'Registro realizado satisfactoriamente',
        text: `Hola, en su perfil se mostrará la lista de utiles de ${pslt_utiles}`
      });
    });

    request.fail(function( jqXHR, textStatus ) {

    });
}

function buscar_institucion(pid) {

    let lugar = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_institucion",
        method: "POST",
        data: {
            id: pid
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
    });

    request.done(function( msg ) {

      window.location="perfil_institucion.html";
    });

    request.fail(function( jqXHR, textStatus ) {

    });
};
let listar_noticias = () => {
  let lista_noticias = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/listar_noticias",
    method: "GET",
    data: {
     },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async: false
    });
    request.done(function(res) {
      lista_noticias = res.noticias;

    });
    request.fail(function( jqXHR, textStatus ) {

    });
    return lista_noticias;
};

function buscar_institucion(pid) {

    let lugar = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_institucion",
        method: "POST",
        data: {
            id: pid
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
    });

    request.done(function (msg) {
        lugar = msg.institucion;
    })

    return lugar;
};
