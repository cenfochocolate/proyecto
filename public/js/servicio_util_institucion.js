'use strict';

let registrar_util = (pid_institucion, putil, pdescripcion, pnumero, pnivel) =>{
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_util_institucion",
    method: "POST",
    data: {
      id_institucion: pid_institucion,
      util : putil,
      descripcion : pdescripcion,
      cantidad : pnumero,
      nivel : pnivel
     },
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json"
    });

    request.done(function( msg ) {
      console.log(msg);
      swal.fire({
        type: 'success',
        title: 'Registro realizado satisfactoriamente',
        text: `Hola, el útil: ${putil} con la descripción ${pdescripcion} y su cantidad: ${pnumero} para el siguiente nivel: ${pnivel} se ha registrado completamente`
      });
    });

    request.fail(function( jqXHR, textStatus ) {

    });
};

let listar_utiles = () => {
  let lista_utiles = [];
  let request = $.ajax({
    url: "http://localhost:4000/api/listar_utiles",
    method: "GET",
    data: {

     },
     dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
    });

    request.done(function( res ) {
      lista_utiles = res.utiles;
    });

    request.fail(function( jqXHR, textStatus ) {

    });
    return lista_utiles;
};
