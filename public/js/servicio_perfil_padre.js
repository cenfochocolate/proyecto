'use strict';

function buscar_padre(pid){
  let lugar=[];
  let request=$.ajax({
    url:"http://localhost:4000/api/buscar_institucion",
    method: "POST",
    data:{
      id: pid
    },
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json",
    async: false
  });
  request.done(function (msg){
    lugar=msg.institucion;
  })
  return lugar;
};

let actualizar_perfil_padre = (pid,imagen,nom, pape, sape,hij,telefono,direcc,contrasenna)=>{
  let request = $.ajax({
    url: "http://localhost:4000/api/actualizar_perfil_padre",
    method: "POST",
    data: {
      id : pid,
      nombre:nom,
      primer_apellido:pape,
      segundo_apellido:sape,
      cantidad_de_hijos: hij,
      direccion:direcc,
      telefono:telefono,
      url_foto:imagen,
      contrasenna:contrasenna
    },
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json"
  });

  request.done(function(res){
    swal.fire({
      type: 'success',
      title: 'Perfil actualizado correctamente',
      text:res.msg
    });
  });
  request.fail(function(res){
    swal.fire({
      type: 'error',
      title: 'Perfil no actualizado',
      text: res.msg
    });
  });
};
