'use stric'


let registrar_materiales=(pid,pnombre_de_la_institucion,pdescripcion)=>{
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_materiales",
        method: "POST",
        data: {
          id:pid,
        nombre_de_la_institucion:pnombre_de_la_institucion,
         descripcion:pdescripcion

         },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
        });

        request.done(function( msg ) {


        });

        request.fail(function( jqXHR, textStatus ) {

        });
};

let listar_materiales = () => {
    let lista_material=[];
    let request = $.ajax({
        url: "http://localhost:4000/api/listar_material",
        method: "GET",
        data: {

         },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async:false
        });

        request.done(function(res) {
         lista_material=res.material;

        });

        request.fail(function( jqXHR, textStatus ) {

        });
        return lista_material;
  };
