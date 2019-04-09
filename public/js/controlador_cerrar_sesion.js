'use strict';
const cerrar_sesion = document.querySelector('#cerrar_sesion');

function borrar_sesion(){
  localStorage.clear();
}

cerrar_sesion.addEventListener('click', borrar_sesion);
