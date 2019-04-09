'use strict';

const input_preguntas = document.querySelector('#txt_pregunta');
const input_respuestas = document.querySelector('#txt_respuesta');
const boton_insertar = document.querySelector('#btn_insertar');
const id_ins = sessionStorage.getItem('idu');

let validar = () => {
    let error = false;
    if (input_preguntas.value == '') {
        error = true;
        input_preguntas.classList.add('error_input');
    } else {
        input_preguntas.classList.remove('error_input');
    }
    if (input_respuestas.value == '') {
        error = true;
        input_respuestas.classList.add('error_input');
    } else {
        input_respuestas.classList.remove('error_input');
    }


    return error;
};
let obtener_datos = () => {

    if (validar() == false) {
        // Se ejecuta solo si la validación no da error
        let id_institucion = id_ins;
        let preguntas = input_preguntas.value;
        let respuestas = input_respuestas.value;



        registrar_preguntas(id_institucion,preguntas,respuestas);

    } else {
        swal.fire({
            type: 'warning',
            title: 'La pregunta no fue enviada',
            text: 'Por favor revise los campos resaltados'
        });
    }

};




boton_insertar.addEventListener('click', obtener_datos);
