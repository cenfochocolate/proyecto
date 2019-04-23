'use strict'
function buscar_padre(id_perfil){
  let usuario=[];
  let request=$.ajax({
    url:"http://localhost:4000/api/buscar_por_id/"+id_perfil,
    method: "GET",
    data:{
    },
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json",
    async: false
  });
  request.done(function (msg){
    usuario=msg.usuarios;
  })
  return usuario;
};

let actualizar_perfil_padre = (pid,purl_foto,pnombre, pprimer_apellido,psegundo_apellido,pcantidad_de_hijos,pprovincia,pcanton,pdistrito,pdireccion,pcontrasenna,ptelefono)=>{
  let request = $.ajax({
    url: "http://localhost:4000/api/actualizar_perfil_padre",
    method: "POST",
    data: {
      id : pid,
      url_foto:purl_foto,
      nombre:pnombre,
      primer_apellido:pprimer_apellido,
      segundo_apellido:psegundo_apellido,
      cantidad_de_hijos:pcantidad_de_hijos,
      provincia:pprovincia,
      canton:pcanton,
      distrito:pdistrito,
      direccion:pdireccion,
      contrasenna:pcontrasenna,
      telefono:ptelefono
    },
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json"
  });

  request.done(function(res){
    swal.fire({
      type: 'success',
      title: 'Perfil actualizado correctamente',
      text:res.msg,
      onClose: () => {
                window.location.href = 'perfil_padre.html';
              }
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
