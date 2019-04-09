'use strict';
const tabla = document.querySelector('#tbl_solicitud tbody');
const inputFiltro = document.querySelector('#buscar_solicitud');

let solicitud = listar_solicitud();

mostrar_datos();

inputFiltro.addEventListener('keyup', mostrar_datos);

//<td> <button type="button" id="btn_aceptar">Aceptar</button></td>
//    <td> <button type="button" id="btn_eliminar">Eliminar</button></td>

function mostrar_datos() {


    let solicitud = listar_solicitud();

    if (solicitud) {

        let filtro = inputFiltro.value;
        tabla.innerHTML = '';

        for (let i = 0; i < solicitud.length; i++) {

            if (solicitud[i]['nombre_comercial'].toLowerCase().includes(filtro.toLowerCase())) {

            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = solicitud[i]['nombre_comercial'];
            fila.insertCell().innerHTML = '<button style = "margin: 0px" >Aceptar</button> ';
            fila.insertCell().innerHTML = "<button>Borrar</button>";

            
             }

        }
    }
};

mostrar_datos();