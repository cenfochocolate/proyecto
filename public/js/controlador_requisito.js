'use strict';

const inputnivel = document.querySelector('#txt_nivel');
const inputdescripcion = document.querySelector('#txt_info');
const botonRegistrar = document.querySelector('#btn_registrar');

let validar = () => {
    let error = false;
    
    if (inputnivel.value == ''){
        error = true;
        inputnivel.classList.add('error_input');
    }else{
        inputnivel.classList.remove('error_input');
    }

    if (inputdescripcion.value == ''){
        error = true;
        inputdescripcion.classList.add('error_input');
    }else{
        inputdescripcion.classList.remove('error_input');
    }
    return error;
};

let obtener_datos = () => {

    if (validar()== false){

    let nivel = inputnivel.value;
    let descripcion = inputdescripcion.value;

    registar_requisito(nivel, descripcion);
     
     console.log('El nivel de la institucion es' + nivel + 'la descripcion es' + descripcion );
     
    } else {
        swal.fire({
            type: 'warning',
            title: 'El comentario no fue enviado',
            text: 'Por favor revise los campos resaltados'
        });
    }
};

botonRegistrar.addEventListener('click', obtener_datos);