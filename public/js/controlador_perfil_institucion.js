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
const tabla_listar = document.querySelector('#tbl_contacto tbody');
const filtro_contacto = document.querySelector('#buscar_contacto');
const slt_utiles = document.querySelector('#slt_utiles');
const btn_registrar = document.querySelector('#btn_pref_utiles');
const pref_util = document.querySelector('#lista_seleccionada_utiles');
const tabla = document.querySelector('#tbl_redes_sociales');
const tbl_contacto = document.querySelector('#tbl_contacto tbody');
const tablaNoticias = document.querySelector('#tbl_noticias tbody');
let noticias = listar_noticias();
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

nombre_inistitucion.innerHTML = institucion['nombre_comercial'];
referenciaH.innerHTML = institucion['refencia_historica'];
imagen.src = institucion['url_foto'];
descripcion.innerHTML = institucion['direccion'];




validarRegistrar();
mostrar_noticias();
// mostrar_contacto();
mostrar_rs();
mostrar_comentarios();

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
    generarReporte.classList.remove('hideInput');
    utilesT.classList.remove('hideInput');
  } else {
    registrarNoticia.classList.add('hideInput');
    registrarRS.classList.add('hideInput');
    registrarContacto.classList.add('hideInput');
    registrarUtiles.classList.add('hideInput');
    selectUtiles.classList.add('hideInput');
    generarReporte.classList.add('hideInput');
    utilesT.classList.add('hideInput');
  }
};
input_Filtro.addEventListener('keyup', mostrar_noticias);

