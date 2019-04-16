'use strict';

const id_usuario = sessionStorage.getItem('idu');

const nombre = document.querySelector("#nombre");
const img=document.querySelector('#previewimg');
const papellido = document.querySelector('#papellido');
const sapellido = document.querySelector('#sapellido');
const hijos = document.querySelector('#num_hijos');
const tel = document.querySelector('#num_tel');
const direccion = document.querySelector('#direccion');
const constrasenna_usuario = document.querySelector('#contrasenna');
const btn_actualizar = document.querySelector('#g_cambios');

let validar = () =>{
  let error = false;

  if (nombre.value='') {
    error=true;
    nombre.classList.add('error_input');
  } else {
    nombre.classList.remove('error_input');
  }
  if (papellido.value='') {
    error=true;
    papellido.classList.add('error_input');
  } else {
    papellido.classList.remove('error_input');
  }if (sapellido.value='') {
    error=true;
    sapellido.classList.add('error_input');
  } else {
    sapellido.classList.remove('error_input');
  }if (hijos.value='') {
    error=true;
    hijos.classList.add('error_input');
  } else {
    hijos.classList.remove('error_input');
  }if (tel.value='') {
    error=true;
    tel.classList.add('error_input');
  } else {
    tel.classList.remove('error_input');
  }if (direccion.value='') {
    error=true;
    direccion.classList.add('error_input');
  } else {
    direccion.classList.remove('error_input');
  }if (constrasenna_usuario.value='') {
    error=true;
    constrasenna_usuario.classList.add('error_input');
  } else {
    constrasenna_usuario.classList.remove('error_input');
  }

  return error;
};

let obtener_datos = ()=>{
  if (validar()==false) {
    let id = id_usuario;
    let nom = nombre.value;
    let pape = papellido.value;
    let sape= sapellido.value;
    let hij = hijos.value;
    let imagen= img.src;
    let telefono = tel.value;
    let direcc=direccion.value;
    let contrasenna = constrasenna_usuario.value;

    actualizar_perfil_padre(id_usuario, imagen,nom, pape, sape,hij,telefono,direcc,contrasenna)

  } else {
    swal.fire({
      type: 'warning',
      title: 'Ha ocurrido un problema',
      text:'Revise los campos resaltados'
    });
  }
};

btn_actualizar.addEventListener('click', obtener_datos);
