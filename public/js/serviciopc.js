'use strict';

let registrar_paginacomercial = (pid_institucion,ppagina_comercial) =>{
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_pcomercial",
    method: "POST",
    data: {
      id_institucion: pid_institucion,
      pcomercial : ppagina_comercial
     },
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json"
    });

    request.done(function( msg ) {

      swal.fire({
        type: 'success',
        title: 'La página se registro correctamente',
        text: `La página comercial de su institución fue registrada, su dirección es: ${ppagina_comercial}`
      });
    });

    request.fail(function( jqXHR, textStatus ) {

    });
};
let listar_pcomercial = () => {
  let lista_pcomercial = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/listar_pcomercial",
    method: "GET",
    data: {
     },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async: false
    });
    request.done(function(res) {
      lista_pcomercial = res.pcomercial;

    });
    request.fail(function( jqXHR, textStatus ) {

    });
    return lista_pcomercial;
};
