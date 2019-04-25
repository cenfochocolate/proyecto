'use strict';

const inputnivel = document.querySelector('#txt_nivel');
const inputdescripcion = document.querySelector('#txt_info');
const boton_actualizar = document.querySelector('#btn_actualizar');

let get_param = (param) => {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param);

    return id;
};

let _id = get_param('id_requisito');

let requisito = buscar_requisito(_id);

let mostrar_datos = () => {

    let opciones_nivel = document.querySelectorAll('#txt_nivel option');

    for (let i = 0; i < opciones_nivel.length; i++) {
        if (opciones_nivel[i].textContent == requisito[0]['nivel']) {
            opciones_nivel[i].selected = true;
        }
    }

    inputdescripcion.value = requisito[0]['descripcion'];

}
if (requisito) {
    mostrar_datos()
}

let validar = () => {

    let error = false;

    if (inputnivel.value == '') {
        error = true;
        inputnivel.classList.add('error_input');
    } else {
        inputnivel.classList.remove('error_input');
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
        let nivel = inputnivel.selectedOptions[0].textContent;
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
            
                actualizar_requisito(nivel, descripcion, _id);
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
