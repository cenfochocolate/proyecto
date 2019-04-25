'use strict';

let listar_citas = () => {
    let lista_cita = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/listar_cita",
        method: "GET",
        data: {
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
    });

    request.done(function (res) {
    lista_cita= res.cita;

    });
    request.fail(function (jqXHR, textStatus) {

    });
    return lista_cita;
};
let buscar_cita = (id_cita) => {
    
    let cita = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_cita/"+id_cita,
        method: "GET",
        data: {
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
    });

    request.done(function (res) {
   cita= res.cita;
       
    });
    request.fail(function (jqXHR, textStatus) {

    });
    return cita;
};

let actualizar_cita = (pnombre, ptime, pdate, pid) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/actualizar_cita",
        method: "POST",
        data: {
            nombre: pnombre,
           date: pdate,
           time: ptime,
           id: pid
             },
             
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });
    

    request.done(function (res) {
      
        swal.fire({
            type: 'success',
            title: 'Cita actualizada correctamente',
            text:res.msg
           
        });

    });

    request.fail(function (res) {
        swal.fire({
            type: 'error',
            title: 'Cita no actualizada',
            text: res.msg
           
        });
    });
};

function borrar_cita(pid){
    $.ajax({
        url: 'http://localhost:4000/api/borrar_cita',
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

let registrar_citas = (pid_institucion,pnombre, ptime, pdate) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_cita",
        method: "POST",
        data: {
          id_institucion: pid_institucion,
          nombre: pnombre,
          date: pdate,
          time: ptime


        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });


    request.done(function (msg) {

        swal.fire({
            type: 'success',
            title: 'Cita registrada correctamente'

        });

    });

    request.fail(function (jqXHR, textStatus) {

    });



};
let deshabilitar_cita = (pid) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/actualizar_cita",
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
            title: 'Cita deshabiitada correctamente',
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
  
  let habilitar_cita = (pid) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/actualizar_cita",
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
