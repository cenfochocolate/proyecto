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

    let get_param = (param) => {
        let url_string = window.location.href;
        let url = new URL(url_string);
        let id = url.searchParams.get(param);

        return id;
    };

    let _id = get_param('id_rs');
    console.log(_id)
    let rs = buscar_rs(_id);


    let mostrar_datos=() =>{
      input_facebook.value = rs[0]['facebook'];
      input_instagram.value = rs[0]['instagram']
      input_twitter.value = rs[0]['twitter'];
      input_email.value =rs[0]['email'];
      input_youtube.value = rs[0]['youtube'];
    };


let validar = () => {
  let error = false;

  if (input_facebook.value == '' && input_instagram.value == ''&& input_twitter.value == ''&& input_email.value == ''&& input_youtube.value == '') {
    error = true;
    input_facebook.classList.add('error_input');
    input_instagram.classList.add('error_input');
    input_twitter.classList.add('error_input');
    input_email.classList.add('error_input');
    input_youtube.classList.add('error_input');
  }else {
    input_facebook.classList.remove('error_input');
    input_instagram.classList.remove('error_input');
    input_twitter.classList.remove('error_input');
    input_email.classList.remove('error_input');
    input_youtube.classList.remove('error_input');
  }
  return error;
};

let obtener_datos = () => {

  if (validar() == false) {
    let id = _id;
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
