'use strict';

const input_nombre_de_la_institucion =document.querySelector('#txt_nombre_de_la_institucion');
const input_descripcion = document.querySelector('#txt_descripcion');
const boton_enviar = document.querySelector('#btn_registrar');
let validar=()=>{
    let error=false;

    if (input_nombre_de_la_institucion.value == '') {
        error = true;
        input_nombre_de_la_institucion.classList.add('error_input');
    } else {
        input_nombre_de_la_institucion.classList.remove('error_input');
    }
    if (input_descripcion.value == '') {
        error = true;
        input_descripcion.classList.add('error_input');
    } else {
        input_descripcion.classList.remove('error_input');
    }

    return error;
};

let mostrar_datos=()=>{
    if (validar()==false) {
        let nombre_de_la_institucion = input_nombre_de_la_institucion.value;
        let descripcion = input_descripcion.value;


    obtenerDatos();

    swal.fire({
        type: 'success',
        title: 'Material informativo registrado',
        text: `El  registro se hizo correctamente`
    });
  }else{
    swal.fire({
        type: 'warning',
        title: 'No se completo el registro',
        text: 'Por favor revise los campos resaltados'
    });
  }
};
boton_enviar.addEventListener('click', mostrar_datos);
function obtenerDatos(){
    let nombre_de_la_institucion = input_nombre_de_la_institucion.value;
    let descripcion=input_descripcion.value;

    registrar_materiales(nombre_de_la_institucion,descripcion)
}
