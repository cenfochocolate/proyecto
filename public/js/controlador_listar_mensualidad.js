
'use strict';

const tabla = document.querySelector('#tbl_grado tbody');
const inputFiltro = document.querySelector('#buscar_mensualidad');
let mensualidad = listar_mensualidad();
mostrar_datos();

inputFiltro.addEventListener('keyup', mostrar_datos);

function mostrar_datos() {
  let mensualidad = listar_mensualidad();
  let filtro = inputFiltro.value;
  tabla.innerHTML = '';

  for (let i = 0; i < mensualidad.length; i++) {
    if (mensualidad[i]['descripcion'].toLowerCase().includes(filtro.toLowerCase())) {

      let fila = tabla.insertRow();

      fila.insertCell().innerHTML = mensualidad[i]['grado'];
      fila.insertCell().innerHTML = mensualidad[i]['institucion'];
      fila.insertCell().innerHTML = mensualidad[i]['descripcion'];
    }
  };
};

mostrar_datos();
