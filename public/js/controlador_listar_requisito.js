
'use strict';

const tabla = document.querySelector('#tbl_nivel tbody');
const inputFiltro = document.querySelector('#buscar_requisito');

let requisito = listar_requisito();
mostrar_datos();

inputFiltro.addEventListener('keyup', mostrar_datos);


function mostrar_datos(){
    let requisito = listar_requisito();
    let filtro = inputFiltro.value;
    tabla.innerHTML='';


    for (let i = 0; i < requisito.length; i++) {
        if (requisito[i]['descripcion'].toLowerCase().includes(filtro.toLowerCase())) {

            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = requisito[i]['nivel'];
            fila.insertCell().innerHTML = requisito[i]['descripcion'];
        }
    };
};
mostrar_datos();
