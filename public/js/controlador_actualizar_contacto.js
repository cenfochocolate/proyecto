'use strict';

const input_nombre = document.querySelector('#txt_nombre');
const input_departamento = document.querySelector('#txt_departamento');
const input_telefono = document.querySelector('#number_telefono');
const input_correo = document.querySelector('#email_correo');
const input_extension = document.querySelector('#number_extension');
const boton_actualizar = document.querySelector('#btn_actualizar');
const img_contacto = document.querySelector('#previewimg');
const id_ins = sessionStorage.getItem('idu');

let get_param = (param)=> {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let id= url.searchParams.get(param);

    return id;
};

let _id= get_param('id_contacto');

let contacto= buscar_contacto(_id);

let mostrar_datos = () =>{


    input_nombre.value = contacto[0]['nombre'];
    input_departamento.value = contacto[0]['departamento'];
    input_telefono.value = contacto[0]['telefono'];
    input_correo.value = contacto[0]['correo'];
    input_extension.value = contacto[0]['extension'];

    // ID de la imagen
    let idIMG = contacto[0]['imagen'].split('upload/')[1];
    img_contacto.src = 'http://res.cloudinary.com/cenfochocolate/image/upload/' + idIMG;




    }


if(contacto){
    mostrar_datos()
}



let validar = () => {

    let error = false;
    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error_input');
    } else {
        input_nombre.classList.remove('error_input');
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
        let nombre = input_nombre.value;
        let departamento  = input_departamento.value;
        let telefono = input_telefono.value;
        let correo = input_correo.value;
        let extension = input_extension.value;
        let imagen = img_contacto.src;



        actualizar_contacto(nombre,departamento, telefono, correo, extension, imagen,  _id);
    } else {
        swal.fire({
            type: 'warning',
            title: 'El contacto no fue actualizado',
            text: 'Por favor revise los campos resaltados'
        });
    }

};




boton_actualizar.addEventListener('click', obtener_datos);
