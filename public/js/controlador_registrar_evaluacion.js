
'use strict';

const txt_criterio1 = document.querySelector('#txt_criterio_1');
const inputcriterio_1 = document.querySelector('#criterio_1');
const tabla = document.querySelector('#tbl_criterio tbody');
let contador = 0;

const botonRegistrar = document.querySelector('#btn_registrar');

let llenar_lista = () => {
    document.getElementById('txt_alerta').style.display = "none";

    let evaluacion = listar_evaluacion();

    if (evaluacion) {

        contador = evaluacion.length;

        if (evaluacion.length >= 10) {

            document.getElementById('inputs').style.display = "none";
            document.getElementById('txt_alerta').style.display = "flex";
            document.getElementById('btn_registrar').style.display = "none";
        }
        else {
            //document.getElementById('inputs').style.display = "none";
        
        }

        tabla.innerHTML = '';

        for (let i = 0; i < evaluacion.length; i++) {

            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = evaluacion[i]['nombre'];
            fila.insertCell().innerHTML = evaluacion[i]['calificacion'];
        }
    }
};




let validar = () => {
    let error = false;


    if (txt_criterio1.value == '') {
        error = true;
        document.getElementById('txt_criterio_1').style.borderColor = "red";
    } else {
        error = false;
        document.getElementById('txt_criterio_1').style.borderColor = "blue";
    }

    if (inputcriterio_1.value == '') {
        error = true;
        document.getElementById('criterio_1').style.borderColor = "red";
    } else {
        error = false;
        document.getElementById('criterio_1').style.borderColor = "blue";
    }
    return error;

};

let obtener_datos = () => {

    if (!validar()) {
        let nombre = txt_criterio1.value;
        let calificacion = inputcriterio_1.value;

        registrar_evaluacion(nombre,calificacion);

        document.location.reload();

    } else {
        swal.fire({
            type: 'warning',
            title: 'Mínimo un campo',
            text: 'Por favor revise los campos resaltados'
        });
    }
};



llenar_lista();
botonRegistrar.addEventListener('click', obtener_datos);
