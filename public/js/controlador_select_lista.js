'use strict';
const slt_utiles = document.querySelector('#slt_utiles');
const btn_registrar = document.querySelector('#btn_pref_utiles');
const pref_util = document.querySelector('#lista_seleccionada_utiles');

let validar = () =>{
  let error= false;

  if (slt_utiles.value =="null") {
    error=true;
    slt_utiles.classList.add('error_input');
  } else {
    slt_utiles.classList.remove('error_input');
  }
  return error;
};

let obtener_datos=()=>{
  if (validar()==false) {
    let preferencia = slt_utiles.value;
    pref_util.href = preferencia;
    registrar_pref(preferencia);

  } else {
    swal.fire({
      type: 'warning',
      title: 'No se pude realizar el registro',
      text: 'Por favor revise los campos resaltados'
    });
  }
};

btn_registrar.addEventListener('click', obtener_datos);
