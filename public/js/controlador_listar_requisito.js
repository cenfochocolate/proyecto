
'use strict';

const tabla = document.querySelector('#tbl_nivel tbody');
const inputFiltro = document.querySelector('#buscar_requisito');
const institucion = sessionStorage.getItem('id_lugar');
const editar = document.querySelector('#editar');
const eliminar = document.querySelector('#eliminar');
const deshabilitar = document.querySelector('#deshab');
const habilitar = document.querySelector('#hab');
const botonr = document.querySelector('#btn_registrar');
const log = sessionStorage.getItem('idu');

let requisito = listar_requisito();
if (institucion == log) {
    editar.classList.remove('hideInput');
    eliminar.classList.remove('hideInput');
    deshabilitar.classList.remove('hideInput');
    habilitar.classList.remove('hideInput');
    botonr.classList.remove('hideInput');

} else {
    editar.classList.add('hideInput');
    eliminar.classList.add('hideInput');
    deshabilitar.classList.add('hideInput');
    habilitar.classList.add('hideInput');
    botonr.classList.add('hideInput');
}

mostrar_datos();

inputFiltro.addEventListener('keyup', mostrar_datos);


function mostrar_datos() {
    let requisito = listar_requisito();
    let filtro = inputFiltro.value;
    tabla.innerHTML = '';


    for (let i = 0; i < requisito.length; i++) {
        if (requisito[i]['descripcion'].toLowerCase().includes(filtro.toLowerCase()) && requisito[i]['id_institucion'] == institucion && institucion == log) {

            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = requisito[i]['nivel'];
            fila.insertCell().innerHTML = requisito[i]['descripcion'];

            fila.insertCell().innerHTML = requisito[i]['estado'];


            let celda_configuracion = fila.insertCell();

            let boton_editar = document.createElement('a');
            boton_editar.innerHTML = '<i class="fas fa-edit"></i>';
            boton_editar.href = `actualizar_requisitos_matricula.html?id_requisito=${requisito[i]['_id']}`

            celda_configuracion.appendChild(boton_editar);

            let celda_eliminar = fila.insertCell();

            let boton_eliminar = document.createElement('a');
            boton_eliminar.href = '#';
            boton_eliminar.innerHTML = '<i class="fas fa-trash-alt"></i>';
            boton_eliminar.dataset.id = requisito[i]['_id'];
            boton_eliminar.addEventListener('click', confirmar_borrado);
            celda_eliminar.appendChild(boton_eliminar);

            let celda_deshabilitar = fila.insertCell();
            let boton_deshabilitar = document.createElement('a');
            boton_deshabilitar.innerHTML = '<i class="fas fa-eye-slash"></i>';
            boton_deshabilitar.dataset.id = requisito[i]['_id'];
            boton_deshabilitar.addEventListener('click', confirmar_deshabilitar);
            celda_deshabilitar.appendChild(boton_deshabilitar);

            let celda_habilitar = fila.insertCell();
            let boton_habilitar = document.createElement('a');
            boton_habilitar.innerHTML = '<i class="fas fa-eye"></i>';
            boton_habilitar.dataset.id = requisito[i]['_id'];
            boton_habilitar.addEventListener('click', confirmar_habilitar);
            celda_habilitar.appendChild(boton_habilitar);

        } else {
            if (requisito[i]['descripcion'].toLowerCase().includes(filtro.toLowerCase()) && requisito[i]['id_institucion'] == institucion && requisito[i]['estado'] == "Activo") {

                let fila = tabla.insertRow();

                fila.insertCell().innerHTML = requisito[i]['nivel'];
                fila.insertCell().innerHTML = requisito[i]['descripcion'];

                fila.insertCell().innerHTML = requisito[i]['estado'];
            };
        }
    };
    function confirmar_borrado() {
        let id = this.dataset.id;
        Swal.fire({
            title: '¿Está seguro que desea eliminar?',
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

    function confirmar_deshabilitar() {
        let id = this.dataset.id;
        Swal.fire({
            title: '¿Está seguro que desea deshabilitar?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, estoy seguro.'
        }).then((result) => {
            if (result.value) {
                deshabilitar_requisito(id);
                requisito = listar_requisito();
                mostrar_datos();
                Swal.fire({
                    title: '¡Deshabilitada con éxito!',
                    type: 'success'
                })
            }
        })
    };


    function confirmar_habilitar() {
        let id = this.dataset.id;
        Swal.fire({
            title: '¿Está seguro que desea habilitar?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, estoy seguro.'
        }).then((result) => {
            if (result.value) {
                habilitar_requisito(id);
                requisito = listar_requisito();
                mostrar_datos();
                Swal.fire({
                    title: '¡Habilitada con éxito!',
                    type: 'success'
                })
            }
        })
    };
};
    mostrar_datos();
