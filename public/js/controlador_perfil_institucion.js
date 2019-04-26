'use strict';
//IDs
const id_institucion = sessionStorage.getItem('id_lugar');
let idr = sessionStorage.getItem('idu');
//tipo de usuario
let tipo = sessionStorage.getItem('tipo_usuario');
//HTMLs dinamicos
let perfil = document.querySelector('#perfil');
let referenciaH = document.querySelector('#rh');
let imagen = document.querySelector('#imagen');
let nombre_inistitucion = document.querySelector('#nombre');
let institucion = buscar_institucion(id_institucion);
let descripcion = document.querySelector('#direccion');

//tablas de registro
const input_Filtro = document.querySelector('#buscar_noticia_institucion');
const slt_utiles = document.querySelector('#slt_utiles');
const btn_registrar = document.querySelector('#btn_pref_utiles');
const pref_util = document.querySelector('#lista_seleccionada_utiles');
const tabla = document.querySelector('#tbl_redes_sociales');


//botones del perfil
let registrarNoticia = document.querySelector('#btn_registrar_noticia');
let registrarRS = document.querySelector('#add');
let registrarContacto = document.querySelector('#btn_registrarContacto');
let registrarUtiles = document.querySelector('#btn_pref_utiles');
let selectUtiles = document.querySelector('#slt_utiles');
let generarReporte = document.querySelector('#btn_reporte');
let utilesT = document.querySelector('#label_titulo');

//variables de Comentarios
let text_comentario = document.querySelector('#ta_comentario');
let btn_comentario = document.querySelector('#btn_comentario');

//variables de las estrellas
const slt_estrellas = document.querySelector('#slt_estrellas');
const btn_estrellas = document.querySelector('#btn_estrellas');
nombre_inistitucion.innerHTML = institucion['nombre_comercial'];
referenciaH.innerHTML = institucion['refencia_historica'];
imagen.src = institucion['url_foto'];
descripcion.innerHTML = institucion['direccion'];




validarRegistrar();
validarComentario();

// mostrar_contacto();
mostrar_comentarios();


let validar_estrellas = () => {
  let error = false;
  if (slt_estrellas.value == '') {
    error = true;
    slt_estrellas.classList.add('error_input');
  } else {
    error = false;
  };
  return error;
};

let obtener_estrellas = () => {
  if (validar_estrellas() == false) {
    let id_insti = id_institucion;
    let id_user = idr;
    let calificacion = slt_estrellas.value;
    registrar_estrellas(id_insti, id_user, calificacion);
  } else {
    swal.fire({
      type: 'warning',
      title: 'La calificación no pudo ser registrada',
      text: 'Por favor revise los campos resaltados'
    });
  }
};

let validar_comentario = () => {
  let error = false;
  if (text_comentario.value == '') {
    error = true;
    text_comentario.classList.add('error_input');
  } else {
    text_comentario.classList.remove('error_input');
  }
  return error;
};

let obtener_comentario = () => {
  if (validar_comentario() == false) {
    let id_usuario = idr;
    let id_insti = id_institucion;
    let comentario = text_comentario.value;
    registrar_comentario(id_usuario, id_insti, comentario);
    text_comentario.value = "";
    mostrar_comentarios();
  } else {
    swal.fire({
      type: 'warning',
      title: 'El comentario no fue registrado',
      text: 'Por favor revise los campos resaltados'
    });
  }
};

function validarRegistrar() {
  if (id_institucion == idr) {
    registrarNoticia.classList.remove('hideInput');
    registrarRS.classList.remove('hideInput');
    registrarContacto.classList.remove('hideInput');
    registrarUtiles.classList.remove('hideInput');
    selectUtiles.classList.remove('hideInput');
    utilesT.classList.remove('hideInput');
  } else {
    registrarNoticia.classList.add('hideInput');
    registrarRS.classList.add('hideInput');
    registrarContacto.classList.add('hideInput');
    registrarUtiles.classList.add('hideInput');
    selectUtiles.classList.add('hideInput');
    utilesT.classList.add('hideInput');
  }
};

function validarComentario() {
  if (tipo == "padre") {
    btn_comentario.classList.remove('hideInput');
    text_comentario.classList.remove('hideInput')
  } else {
    btn_comentario.classList.add('hideInput');
    text_comentario.classList.add('hideInput');
  }
};



function mostrar_datos_user() {
  let valoraciones = listar_datos_users();

};


function mostrar_comentarios() {

  let todos_coment = listar_comentarios();
  let comentario_filtrados = [];
  let todosLosUsuarios = listar_instituciones();
  let usuariosFiltrados = [];

  const div_comentario = document.querySelector('#seccion_comentarios');
  for (let i = 0; i < todos_coment.length; i++) {
    comentario_filtrados.push(todos_coment[i]);
    for (let j = 0; j < todosLosUsuarios.length; j++) {
      if (comentario_filtrados[i]['id_usuario'] == todosLosUsuarios[j]['_id'] && comentario_filtrados[i]['id_institucion'] == id_institucion) {
        usuariosFiltrados.push(todosLosUsuarios[j]);
        let div = document.createElement('div');
        div.classList.add('comentario');

        let img = document.createElement('img');
        img.src = todosLosUsuarios[j]['url_foto'];
        let nombre = document.createElement('h4');
        nombre.innerHTML = todosLosUsuarios[j]['nombre'];
        let comen = document.createElement('p');
        comen.innerHTML = comentario_filtrados[i]['comentario'];

        div.appendChild(img);
        div.appendChild(nombre);
        div.appendChild(comen);
        div_comentario.appendChild(div);
      }
    };
  };

};












let validar = () => {
  let error = false;

  if (slt_utiles.value == "null") {
    error = true;
    slt_utiles.classList.add('error_input');
  } else {
    slt_utiles.classList.remove('error_input');
  }
  return error;
};

let obtener_datos = () => {
  if (validar() == false) {
    let preferencia = slt_utiles.value;
    pref_util.href = preferencia;
    registrar_pref(preferencia);

  } else {
    swal.fire({
      type: 'warning',
      title: 'No se pudo realizar el registro',
      text: 'Por favor revise los campos resaltados'
    });
  }
};

function ubicacion_institucion() {
  latitud = platitud;
  longitud = plongitud;

  mapboxgl.accessToken = 'pk.eyJ1IjoidHJpY2tlcmVkNG1lIiwiYSI6ImNqdXQ5b3l2YzA1cWgzeW5yeW96MnJtZ3UifQ.fDvMOAViMZcglVBy0MFunQ';
  let map = new mapboxgl.Map({
    container: 'mapa',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-84.1483645, 9.9356124],
    zoom: 6
  });

  marker = new mapboxgl.Marker({
    draggable: false
  })
  setLngLat([, latitud])
    .addTo(map);

  function onDragEnd() {
    let lngLat = Marker.getLngLat();

    latitud = lngLat.lat;
    longitud = lngLat.lng;
  }
  marker.on('dragend', onDragEnd);

};

btn_estrellas.addEventListener('click', obtener_estrellas);
btn_registrar.addEventListener('click', obtener_datos);

btn_comentario.addEventListener('click', obtener_comentario);
