'use strict';


const inputcedula = document.querySelector('#txt_cedula');
const inputidioma = document.querySelector('#txt_idioma');
const inputduracion = document.querySelector('#txt_duracion');
const fieldset_titulo = document.querySelector('#fieldset_titulo');
const botonRegistrar = document.querySelector('#btn_registrar');

let validar = () => {
    let error = false;
    let titulo_seleccionado = document.querySelector('#fieldset_titulo input[type=radio]:checked');

    if (inputcedula.value == '') {
        error = true;
        inputcedula.classList.add('error_input');
    } else {
        inputcedula.classList.remove('error_input');
    }

    if (inputidioma.value == '') {
        error = true;
        inputidioma.classList.add('error_input');
    } else {
        inputidioma.classList.remove('error_input');
    }

    if (inputduracion.value == '') {
        error = true;
        inputduracion.classList.add('error_input');
    } else {
        inputduracion.classList.remove('error_input');
    }

    if (titulo_seleccionado == null) {
        error = true;
        fieldset_titulo.classList.add('error_input');
    } else {
        fieldset_titulo.classList.remove('error_input');
    }

    return error;
};


let obtener_datos = () => {

    if (validar() == false) {
        let cedula = Number(inputcedula.value);
        let idioma = inputidioma.value;
        let duracion = inputduracion.value;
        let titulo = document.querySelector('#fieldset_titulo input[type=radio]:checked').value;

        registrar_idioma(cedula, idioma, duracion, titulo);

        console.log('Su cedula es ' + cedula + 'El idioma es ' + idioma + 'La duracion es ' + duracion);
        

    } else {
        swal.fire({
            type: 'warning',
            title: 'El comentario no fue enviado',
            text: 'Por favor revise los campos resaltados'
        });
    }

};


botonRegistrar.addEventListener('click', obtener_datos);