'use strict';

const input_correo = document.querySelector('#txt_correo');
const input_clave = document.querySelector('#txt_clave');
const btn_inicia_sesion = document.querySelector('#btn_enviar');

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};


function obtenerDatos() {
    let correo = input_correo.value;
    let clave = input_clave.value;

    //si retorna true todos los datos rstan bien
    if (validarDatos()) {
        console.log("Entre");
        validar_inicio_sesion(correo, clave);
    }
};


function validarDatos() {

    let retorno = true;

    if ((validateEmail(input_correo.value)) && (input_correo.value != '')) {

        document.getElementById('div_correo').style.borderColor = "#c9c9c9";
        retorno = true;

    } else {

        retorno = false;
        document.getElementById('div_correo').style.borderColor = "red";
    }
    if (input_clave.value != '') {
        retorno = true;
        document.getElementById('div_clave').style.borderColor = "#c9c9c9";
    } else {

        retorno = false;
        document.getElementById('div_clave').style.borderColor = "red";

    }

    return retorno;
};


btn_inicia_sesion.addEventListener('click', obtenerDatos);
