
'use strict';

const tabla = document.querySelector('#tbl_nivel tbody');
const inputFiltro = document.querySelector('#buscar_requisito');

let requisito = listar_requisito();
mostrar_datos();

inputFiltro.addEventListener('keyup', mostrar_datos);


function mostrar_datos() {
    let requisito = listar_requisito();
    let filtro = inputFiltro.value;
    tabla.innerHTML = '';


    for (let i = 0; i < requisito.length; i++) {
        if (requisito[i]['descripcion'].toLowerCase().includes(filtro.toLowerCase())) {

            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = requisito[i]['nivel'];
            fila.insertCell().innerHTML = requisito[i]['descripcion'];

            let celda_configuracion = fila.insertCell();

            let boton_editar = document.createElement('a');
            boton_editar.innerHTML ='<i class="fas fa-edit"></i>';
            boton_editar.href = `actualizar_requisitos_matricula.html?id_requisito=${requisito[i]['_id']}`

            celda_configuracion.appendChild(boton_editar);

            let celda_eliminar = fila.insertCell();

            let boton_eliminar = document.createElement('a');
            boton_eliminar.href = '#';
            boton_eliminar.innerHTML = '<i class="fas fa-trash-alt"></i>';
            boton_eliminar.dataset.id = requisito[i]['_id'];
            boton_eliminar.addEventListener('click', confirmar_borrado);
            celda_eliminar.appendChild(boton_eliminar);
        };
    }
};
function confirmar_borrado() {
    let id = this.dataset.id;
    Swal.fire({
        title: '¿Está seguro que desea eliminar la matrícula?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro.'
    }).then((result) => {
        if (result.value) {
            borrar_requisito(id);
            requisito = listar_requisito();
            mostrar_datos();
            Swal.fire({
                title: '¡Matrícula eliminada!',
                text: 'La matrícula fue eliminada con éxito.',
                type: 'success'
            })
        }
    })
};
mostrar_datos();
