'use strict';
let registrar_evaluacion = (pnombre, pcalificacion) =>{
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_evaluacion",
        method: "POST",
        data: {
           nombre: pnombre,
           calificacion: pcalificacion
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });
    request.done(function (msg) {

        swal.fire({ 
            type: 'success',
            title: 'Su registro se envio correctamente ' + res.msg,
            text: `El nombre deseado en la institucion es ${pnombre} con la calificacion de ${pcalificacion}`
        });

        console.log('guardo bien');  
        // no retorma mensaje
    });

    request.fail(function (jqXHR, textStatus) {

        swal.fire({
            type: 'error',
            title: 'Proceso no realizado',
            text: res.msg
        });

        console.log(textStatus);  
    });
};

let listar_evaluacion = () => {
    let lista_evaluacion = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/listar_evaluacion",
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        lista_evaluacion = res.evaluacion;

    });

    request.fail(function (jqXHR, textStatus) {

    });

    return lista_evaluacion;
};

let buscar_criterio = (id_criterio) => {
    
    let evaluacion  = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_criterio/"+id_criterio,
        method: "GET",
        data: {
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
    });

    request.done(function (res) {
        evaluacion = res.evaluacion;
       
    });
    request.fail(function (jqXHR, textStatus) {

    });
    return evaluacion;
};

let actualizar_criterio = (pnombre, pcalificacion, pid) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/actualizar_criterio",
        method: "POST",
        data: {
    
            nombre: pnombre,
            calificacion: pcalificacion,
            id: pid
             },
             
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json", 
        async: false
    });
    

    request.done(function (res) {
      
        swal.fire({
            type: 'success',
            title: 'Evaluacion actualizada correctamente',
            text:res.msg,
            onClose: () =>{
                window.location.href ='listar_criterio.html';
            }
        });

    });

    request.fail(function (res) {
        swal.fire({
            type: 'error',
            title: 'Evalucion no actualizada',
            text: res.msg
           
        });
    });
};
