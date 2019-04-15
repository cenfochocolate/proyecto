'use strict'
const input_paginacomercial = document.querySelector('#txt_paginac');
const btn_actualizar = document.querySelector('#btn_actualizar');

const id_ins = sessionStorage.getItem('idu');

let get_param = (param) => {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param);

    return id;
};

let _id = get_param('id_pagina');

let pagina = buscar_pagina(_id);

let mostrar_datos = () => {

    input_paginacomercial.value = pagina[0]['pagina'];
 
}


if (pagina) {
    mostrar_datos()
}

let validar = () => {
    let error = false;
    if (
        input_paginacomercial.value == '') {
        error = true;
        
    input_paginacomercial.classList.add('error_input');
    } else {
       
    input_paginacomercial.classList.remove('error_input');
    }


    return error;
};


let obtener_datos = () => {

    if (validar() == false) {
        // Se ejecuta solo si la validación no da error
        let id_institucion = id_ins;
        let pagina_comercial = input_paginacomercial.value;
    
        registrar_paginacomercial (id_institucion,pagina_comercial, _id);

    } else {
        swal.fire({
            type: 'warning',
            title: 'La pagina no fue actualizada',
            text: 'Por favor revise los campos resaltados'
        });
    }

};

btn_actualizar.addEventListener('click', obtener_datos);
