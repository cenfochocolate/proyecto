'use strict';

const tabla = document.querySelector('#tbl_redes_sociales');

let mostrar_rs = () => {
    let rs = listar_rs();

    for (let i = 0; i < rs.length; i++) {
        let fila = tabla.insertRow();

        fila.insertCell().innerHTML = rs[i]['facebook'];
        fila.insertCell().innerHTML = rs[i]['instagram'];
        fila.insertCell().innerHTML = rs[i]['twitter'];
        fila.insertCell().innerHTML = rs[i]['email'];
        fila.insertCell().innerHTML = rs[i]['youtube'];
    };
};
mostrar_rs();