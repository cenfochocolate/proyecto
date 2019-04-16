'use strict';

const id_institucion = sessionStorage.getItem('id_lugar');
let idr = sessionStorage.getItem('idu');

let tipo= sessionStorage.getItem('tipo_usuario');

// Variables de los labels que se llenan con la información de cada usuario padre de familia
let padre = buscar_padre(id_institucion);
let foto_perfil = document.querySelector('#img_padre');
let nombre = document.querySelector('#nombre_padre');
let papellido = document.querySelector('#primer_apellido');
let sapellido = document.querySelector('#segundo_apellido');
let chijos = document.querySelector('#cantidad_de_hijos');
let ntel = document.querySelector('#num_telefono');
let mail = document.querySelector('#email');
let direccion = document.querySelector('#direccion');

foto_perfil.src = padre['url_foto'];
nombre.innerHTML=padre['nombre'];
papellido.innerHTML= padre['primer_apellido'];
sapellido.innerHTML=padre['segundo_apellido'];
chijos.innerHTML=padre['cantidad_de_hijos'];
ntel.innerHTML=padre['telefono'];
mail.innerHTML=padre['correo'];
direccion.innerHTML=padre['direccion'];
