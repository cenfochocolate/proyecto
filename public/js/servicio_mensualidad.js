
'use strict';

let registrar_mensualidad = (pgrado, pinstitucion, pdescripcion) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_mensualidad",
    method: "POST",
    data: {
        grado : pgrado,
        institucion : pinstitucion,
        descripcion : pdescripcion
      },
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      dataType: "json"
  });
  request.done(function (msg) {

      swal.fire({
        type: 'success',
        title: 'Su registro se envio correctamente',
        text: `El grado deseado es ${pgrado}en la cual se tiene la institucion de ${pinstitucion} con la descripcion de ${pdescripcion}`
      });

  });
    request.fail(function (jqXHR, textStatus) {

    });
};

let listar_mensualidad = () => {
    let lista_mensualidad = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/listar_mensualidad",
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        lista_mensualidad = res.mensualidad;

    });

    request.fail(function (jqXHR, textStatus) {

    });

    return lista_mensualidad;
};
let buscar_mensualidad = (id_mensualidad) => {
    
  let mensualidad = [];

  let request = $.ajax({
      url: "http://localhost:4000/api/buscar_mensualidad/"+id_mensualidad,
      method: "GET",
      data: {
      },
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      dataType: "json",
      async: false
  });

  request.done(function (res) {
 mensualidad = res.mensualidad;
     
  });
  request.fail(function (jqXHR, textStatus) {

  });
  return mensualidad;
};

let actualizar_mensualidad = (pgrado, pinstitucion, pdescripcion, pid) => {
  let request = $.ajax({
      url: "http://localhost:4000/api/actualizar_cita",
      method: "POST",
      data: {
        grado : pgrado,
        institucion : pinstitucion,
        descripcion : pdescripcion,
         id: pid
           },
           
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      dataType: "json"
  });

  request.done(function (res) {
    
      swal.fire({
          type: 'success',
          title: 'Mensualidad actualizada correctamente',
          text:res.msg
         
      });

  });

  request.fail(function (res) {
      swal.fire({
          type: 'error',
          title: 'Mensualidad no actualizada',
          text: res.msg
         
      });
  });
};