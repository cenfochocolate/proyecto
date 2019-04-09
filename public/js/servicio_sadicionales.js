let registrar_sadicional = (pid_institucion,pnombre,pdescripcion,pimagen) =>{
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_sadicional",
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

    request.done(function( msg ) {

      swal.fire({
        type: 'success',
        title: 'El servicio adicional se registro correctamente',
        text: `El servicio adicional fue registrado bajo el nombre de ${pnombre} , su descripción es: ${pdescripcion}`
      });
    });

    request.fail(function( jqXHR, textStatus ) {

    });
};
let listar_sadicional = () => {
  let lista_sadicional = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/listar_sadicional",
    method: "GET",
    data: {
     },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async: false
    });
    request.done(function(res) {
      lista_sadicional = res.sadicional;

    });
    request.fail(function( jqXHR, textStatus ) {

    });
    return lista_sadicional;
};