function mostrar_noticias() {
  let noticias = listar_noticias();
  let filtro = input_Filtro.value;
  tablaNoticias.innerHTML = '';
  for (let i = 0; i < noticias.length; i++) {
    if (id_institucion == noticias[i]['id_institucion']) {
      if (noticias[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())) {
        let fila = tablaNoticias.insertRow();
        fila.insertCell().innerHTML = noticias[i]['nombre'];
        fila.insertCell().innerHTML = noticias[i]['descripcion'];
        let imagen = document.createElement('img');
        imagen.classList.add('imagentablaNoticias');
        if (noticias[i]['imagen']) {
          imagen.src = noticias[i]['imagen'];
        } else {
          imagen.src = './imgs/imgph.jpg';
        }
        fila.insertCell().appendChild(imagen);
      }
    }
  };
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
      if (comentario_filtrados[i]['id_usuario'] == todosLosUsuarios[j]['_id']) {
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

filtro_contacto.addEventListener('keyup', mostrar_datos);

function mostrar_datos() {
  let contacto = listar_contacto();
  let filtro = filtro_contacto.value;
  tbl_contacto.innerHTML = '';

  for (let i = 0; i < contacto.length; i++) {
    if (contacto[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())) {
      let fila = tbl_contacto.insertRow();

      fila.insertCell().innerHTML = contacto[i]['nombre'];
      fila.insertCell().innerHTML = contacto[i]['departamento'];
      fila.insertCell().innerHTML = contacto[i]['telefono'];
      fila.insertCell().innerHTML = contacto[i]['correo'];
      fila.insertCell().innerHTML = contacto[i]['extension'];
      let imagen = document.createElement('img');
      imagen.classList.add('imagenTabla');
      if (contacto[i]['imagen']) {
        imagen.src = contacto[i]['imagen'];
      } else {
        imagen.src = './imgs/imgph.jpg';
      }
      fila.insertCell().appendChild(imagen);
      fila.insertCell().innerHTML = contacto[i]['estado'];

      let celda_configuracion = fila.insertCell();

      let boton_editar = document.createElement('a');
      boton_editar.textContent = 'Editar';
      boton_editar.href = `actualizar_contacto.html?id_contacto=${contacto[i]['_id']}`

      celda_configuracion.appendChild(boton_editar);

      let celda_eliminar = fila.insertCell();

      let boton_eliminar = document.createElement('a');
      boton_eliminar.href = '#';
      boton_eliminar.innerHTML = '<i class="fas fa-trash-alt"></i>';
      boton_eliminar.dataset.id = contacto[i]['_id'];
      boton_eliminar.addEventListener('click', confirmar_borrado);
      celda_eliminar.appendChild(boton_eliminar);

      let celda_deshabilitar = fila.insertCell();
      let boton_deshabilitar = document.createElement('a');
      boton_deshabilitar.innerHTML = '<i class="fas fa-eye-slash"></i>';
      boton_deshabilitar.dataset.id = contacto[i]['_id'];
      boton_deshabilitar.addEventListener('click', confirmar_deshabilitar);
      celda_deshabilitar.appendChild(boton_deshabilitar);

      let celda_habilitar = fila.insertCell();
      let boton_habilitar = document.createElement('a');
      boton_habilitar.innerHTML = '<i class="fas fa-eye"></i>';
      boton_habilitar.dataset.id = contacto[i]['_id'];
      boton_habilitar.addEventListener('click', confirmar_habilitar);
      celda_habilitar.appendChild(boton_habilitar);

    } else {
      if (contacto[i]['nombre'].toLowerCase().includes(filtro.toLowerCase()) && contacto[i]['id_institucion'] == institucion && contacto[i]['estado'] == "Activo") {

        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = contacto[i]['nombre'];
        fila.insertCell().innerHTML = contacto[i]['departamento'];
        fila.insertCell().innerHTML = contacto[i]['telefono'];
        fila.insertCell().innerHTML = contacto[i]['correo'];
        fila.insertCell().innerHTML = contacto[i]['extension'];

        let imagen = document.createElement('img');
        imagen.classList.add('imagenTabla');
        if (contacto[i]['imagen']) {
          imagen.src = contacto[i]['imagen'];
        } else {
          imagen.src = './imgs/imgph.jpg';
        }
        fila.insertCell().appendChild(imagen);
        fila.insertCell().innerHTML = contacto[i]['estado'];

      };

    }
  }
};
function confirmar_borrado() {
  let id = this.dataset.id;
  Swal.fire({
    title: '¿Está seguro que desea eliminar el contacto?',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, estoy seguro.'
  }).then((result) => {
    if (result.value) {
      borrar_contacto(id);
      contacto = listar_contacto();
      mostrar_datos();
      Swal.fire({
        title: '¡Contacto eliminado!',
        text: 'El contacto fue con éxito.',
        type: 'success'
      })
    }
  })

};
function confirmar_deshabilitar() {
  let id = this.dataset.id;
  Swal.fire({
    title: '¿Está seguro que desea deshabilitar?',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, estoy seguro.'
  }).then((result) => {
    if (result.value) {
      deshabilitar_contacto(id);
      contacto = listar_contacto();
      mostrar_datos();
      Swal.fire({
        title: '¡Deshabilitada con éxito!',
        type: 'success'
      })
    }
  })
};


function confirmar_habilitar() {
  let id = this.dataset.id;
  Swal.fire({
    title: '¿Está seguro que desea habilitar?',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, estoy seguro.'
  }).then((result) => {
    if (result.value) {
      habilitar_contacto(id);
      contacto = listar_contacto();
      mostrar_datos();
      Swal.fire({
        title: '¡Habilitada con éxito!',
        type: 'success'
      })
    }
  })
};





mostrar_datos();






function mostrar_rs() {
  let rs = listar_rs();
  for (let i = 0; i < rs.length; i++) {
    if (id_institucion == rs[i]['id_institucion']) {
      let fila = tabla.insertRow();
      fila.insertCell().innerHTML = rs[i]['facebook'];
      fila.insertCell().innerHTML = rs[i]['instagram'];
      fila.insertCell().innerHTML = rs[i]['twitter'];
      fila.insertCell().innerHTML = rs[i]['email'];
      fila.insertCell().innerHTML = rs[i]['youtube'];

      let celda_configuracion = fila.insertCell();

      let boton_editar = document.createElement('a');
      boton_editar.textContent = 'Editar';
      boton_editar.href = `actualizar_rs.html?id_rs=${rs[i]['_id']}`

      celda_configuracion.appendChild(boton_editar);
    }

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

btn_registrar.addEventListener('click', obtener_datos);
btn_comentario.addEventListener('click', obtener_comentario);
