'use strict';

const tabla = document.querySelector('#tbl_utiles tbody');
const inputFiltro = document.querySelector('#buscar_util_institucion');
const select_nivel = document.querySelector('#filtrar_util');
let utiles = listar_utiles();

mostrar_datos();

inputFiltro.addEventListener('keyup', mostrar_datos);
select_nivel.addEventListener('change', mostrar_datos);

function mostrar_datos(){
  let utiles = listar_utiles();
  let filtro = inputFiltro.value;
  let nivel = select_nivel.value;
  tabla.innerHTML='';

  for (let i = 0; i < utiles.length; i++){
      if (utiles[i]['util'].toLowerCase().includes(filtro.toLowerCase()) && nivel == "null") {
      let fila = tabla.insertRow();
      fila.insertCell().innerHTML = utiles[i]['util'];
      fila.insertCell().innerHTML = utiles[i]['descripcion'];
      fila.insertCell().innerHTML = utiles[i]['cantidad'];
      fila.insertCell().innerHTML = utiles[i]['nivel'];
    } else {
      if (utiles[i]['util'].toLowerCase().includes(filtro.toLowerCase()) && utiles[i]['nivel'].includes(nivel)) {
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = utiles[i]['util'];
        fila.insertCell().innerHTML = utiles[i]['descripcion'];
        fila.insertCell().innerHTML = utiles[i]['cantidad'];
        fila.insertCell().innerHTML = utiles[i]['nivel'];
      }
    }
  }
};

mostrar_datos();
