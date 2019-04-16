'use strict';
let registrar_precio = (pid, pnumero, pformato, pprecio, ppago ) => {

    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_precio",
        method: "POST",
        data: {
            numero : pnumero,
            formato : pformato,
            precio : pprecio,
            pago: ppago

        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function (msg) {

        swal.fire({
            type: 'success',
            title: 'Su registro se envio correctamente',
            text: `La cuenta es ${pnumero} selcciona el tipo de fotmato de ${pformato},la cual tendra un precio de ${pprecio} y su pago ${ppago} sera presencial`
        });

    });

    request.fail(function (jqXHR, textStatus) {

    });
};

let listar_precio = () => {
    let lista_precio = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/listar_precio",
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        lista_precio = res.precio;

    });

    request.fail(function (jqXHR, textStatus) {

    });

    return lista_precio;
};
let actualizar_precio = (pid, pnumero, pformato, pprecio, ppago ) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/actualizar_precio",
        method: "POST",
        data: {
            numero : pnumero,
            formato : pformato,
            precio : pprecio,
            pago: ppago,
           id: pid
             },
             
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });
    

    request.done(function (res) {
      
        swal.fire({
            type: 'success',
            title: 'Matricula actualizada correctamente',
            text:res.msg
           
        });

    });

    request.fail(function (res) {
        swal.fire({
            type: 'error',
            title: 'Matricula no actualizada',
            text: res.msg
           
        });
    });
};
let buscar_precio = (id_precio) => {
    
    let precio = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_precio/"+id_precio,
        method: "GET",
        data: {
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
    });

    request.done(function (res) {
   precio = res.precio;
       
    });
    request.fail(function (jqXHR, textStatus) {

    });
    return precio;
};