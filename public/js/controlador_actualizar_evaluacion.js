'use strict';

const txt_criterio1 = document.querySelector('#txt_criterio_1');
const inputcriterio_1 = document.querySelector('#criterio_1');
const btn_actualizar = document.querySelector('#btn_actualizar');

let get_param = (param)=> {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let id= url.searchParams.get(param);

    return id;
};

let _id = get_param('id_criterio');

let criterio = buscar_criterio(_id);

let mostrar_datos = () =>{
    
    txt_criterio1.value = criterio[0]['nombre'];
    inputcriterio_1.value = criterio[0]['calificacion'];
} 

if(criterio){
    mostrar_datos()
}

let validar = () => {
    let error = false;
    if ( txt_criterio1.value == '') {
        error = true;
        txt_criterio1.classList.add('error_input');
    } else {
        txt_criterio1.classList.remove('error_input');
    }
    if (inputcriterio_1.value == '') {
        error = true;
        inputcriterio_1.classList.add('error_input');
    } else {
        inputcriterio_1.classList.remove('error_input');
    }

    return error;
};
let obtener_datos = () => {

    if (validar() == false) {
        // Se ejecuta solo si la validación no da error
        let nombre = txt_criterio1.value;
        let calificacion = inputcriterio_1.value;

        Swal.fire({
            title: 'Está seguro que desea actualizar la matrícula?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, estoy seguro'
        }).then((result) => {
            if (result.value) {
            
                actualizar_criterio(nombre ,calificacion, _id);
            }
        })
    } else {
        swal.fire({
            type: 'warning',
            title: 'La evaluacion no fue actualizada',
            text: 'Por favor revise los campos resaltados'
        });
    }

};

btn_actualizar.addEventListener('click', obtener_datos);
