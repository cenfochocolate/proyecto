
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

            let celda_configuracion = fila.insertCell();

            let boton_editar = document.createElement('a');
            boton_editar.textContent ='Editar';
            boton_editar.href=`actualizar_requisitos_matricula.html?id_requisito=${requisito[i]['_id']}`
         
            celda_configuracion.appendChild(boton_editar);
        }
    };
};
mostrar_datos();
