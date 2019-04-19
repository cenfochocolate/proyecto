
'use strict';

const tabla = document.querySelector('#tbl_grado tbody');
const inputFiltro = document.querySelector('#buscar_mensualidad');

let mensualidad = listar_mensualidad();
mostrar_datos();

inputFiltro.addEventListener('keyup', mostrar_datos);

function mostrar_datos  ()  {
  let mensualidad = listar_mensualidad();
  let filtro = inputFiltro.value;
  tabla.innerHTML = '';

  for (let i = 0; i < mensualidad.length; i++) {
    if (mensualidad[i]['descripcion'].toLowerCase().includes(filtro.toLowerCase())) {

      let fila = tabla.insertRow();

      fila.insertCell().innerHTML = mensualidad[i]['institucion'];
      fila.insertCell().innerHTML = mensualidad[i]['descripcion'];
      fila.insertCell().innerHTML = mensualidad[i]['grado'];

      let celda_configuracion = fila.insertCell();

      let boton_editar = document.createElement('a');
      boton_editar.textContent ='Editar';
      boton_editar.href=`actualizar_informacion_mensualidad.html?id_mensualidad=${mensualidad[i]['_id']}`
   
      celda_configuracion.appendChild(boton_editar);
      
    }
  };
};

mostrar_datos();
