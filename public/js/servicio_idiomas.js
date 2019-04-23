'use strict';
let registra_idiomas=(pidioma,pcodigo_iso,pimagen)=>{
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_idiomas",
        method: "POST",
        data: {
            idioma:pidioma,
            codigo_iso:pcodigo_iso,
            imagen: pimagen,
            
         },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
        });
    
        request.done(function( msg ) {
          
        });
    
        request.fail(function( jqXHR, textStatus ) {
                console.log("Request fail error" + textStatus)
        });
};
let listar_idiomas = () => {
    let listar_idiomas=[];
    let request = $.ajax({
        url: "http://localhost:4000/api/listar_idiomas",
        method: "GET",
        data: {
    
         },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async:false
        });
    
        request.done(function(res) {
            listar_idiomas= res.idiomas;
          
        });
    
        request.fail(function( jqXHR, textStatus ) {

        });
        return listar_idiomas;
}

let buscar_idioma = (id_idioma) => {
        let idioma = [];
      
        let request = $.ajax({
          url: "http://localhost:4000/api/buscar_idioma/"+ id_idioma,
          method: "GET",
          data: {
          },
          dataType: "json",
          contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
          async : false
        });
      
        request.done(function (res) {
            idioma = res.idioma;
          
        });
      
        request.fail(function (jqXHR, textStatus) {
          
        });
        return idioma;
       
      };