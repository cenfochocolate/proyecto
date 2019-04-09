let registrar_noticia = (pid,pnombre,pdescripcion,pimagen) =>{
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_noticia",
    method: "POST",
    data: {
      id:pid,
      nombre:pnombre,
      descripcion:pdescripcion,
      imagen:pimagen

     },
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json"
    });

    request.done(function( msg ) {

      swal.fire({
        type: 'success',
        title: 'La noticia se registro correctamente',
        text: `La noticia fue registrada bajo el nombre de ${pnombre} , su descripción es: ${pdescripcion}`
      });
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
