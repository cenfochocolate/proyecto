
'use strict';

const tabla = document.querySelector('#tbl_precio tbody');
const inputFiltro = document.querySelector('#buscar_precio');

let precio = listar_precio();
mostrar_datos();

inputFiltro.addEventListener('keyup',mostrar_datos);


function mostrar_datos(){
    let precio = listar_precio();
    let filtro = inputFiltro.value;
    tabla.innerHTML='';

    for (let i = 0; i < precio.length; i++) {
      if (precio[i]['formato'].toLowerCase().includes(filtro.toLowerCase())) {

        let fila = tabla.insertRow();

        fila.insertCell().innerHTML = precio[i]['numero'];
        fila.insertCell().innerHTML = precio[i]['formato'];
        fila.insertCell().innerHTML = precio[i]['precio'];
        fila.insertCell().innerHTML = precio[i]['pago'];
      }
    };
};
mostrar_datos();
