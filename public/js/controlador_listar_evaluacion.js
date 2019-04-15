
'use strict';

const tabla = document.querySelector('#tbl_criterio tbody');
const inputFiltro = document.querySelector('#buscar_criterio');

let evaluacion = listar_evaluacion();
mostrar_datos();

inputFiltro.addEventListener('keyup', mostrar_datos);

function mostrar_datos() {

  let evaluacion = listar_evaluacion();
  if (evaluacion) {
    let filtro = inputFiltro.value;
    tabla.innerHTML = '';

    for (let i = 0; i < evaluacion.length; i++) {

      if (evaluacion[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())) {

        let fila = tabla.insertRow();

        fila.insertCell().innerHTML = evaluacion[i]['nombre'];
        fila.insertCell().innerHTML = evaluacion[i]['calificacion'];

        let celda_configuracion = fila.insertCell();

        let boton_editar = document.createElement('a');
        boton_editar.textContent ='Editar';
        boton_editar.href=`actualizar_criterio_evaluacion.html?id_criterio=${evaluacion[i]['_id']}`
     
        celda_configuracion.appendChild(boton_editar);

      }
    }
  }
};

mostrar_datos();
