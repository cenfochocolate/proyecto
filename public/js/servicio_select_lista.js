'use strict';
let registrar_pref=(pid, pslt_utiles)=>{
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_pref_lista_utiles",
    method: "POST",
    data: {
      id: pid,
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
