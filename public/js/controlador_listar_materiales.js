'use strict';

let tabla = document.querySelector('#tbl_material tbody');
const inputFiltro = document.querySelector('#buscar_material');

let material = listar_materiales();
mostrar_datos();

inputFiltro.addEventListener('keyup', mostrar_datos);

function mostrar_datos() {

    let material = listar_materiales();
    let filtro = inputFiltro.value;
    tabla.innerHTML = '';

    for (let i = 0; i < material.length; i++) {
        if (material[i]['nombre_de_la_institucion'].toLowerCase().includes(filtro.toLowerCase())) {

            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = material[i]['nombre_de_la_institucion'];
            fila.insertCell().innerHTML = material[i]['descripcion'];
        }
    };

};

mostrar_datos();
