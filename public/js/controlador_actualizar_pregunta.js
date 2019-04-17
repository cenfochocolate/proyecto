'use strict';



const input_preguntas = document.querySelector('#txt_pregunta');
const input_respuestas = document.querySelector('#txt_respuesta');
const boton_actualizar = document.querySelector('#btn_actualizar');
const id_ins = sessionStorage.getItem('idu');

let get_param = (param)=> {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let id= url.searchParams.get(param);

    return id;
};

let _id= get_param('id_pregunta');

let preguntas= buscar_pregunta(_id);

let mostrar_datos = () =>{


    input_preguntas.value = preguntas[0]['preguntas'];
    input_respuestas.value = preguntas[0]['respuestas'];
    
    
    

    } 


if(preguntas){
    mostrar_datos()
}



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



        actualizar_pregunta(id_institucion,preguntas,respuestas, _id);

    } else {
        swal.fire({
            type: 'warning',
            title: 'La pregunta no fue actualizada',
            text: 'Por favor revise los campos resaltados'
        });
    }

};




boton_actualizar.addEventListener('click', obtener_datos);
