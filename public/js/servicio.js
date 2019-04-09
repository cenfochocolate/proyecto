let registrar_padres = (pid, pnombre,pprimer_apellido,psegundo_apellido,pidentificacion,pnacionalidad,pprovincia, pcanton, pdistrito,pcantidad_de_hijos, pcorreo,) =>{
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_padres_familia",
    method: "POST",
    data: {
      id:pid,
      nombre:pnombre,
      primer_apellido:pprimer_apellido,
      segundo_apellido:psegundo_apellido,
      identificacion:pidentificacion,
      nacionalidad:pnacionalidad,
      provincia: pprovincia,
      canton: pcanton,
      distrito: pdistrito,
      cantidad_de_hijos:pcantidad_de_hijos,
      correo:pcorreo
     },
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json"
    });

    request.done(function( msg ) {


    });

    request.fail(function( jqXHR, textStatus ) {

    });
};

/**
 * Esta en
 */
let listar_padres = () => {
  let lista_padre=[];

  let request = $.ajax({
      url: "http://localhost:4000/api/listar_padres_familia",
      method: "GET",
      data: {

       },
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      dataType: "json",
      async:false
      });

      request.done(function(res) {
      lista_padre=res.padres;

      });

      request.fail(function( jqXHR, textStatus ) {

      });


      return lista_padre;
}

function obtener_provincias(){
  let provincias = [];
  let peticion = $.ajax({
      url: 'http://costa-rica-places.herokuapp.com/api/provinces',
      type: 'get',
      contentType: 'application/x-www-form-urlencoded; charset=utf-8',
      dataType : 'json',
      async:false
    });

    peticion.done(function(response){
      provincias = response;
    });

    peticion.fail(function(response){
      provincias = response;
    });

   return provincias;
};

function obtener_cantones(){
  let cantones = [];
  let peticion = $.ajax({
      url: 'http://costa-rica-places.herokuapp.com/api/cantons',
      type: 'get',
      contentType: 'application/x-www-form-urlencoded; charset=utf-8',
      dataType : 'json',
      async:false
    });

    peticion.done(function(response){
      cantones = response;
    });

    peticion.fail(function(response){
      cantones = response;
    });

   return cantones;
};

function obtener_distritos(){
  let distritos = [];
  let peticion = $.ajax({
      url: 'http://costa-rica-places.herokuapp.com/api/districts',
      type: 'get',
      contentType: 'application/x-www-form-urlencoded; charset=utf-8',
      dataType : 'json',
      async:false
    });

    peticion.done(function(response){
      distritos = response;
    });

    peticion.fail(function(response){
      distritos = response;
    });

   return distritos;
};
