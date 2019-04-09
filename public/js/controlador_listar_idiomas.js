'use strict';

const tabla = document.querySelector('#tbl_idiomas tbody');

let mostrar_datos = () => {
    let idioma = listar_idioma();

    for (let i = 0; i < idioma.length; i++) {
        let fila = tabla.insertRow();

        fila.insertCell().innerHTML = idioma[i]['cedula'];
        fila.insertCell().innerHTML = idioma[i]['idioma'];
        fila.insertCell().innerHTML = idioma[i]['duracion'];
        fila.insertCell().innerHTML = idioma[i]['titulo'];
    };
};
mostrar_datos();
