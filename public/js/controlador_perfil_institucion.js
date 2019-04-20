'use strict';
//IDs
const id_institucion = sessionStorage.getItem('id_lugar');
let idr = sessionStorage.getItem('idu');
//tipo de usuario
let tipo = sessionStorage.getItem('tipo_usuario');
//HTMLs dinamicos
let perfil= document.querySelector('#perfil');
let referenciaH = document.querySelector('#rh');
let imagen = document.querySelector('#imagen');
let nombre_inistitucion = document.querySelector('#nombre');
let institucion = buscar_institucion(id_institucion);
let descripcion = document.querySelector('#direccion');
//tablas de registro
const input_Filtro = document.querySelector('#buscar_noticia_institucion');
const tabla_listar = document.querySelector('#tbl_contacto tbody');
const filtro_contacto =document.querySelector('#buscar_contacto');
const slt_utiles = document.querySelector('#slt_utiles');
const btn_registrar = document.querySelector('#btn_pref_utiles');
const pref_util = document.querySelector('#lista_seleccionada_utiles');
const tabla = document.querySelector('#tbl_redes_sociales');
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

nombre_inistitucion.innerHTML = institucion['nombre_comercial'];
referenciaH.innerHTML = institucion['refencia_historica'];
imagen.src = institucion['url_foto'];
descripcion.innerHTML = institucion['direccion'];




validarRegistrar();
mostrar_noticias();
mostrar_contacto();
mostrar_rs();

function validarRegistrar(){
  if(id_institucion == idr){
    registrarNoticia.classList.remove('hideInput');
    registrarRS.classList.remove('hideInput');
    registrarContacto.classList.remove('hideInput');
    registrarUtiles.classList.remove('hideInput');
    selectUtiles.classList.remove('hideInput');
    generarReporte.classList.remove('hideInput');
    utilesT.classList.remove('hideInput');
  }else{
    registrarNoticia.classList.add('hideInput');
    registrarRS.classList.add('hideInput');
    registrarContacto.classList.add('hideInput');
    registrarUtiles.classList.add('hideInput');
    selectUtiles.classList.add('hideInput');
    generarReporte.classList.add('hideInput');
      utilesT.classList.add('hideInput');
  }
};
input_Filtro.addEventListener('keyup' , mostrar_noticias);

function mostrar_noticias(){
  let noticias = listar_noticias();
  let filtro = input_Filtro.value;
  tablaNoticias.innerHTML='';
  for(let i = 0; i < noticias.length; i++){
  if(id_institucion == noticias[i]['id_institucion']){
    if(noticias[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())){
    let fila = tablaNoticias.insertRow();
    fila.insertCell().innerHTML = noticias[i]['nombre'];
    fila.insertCell().innerHTML = noticias[i]['descripcion'];
    let imagen = document.createElement('img');
    imagen.classList.add('imagentablaNoticias');
    if(noticias[i]['imagen']){
      imagen.src = noticias[i]['imagen'];
    }else{
      imagen.src = './imgs/imgph.jpg';
    }
    fila.insertCell().appendChild(imagen);
    }
  }
  };
};




filtro_contacto.addEventListener('keyup', mostrar_contacto);

function mostrar_contacto(){
  let listarcontacto = listar_contacto();
  let filtro_contact = filtro_contacto.value;
  tabla_listar.innerHTML='';

  for (let i = 0; i < listarcontacto.length; i++) {
  if(id_institucion == listarcontacto[i]['id_institucion']){
    if(listarcontacto[i]['nombre'].toLowerCase().includes(filtro_contact.toLowerCase())){
      let fila = tabla_listar.insertRow();

      fila.insertCell().innerHTML = listarcontacto[i]['nombre'];
      fila.insertCell().innerHTML = listarcontacto[i]['id'];
      fila.insertCell().innerHTML = listarcontacto[i]['departamento'];
      fila.insertCell().innerHTML = listarcontacto[i]['telefono'];
      fila.insertCell().innerHTML = listarcontacto[i]['correo'];
      fila.insertCell().innerHTML = listarcontacto[i]['extension'];
      let imagen = document.createElement('img');
      imagen.classList.add('imagenTabla');
      if (listarcontacto[i]['imagen']!= null) {
        imagen.src= listarcontacto[i]['imagen'];
      } else {
        imagen.src= './imgs/imgph.jpg';
      }
      fila.insertCell().appendChild(imagen);
    }
  }
  };
};





  function mostrar_rs(){
      let rs = listar_rs();
      for (let i = 0; i < rs.length; i++) {
        if(id_institucion == rs[i]['id_institucion']){
          let fila = tabla.insertRow();
          fila.insertCell().innerHTML = rs[i]['facebook'];
          fila.insertCell().innerHTML = rs[i]['instagram'];
          fila.insertCell().innerHTML = rs[i]['twitter'];
          fila.insertCell().innerHTML = rs[i]['email'];
          fila.insertCell().innerHTML = rs[i]['youtube'];

          let celda_configuracion = fila.insertCell();

                let boton_editar = document.createElement('a');
                boton_editar.textContent ='Editar';
                boton_editar.href=`actualizar_rs.html?id_rs=${rs[i]['_id']}`
             
                celda_configuracion.appendChild(boton_editar);
        }

      };
  };



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
        title: 'No se pudo realizar el registro',
        text: 'Por favor revise los campos resaltados'
      });
    }
  };

  btn_registrar.addEventListener('click', obtener_datos);
