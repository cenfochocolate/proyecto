'use strict';

const id_usuario = sessionStorage.getItem('idu');

const input_nombre = document.querySelector('#txt_nombre');
const input_url_foto=document.querySelector('#previewimg');
const input_papellido= document.querySelector('#papellido');
const input_sapellido = document.querySelector('#sapellido');
const input_nhijos  = document.querySelector('#num_hijos');
const input_telefono = document.querySelector('#num_tel');
const input_direccion = document.querySelector('#direccion');
const input_contrasenna = document.querySelector('#contrasenna');
const btn_actualizar = document.querySelector('#g_cambios');
let lst_provincia = document.querySelector('#select_provincia');
let lst_canton = document.querySelector('#select_canton');
let lst_distrito = document.querySelector('#select_distrito');
let padre = buscar_padre(id_usuario);


if(padre){

  input_nombre.value = padre[0]['nombre'];
  input_url_foto.src = padre[0]['url_foto'];
  input_papellido.value = padre[0]['primer_apellido'];
  input_sapellido.value = padre[0]['segundo_apellido'];
  input_nhijos.value = padre[0]['cantidad_de_hijos'];
  input_telefono.value = padre[0]['telefono'];
  input_direccion.value = padre[0]['direccion'];
  input_contrasenna.value = padre[0]['contrasenna'];


  }




let validar = () =>{
  let error = false;

  if (lst_provincia.options[lst_provincia.selectedIndex].value == 0) {
   error = true;
  lst_provincia.classList.add('error_input');
  lst_canton.classList.add('error_input');
  lst_distrito.classList.add('error_input');
  } else {
 lst_provincia.classList.remove('error_input');
lst_canton.classList.remove('error_input');
lst_distrito.classList.remove('error_input');
  }
  if (input_nombre.value=='') {
    error=true;
    input_nombre.classList.add('error_input');
  } else {
    input_nombre.classList.remove('error_input');
  }
  if (input_papellido.value=='') {
    error=true;
    input_papellido.classList.add('error_input');
  } else {
    input_papellido.classList.remove('error_input');
  }if (input_sapellido.value=='') {
    error=true;
    input_sapellido.classList.add('error_input');
  } else {
    input_sapellido.classList.remove('error_input');
  }if (input_nhijos.value=='') {
    error=true;
    input_nhijos.classList.add('error_input');
  } else {
    input_nhijos.classList.remove('error_input');
  }if (input_telefono.value=='') {
    error=true;
    input_telefono.classList.add('error_input');
  } else {
    input_telefono.classList.remove('error_input');
  }if (input_direccion.value=='') {
    error=true;
    input_direccion.classList.add('error_input');
  } else {
    input_direccion.classList.remove('error_input');
  }if (input_contrasenna.value=='') {
    error=true;
    input_contrasenna.classList.add('error_input');
  } else {
    input_contrasenna.classList.remove('error_input');
  }

  return error;
};

let obtener_datos = ()=>{
  if (validar()==false) {
    let id = id_usuario;
    let url_foto = input_url_foto.src;
    let nombre = input_nombre.value;
    let primer_apellido = input_papellido.value;
    let segundo_apellido = input_sapellido.value;
    let cantidad_de_hijos = input_nhijos.value;
    let provincia = lst_provincia.selectedOptions[0].textContent;
    let canton = lst_canton.selectedOptions[0].textContent;
    let distrito = lst_distrito.selectedOptions[0].textContent;
    let direccion = input_direccion.value;
    let contrasenna =input_contrasenna.value;
    let telefono = input_telefono.value;


    actualizar_perfil_padre(id, url_foto,nombre, primer_apellido,segundo_apellido,cantidad_de_hijos,provincia,canton,distrito,direccion,contrasenna,telefono);

  } else {
    swal.fire({
      type: 'warning',
      title: 'Ha ocurrido un problema',
      text:'Revise los campos resaltados',
    });
  }
};



function establecer_provincias() {

    getProvincias(lst_provincia);

    //$('#select_provincia').html(ht);

    ///lst_provincia.html(getProvincias());
};

function establecer_cantones() {

    let id_provincia = lst_provincia.value;

    if (id_provincia == "0") {

        let option = document.createElement('option');
        option.text = 'Seleccione';
        option.value = "0";

        lst_canton.add(option);
        lst_distrito.add(option);

        let html = "<select>";
        html += "<option value='" + 0 + "'>Seleccione</option>";
        html += "</select";

        $(lst_canton).html(html);
        $(lst_distrito).html(html);

    } else {
        getCantones(lst_canton, id_provincia);
    }
};

function establecer_distritos() {

    let id_provincia = lst_provincia.value;

    let id_canton = lst_canton.value;

    getDistritos(lst_distrito, id_provincia, id_canton);

};

establecer_provincias();
lst_provincia.addEventListener('change', establecer_cantones);
lst_canton.addEventListener('change', establecer_distritos);

btn_actualizar.addEventListener('click', obtener_datos);
