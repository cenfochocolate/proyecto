'use strict';

const tabla = document.querySelector('#tbl_idiomas tbody');
const buscar = inputbuscar.Value;

let mostrar_datos = () => {


    for (let i = 0; i < idioma.length; i++) {
        if (listar_idioma[i]['cedula'].toLoverCase().includes(buscar.toLoverCase()) || listar_idioma[i]['idioma'].toLoverCase().includes(buscar.toLoverCase())) {

            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = idioma[i]['cedula'];
            fila.insertCell().innerHTML = idioma[i]['idioma'];
            fila.insertCell().innerHTML = idioma[i]['duracion'];
            fila.insertCell().innerHTML = idioma[i]['titulo'];
        }

    };
};
mostrar_datos();
