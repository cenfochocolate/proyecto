'use strict';

const input_facebook = document.querySelector('#url_facebook');
const input_instagram = document.querySelector('#url_ig');
const input_twitter = document.querySelector('#url_twitter');
const input_email = document.querySelector('#email');
const input_youtube = document.querySelector('#url_yt');
const btn_registrar = document.querySelector('#registrar_rs');
const id_ins = sessionStorage.getItem('idu');

let validar = () => {
  let error = false;

  if (input_facebook.value == '') {
    error = true;
    input_facebook.classList.add('error_input');
  }else {
    input_facebook.classList.remove('error_input');
  }

  if(input_instagram.value == '') {
    error = true;
    input_instagram.classList.add('error_input');
  }else {
    input_instagram.classList.remove('error_input');
  }

  if(input_twitter.value == '') {
    error = true;
    input_twitter.classList.add('error_input');
  }else{
    input_twitter.classList.remove('error_input');
  }

  if(input_email.value == '') {
    error = true;
    input_email.classList.add('error_input');
  }else{
    input_email.classList.remove('error_input');
  }

  if (input_youtube.value == '') {
    error = true;
    input_youtube.classList.add('error_input');
  }else{
    input_youtube.classList.remove('error_input');
  }

  return error;
};

let obtener_datos = () => {

  if (validar() == false) {
    let id_institucion = id_ins;
    let facebook = input_facebook.value;
    let instagram = input_instagram.value;
    let twitter = input_twitter.value;
    let email = input_email.value;
    let youtube = input_youtube.value;

    registrar_rs(id_institucion,facebook, instagram, twitter, email, youtube);
  }else{
    swal.fire({
      type: 'warning',
      title: 'No se pudo realizar el registro',
      text: 'Por favor revise los campos resaltados'
    });
  }
};

btn_registrar.addEventListener('click', obtener_datos);
