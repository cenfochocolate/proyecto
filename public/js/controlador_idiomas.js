'use strict'

const input_idioma = document.querySelector('#txt_idioma');
const sltcodigo = document.querySelector('#sltcodigo');
const imgbandera = document.querySelector('#imagen_preview');
const boton_registrar = document.querySelector('#btn_registrar');
//validaciones
let validar = () => {
  let error=false;

    if (input_idioma.value == '') {
         error=true;
         input_idioma.classList.add('error_input');
    } else {
      input_idioma.classList.remove('error_input');
    }
    if (sltcodigo.value == '') {
        error=true;
        sltcodigo.classList.add('error_input');
    }else{
       sltcodigo.classList.remove('error_input');
    }
    if (imgbandera.value == '') {
        error=true;
        imgbandera.classList.add('error_input');
    } else {
        imgbandera.classList.remove('error_input');
    }
    return error;
};

//mostrar datos
let mostrar_datos=()=>{
 obtenerDatos();
};

boton_registrar.addEventListener('click',mostrar_datos)

function obtenerDatos(){
    let idioma=input_idioma.value;
    let codigo_iso=sltcodigo.value;
    let imagen=imgbandera.src;

    if (validar() == false) {
        registra_idiomas(idioma,codigo_iso,imagen)
        swal.fire({
            type: 'success',
            title: 'El registro se correctamente',
            text: `El registro se hiso correctamente `
        });
    }else {
        swal.fire({
            type: 'warning',
            title: 'No se completo el registro',
            text: 'Por favor revise los campos resaltados'
        });
    }
}