
'use strict';

const inputgrado = document.querySelector('#txt_grado');
const inputinstitucion = document.querySelector('#txt_institucion');
const inputdescripcion = document.querySelector('#txt_info');
const btn_actualizar = document.querySelector('#btn_actualizar');

let get_param = (param)=> {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let id= url.searchParams.get(param);

    return id;
};

let _id= get_param('id_mensualidad');

let mensualidad = buscar_mensualidad(_id);

let mostrar_datos = () =>{
    let opcion_grado = document.querySelectorAll('#txt_grado opcion');

    for (let i = 0; i < opcion_grado.length; i++) {
        if (opcion_grado[i].textContent == mensualidad[0]['grado']) {
          opcion_grado[i].selected = true;

        }

    }

    inputinstitucion.value = mensualidad[0]['institucion'];
    inputdescripcion.value = mensualidad[0]['descripcion'];
    } 

if(mensualidad){
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
        let grado = inputgrado.selectedOption[0].textContent;
        let institucion = inputinstitucion.value;
        let descripcion = inputdescripcion.value;
        
        actualizar_cita(grado, institucion, descripcion, _id);

    }else{
        swal.fire({
          type: 'warning',
          title: 'No se pudo actualizar',
          text: 'Por favor revise los campos resaltados'
        });
      }
};

btn_actualizar.addEventListener('click', obtener_datos);