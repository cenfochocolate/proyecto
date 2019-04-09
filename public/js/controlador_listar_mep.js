'use strict';

const tabla = document.querySelector('#tbl_utiles tbody');
const inputFiltro = document.querySelector('#buscar_util');
const select_nivel = document.querySelector('#filtrar_util');
let utiles = listar_utiles_mep();

mostrar_utiles_mep();

inputFiltro.addEventListener('keyup', mostrar_utiles_mep);
select_nivel.addEventListener('change', mostrar_utiles_mep);

function mostrar_utiles_mep(){
  let utiles = listar_utiles_mep();
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

mostrar_utiles_mep();
