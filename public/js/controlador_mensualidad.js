
'use strict';

const inputgrado = document.querySelector('#txt_grado');
const inputinstitucion = document.querySelector('#txt_institucion');
const inputdescripcion = document.querySelector('#txt_info');
const botonRegistrar = document.querySelector('#btn_registrar');

let validar = () => {
  let error = false;

  if (inputgrado.value == '') {
    error = true;
    inputgrado.classList.add('error_input');
  } else {
    inputgrado.classList.remove('error_input');
  }
  if (inputinstitucion.value == '') {
    error = true;
    inputinstitucion.classList.add('error_input');
  } else {
    inputinstitucion.classList.remove('error_input');
  }
  if (inputdescripcion.value == '') {
    error = true;
    inputdescripcion.classList.add('error_input');
  } else {
    inputdescripcion.classList.remove('error_input');
  }
  return error;
};

function obtener_datos() {
  if (validar() == false) {
    let grado = inputgrado.selectedOptions[0].textContent;
    let institucion = inputinstitucion.value;
    let descripcion = inputdescripcion.value;


    registrar_mensualidad(grado,institucion, descripcion);

    console.log('El grado de la institucion es ' + grado + 'la institucion registrada es ' + institucion + ' contiene la descripcion de ' + descripcion);
  } else {
    swal.fire({
      type: 'warning',
      title: 'El comentario no fue enviado',
      text: 'Por favor revise los campos resaltados'
    });
  }
};

botonRegistrar.addEventListener('click', obtener_datos);
