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
        text: `El servicio adicional fue registrado`
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

let buscar_servicio = (id_servicio) => {
  let servicio = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/buscar_servicio/"+ id_servicio,
    method: "GET",
    data: {
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
  });

  request.done(function (res) {
    servicio = res.servicio;
    
  });

  request.fail(function (jqXHR, textStatus) {
    
  });
  return servicio;
 
};
let actualizar_servicio = (pnombre, pdescripcion,pimagen, pid) =>{
    let request = $.ajax({
        url : 'http://localhost:4000/api/actualizar_servicio',
        method : "POST",
        data : {
            nombre : pnombre,
            descripcion : pdescripcion,
            imagen : pimagen,
            
            id : pid
        },
        dataType : "json",
        contentType : 'application/x-www-form-urlencoded; charset=UTF-8' 
    });

    request.done(function(res){
        
       
        swal.fire({
            type : 'success',
            title : 'Servicio actualizado con éxito',
            text : res.msg,
            onClose: () => {
                window.location.href = 'listar_servicios_adicionales.html';
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

function borrar_servicio(pid){
  $.ajax({
      url: 'http://localhost:4000/api/borrar_servicio',
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

let deshabilitar_servicio = (pid) => {
  let request = $.ajax({
      url: "http://localhost:4000/api/actualizar_servicio",
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
          title: 'Servicio deshabiitado correctamente',
          text: res.msg,
          onClose: () => {
            window.location.href = 'listar_citas.html';
          }    
      });

  });

  request.fail(function (res) {
      swal.fire({
          type: 'error',
          title: 'Cita no deshabilitada',
          text: res.msg
         
      });
  });
};

let habilitar_servicio = (pid) => {
  let request = $.ajax({
      url: "http://localhost:4000/api/actualizar_servicio",
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
          title: 'Cita activada correctamente',
          text: res.msg,
          onClose: () => {
            window.location.href = 'listar_citas.html';
          }    
      });

  });

  request.fail(function (res) { 
      swal.fire({
          type: 'error',
          title: 'Cita activada',
          text: res.msg
         
      });
  });
};
