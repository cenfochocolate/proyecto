'use strict';

const input_facebook = document.querySelector('#url_facebook');
const input_instagram = document.querySelector('#url_ig');
const input_twitter = document.querySelector('#url_twitter');
const input_email = document.querySelector('#email');
const input_youtube = document.querySelector('#url_yt');
const btn_guardar = document.querySelector('#guardar_rs');
const id_ins = sessionStorage.getItem('idu');

let id_institucion = sessionStorage.getItem('id_lugar');

// let rs= buscar_rs(_id);
let lista_rs = listar_rs();

let mostrar_datos = () =>{

    for(let i = 0; i < lista_rs.length; i++){
      if(lista_rs[i]['id_institucion'].includes(id_institucion)){
        input_facebook.value= lista_rs[i]['facebook'];
        input_instagram.value= lista_rs[i]['instagram'];
        input_twitter.value= lista_rs[i]['twitter'];
        input_email.value= lista_rs[i]['email'];
        input_youtube.value= lista_rs[i]['youtube']; 
      }
    }

    
    } 





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
    let id = id_institucion;
    let facebook = input_facebook.value;
    let instagram = input_instagram.value;
    let twitter = input_twitter.value;
    let email = input_email.value;
    let youtube = input_youtube.value;

    actualizar_rs(id,facebook, instagram, twitter, email, youtube);
  }else{
    swal.fire({
      type: 'warning',
      title: 'No se pudo realizar el registro',
      text: 'Por favor revise los campos resaltados'
    });
  }
};

btn_guardar.addEventListener('click', obtener_datos);


  mostrar_datos();
