'use strict';

const input_nombre = document.querySelector('#txt_nombre');
const input_descripcion = document.querySelector('#txt_descripcion');
const img_sadicional = document.querySelector('#previewimg');

let get_param = (param) => {
    let url_string =  window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param);
    return id;
};

let _id = get_param('id_servicio');

let servicio = buscar_servicio(_id);

let mostrar_datos = () =>{
    input_nombre.value=servicio[0]['nombre'];
    input_descripcion.value=servicio[0]['descripcion'];
    img_sadicional.value=servicio[0]['sadional'];
}
if(servicio){
    mostrar_datos();
}

let obtener_datos = () =>{
    let nombre=input_nombre.value;
    let descripcion= input_descripcion.value;
    let sadional=img_sadicional.value;

    Swal.fire({
        title: 'Está seguro que desea actualizar los servicios adicionales?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro'
      }).then((result) => {
        if (result.value) {
            actualizar_servicio(nombre, descripcion,sadional, _id);
        }
      })
}

btn_actualizar.addEventListener('click', obtener_datos);