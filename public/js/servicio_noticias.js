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

let buscar_noticia = (id_noticia) => {
  let noticia = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/buscar_noticia/"+ id_noticia,
    method: "GET",
    data: {
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
  });

  request.done(function (res) {
      noticia = res.noticia;
    
  });

  request.fail(function (jqXHR, textStatus) {
    
  });
  return noticia;
 
}; 

let  actualizar_noticia = (pnombre, pdescripcion, pnoticia, pid) =>{
  let request = $.ajax({
      url : 'http://localhost:4000/api/actualizar_noticia',
      method : "POST",
      data : {
          nombre : pnombre,
          descripcion : pdescripcion,
          noticia : pnoticia,
          id : pid
      },
      dataType : "json",
      contentType : 'application/x-www-form-urlencoded; charset=UTF-8' 
  });

  request.done(function(res){
      
     
      swal.fire({
          type : 'success',
          title : 'noticia actualizada con éxito',
          text : res.msg,
          onClose: () => {
              window.location.href = 'listar_noticias.html';
            }    
      });

  });

  request.fail(function(res){
      swal.fire({
          type : 'error',
          title : 'Proceso no realizado',
          text : res.msg
      });

  });

};

function borrar_noticia(pid){
  $.ajax({
      url: 'http://localhost:4000/api/borrar_noticia',
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