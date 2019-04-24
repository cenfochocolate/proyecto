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
        if (material[i]['nombre_institucion'].toLowerCase().includes(filtro.toLowerCase())) {

            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = material[i]['nombre_institucion'];
            fila.insertCell().innerHTML = material[i]['descripcion'];

            let celda_configuracion = fila.insertCell();

      let boton_editar = document.createElement('a');
      boton_editar.innerHTML ='<i class="fas fa-edit"></i>';
      boton_editar.href=`actualizar_material.html?id_material=${material[i]['_id']}`
   
      celda_configuracion.appendChild(boton_editar);
        }
    };

}; 

mostrar_datos();
