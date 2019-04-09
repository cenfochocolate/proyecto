
'use strict';

const tabla = document.querySelector('#tbl_idiomas tbody');
const inputfiltro = document.querySelector('#buscar_idioma');

let requisito = listar_idioma();
mostrar_datos();

inputfiltro.addEventListener('keyup', mostrar_datos);

function mostrar_datos() {
    let idioma = listar_idioma();
    let filtro = inputfiltro.value;
    tabla.innerHTML = '';

    for (let i = 0; i < idioma.length; i++) {
        if (requisito[i]['idioma'].toLowerCase().includes(filtro.toLowerCase())) {

            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = idioma[i]['cedula'];
            fila.insertCell().innerHTML = idioma[i]['idioma'];
            fila.insertCell().innerHTML = idioma[i]['duracion'];
            fila.insertCell().innerHTML = idioma[i]['titulo'];
        }
    };
};
mostrar_datos();