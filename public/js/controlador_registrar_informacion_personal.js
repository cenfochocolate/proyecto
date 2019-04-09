'use strict';

const img_informacion_personal = document.querySelector('#previewimg');
const input_nombres = document.querySelector('#txt_nombres');
const input_apellidos = document.querySelector('#txt_apellidos');
const input_fecha_nacimiento = document.querySelector('#txt_fecha_nacimiento');
const input_id = document.querySelector('#number_id');
const input_cantidad_hijos = document.querySelector('#number_cantidad_hijos');
const input_direccion = document.querySelector('#txt_direccion');
const boton_registrar = document.querySelector('#btn_registrar');



    


let validar = () => {
    
    let error = false;
    if (input_nombres.value == '') {
        error = true;
        input_nombres.classList.add('error_input');
    } else {
        input_nombres.classList.remove('error_input');
    }
    if (input_apellidos.value == '') {
        error = true;
        input_apellidos.classList.add('error_input');
    } else {
        input_apellidos.classList.remove('error_input');
    }

    if(input_fecha_nacimiento <= new Date() || input_fecha_nacimiento=="Invalid Date"){
        error = true;
        input_fecha_nacimiento.classList.add('error_input');

    }else {
        input_fecha_nacimiento.classList.remove('error_input');
    }

    if (input_id.value == '') {
        error = true;
        input_id.classList.add('error_input');
    } else {
        input_id.classList.remove('error_input');
    }

    if (input_cantidad_hijos.value == '') {
        error = true;
        input_cantidad_hijos.classList.add('error_input');
    } else {
        input_cantidad_hijos.classList.remove('error_input');
    }

    if (input_direccion.value == '') {
        error = true;
        input_direccion.classList.add('error_input');
    } else {
        input_direccion.classList.remove('error_input');
    }

    

    return error;
};

let obtener_datos = () => {

    if (validar() == false) {
        // Se ejecuta solo si la validación no da error
        let imagen = img_informacion_personal.src;
        let nombres = input_nombres.value;
        let apellidos = input_apellidos.value;
        let fecha_nacimiento  = input_fecha_nacimiento.value;
        let id = input_id.value;
        let cantidad_hijos = input_cantidad_hijos.value;
        let direccion = input_direccion.value;
        
        



        registrar_informacion_personal(imagen, nombres, apellidos, fecha_nacimiento, id, cantidad_hijos, direccion);

    } else {
        swal.fire({
            type: 'warning',
            title: 'La informacion no fué registrada',
            text: 'Por favor revise los campos resaltados'
        });
    }

};


 

boton_registrar.addEventListener('click', obtener_datos);
