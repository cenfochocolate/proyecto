
'use strict';
const inputgrado = document.querySelector('#txt_grado');
const inputinstitucion = document.querySelector('#txt_institucion');
const inputdescripcion = document.querySelector('#txt_info');
const boton_actualizar = document.querySelector('#btn_actualizar');

let get_param = (param) => {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param);

    return id;
};

let _id = get_param('id_mensualidad');

let mensualidad = buscar_mensualidad(_id);

let mostrar_datos = () => {

    let opciones_grado = document.querySelectorAll('#txt_grado option');

    for (let i = 0; i < opciones_grado.length; i++) {
        if (opciones_grado[i].textContent == mensualidad[0]['grado']) {
            opciones_grado[i].selected = true;

        }

    }

    inputinstitucion.value = mensualidad[0]['institucion'];
    inputdescripcion.value = mensualidad[0]['descripcion'];
}

if (mensualidad) {
    mostrar_datos()
}
let validar = () => {
    let error = false;

    if (inputgrado.value == '') {
        error = true;
        inputgrado.classList.add('error_input');
    } else {
        inputgrado.classList.remove('error_input');
    }
    if (inputinstitucion.value == '') {
        error = true;
        inputinstitucion.classList.add('error_input');
    } else {
        inputinstitucion.classList.remove('error_input');
    }
    if (inputdescripcion.value == '') {
        error = true;
        inputdescripcion.classList.add('error_input');
    } else {
        inputdescripcion.classList.remove('error_input');
    }

    return error;
};

let obtener_datos = () => {
    if (validar() == false) {
        let grado = inputgrado.selectedOptions[0].textContent;
        let institucion = inputinstitucion.value;
        let descripcion = inputdescripcion.value;


        Swal.fire({
            title: '¿Está seguro que desea actualizar?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, estoy seguro'
        }).then((result) => {
            if (result.value) {
                actualizar_mensualidad(grado,institucion, descripcion, _id);
            }
        })
    } else {
        swal.fire({
            type: 'warning',
            title: 'No se pudo actualizar',
            text: 'Por favor revise los campos resaltados'
        });

    }
};

boton_actualizar.addEventListener('click', obtener_datos);