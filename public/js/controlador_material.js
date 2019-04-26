'use strict';

const input_nombre_institucion =document.querySelector('#txt_nombre_institucion');
const input_descripcion = document.querySelector('#txt_descripcion');
const boton_enviar = document.querySelector('#btn_registrar');
const id_ins = sessionStorage.getItem('id_lugar');
let validar=()=>{
    let error=false;

    if (input_nombre_institucion.value == '') {
        error = true;
        input_nombre_institucion.classList.add('error_input');
    } else {
        input_nombre_institucion.classList.remove('error_input');
    }
    if (input_descripcion.value == '') {
        error = true;
        input_descripcion.classList.add('error_input');
    } else {
        input_descripcion.classList.remove('error_input');
    }

    return error;
};

let obtener_datos =() => {

    if (validar()==false) {

    let nombre_institucion = input_nombre_institucion.value;
    let descripcion=input_descripcion.value;
    let id_institucion = id_ins;
    registrar_materiales(id_institucion, nombre_institucion,descripcion)

  }else{
    swal.fire({
        type: 'warning',
        title: 'No se completo el registro',
        text: 'Por favor revise los campos resaltados'
    });
  }
};
boton_enviar.addEventListener('click', obtener_datos);

