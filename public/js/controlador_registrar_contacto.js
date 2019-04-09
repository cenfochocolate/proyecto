'use strict';

const input_nombre = document.querySelector('#txt_nombre');
const input_id = document.querySelector('#number_id');
const input_departamento = document.querySelector('#txt_departamento');
const input_telefono = document.querySelector('#number_telefono');
const input_correo = document.querySelector('#email_correo');
const input_extension = document.querySelector('#number_extension');
const boton_guardar = document.querySelector('#btn_guardar');
const img_contacto = document.querySelector('#previewimg');
const id_ins = sessionStorage.getItem('idu');




let validar = () => {

    let error = false;
    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error_input');
    } else {
        input_nombre.classList.remove('error_input');
    }
    if (input_id.value == '') {
        error = true;
        input_id.classList.add('error_input');
    } else {
        input_id.classList.remove('error_input');
    }
    if (input_departamento.value == '') {
        error = true;
        input_departamento.classList.add('error_input');
    } else {
        input_departamento.classList.remove('error_input');
    }

    if (input_telefono.value == '') {
        error = true;
        input_telefono.classList.add('error_input');
    } else {
        input_telefono.classList.remove('error_input');
    }

    if (input_correo.value == '') {
        error = true;
        input_correo.classList.add('error_input');
    } else {
        input_correo.classList.remove('error_input');
    }

    if (input_extension.value == '') {
        error = true;
        input_extension.classList.add('error_input');
    } else {
        input_extension.classList.remove('error_input');
    }


    return error;
};

let obtener_datos = () => {

    if (validar() == false) {
        // Se ejecuta solo si la validación no da error
        let id_institucion = id_ins;
        let nombre = input_nombre.value;
        let id  = input_id.value;
        let departamento  = input_departamento.value;
        let telefono = input_telefono.value;
        let correo = input_correo.value;
        let extension = input_extension.value;
        let imagen = img_contacto.src;



        registrar_contacto(id_institucion,nombre, id, departamento, telefono, correo, extension, imagen);

    } else {
        swal.fire({
            type: 'warning',
            title: 'El contacto no fue registrado',
            text: 'Por favor revise los campos resaltados'
        });
    }

};




boton_guardar.addEventListener('click', obtener_datos);
