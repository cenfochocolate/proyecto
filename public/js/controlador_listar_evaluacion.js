
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

      }
        }
    }
  };
  
  mostrar_datos();
  