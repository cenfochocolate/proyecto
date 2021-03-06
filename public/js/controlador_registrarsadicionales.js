'use strict'
const input_nombre = document.querySelector('#txt_nombre');
const input_descripcion = document.querySelector('#txt_descripcion');
const img_sadicional = document.querySelector('#previewimg');
const id_ins = sessionStorage.getItem('idu');

let validar = () => {
    let error = false;

    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error_input');
    } else {
        input_nombre.classList.remove('error_input');
    }
    if (input_descripcion.value == '') {
        error = true;
        input_descripcion.classList.add('error_input');
    } else {
        input_descripcion.classList.remove('error_input');
    }
return error;
};

let obtener_datos = () => {

    if (validar() == false) {
        let id_institucion = id_ins;
        let nombre = input_nombre.value;
        let descripcion = input_descripcion.value;
        let imagen = img_sadicional.src;
        registrar_sadicional(id_institucion,nombre,descripcion,imagen);


    } else {
        swal.fire({
            type: 'warning',
            title: 'El servicio adicional no fue registrado',
            text: 'Por favor revise los campos resaltados'
        });
    }

};
btn_guardar.addEventListener('click', obtener_datos);
