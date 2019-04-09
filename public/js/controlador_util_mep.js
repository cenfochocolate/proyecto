'use strict';

const input_util = document.querySelector('#txt_util');
const textarea_descripcion = document.querySelector('#txt_descripcion');
const input_numero = document.querySelector('#numero_util');
const select_nivel = document.querySelector('#select_nivel');
const boton_enviar = document.querySelector('#btn_registrar_util');

let validar = () => {
    let error = false;

    if (input_util.value == '') {
        error = true;
        input_util.classList.add('error_input');
    } else {
        input_util.classList.remove('error_input');
    }

    if (textarea_descripcion.value == '') {
        error = true;
        textarea_descripcion.classList.add('error_input');
    } else {
        textarea_descripcion.classList.remove('error_input');
    }

    if (input_numero.value == '') {
        error = true;
        input_numero.classList.add('error_input');
    } else {
        input_numero.classList.remove('error_input');
    }
    if (select_nivel.value == 'null') {
        error = true;
        select_nivel.classList.add('error_input');
    } else {
        select_nivel.classList.remove('error_input');
    }

    return error;
};

let obtener_datos = () => {

    if (validar() == false) {
        // Se ejecuta solo si la validación no da error
        let util = input_util.value;
        let descripcion = textarea_descripcion.value;
        let numero = input_numero.value;
        let nivel = select_nivel.value;

        registrar_util(util, descripcion, numero, nivel);

    } else {
        swal.fire({
            type: 'warning',
            title: 'No se pudo realizar el registro',
            text: 'Por favor revise los campos resaltados'
        });
    }

};


boton_enviar.addEventListener('click', obtener_datos);
