'use strict'
const input_nombre = document.querySelector('#txt_nombre');
const input_descripcion = document.querySelector('#txt_descripcion');
const imgNoticia = document.querySelector('#previewimg');
const btn_actualizar = document.querySelector('#btn_actualizar');

let validar = () => {
    let error = false;

    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error_input');
    } else {
        input_nombre.classList.remove('error_input');
    }
    if (input_descripcion.value == '') {
        error = true;
        input_descripcion.classList.add('error_input');
    } else {
        input_descripcion.classList.remove('error_input');
    }
return error;
};

let get_param = (param) => {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param);

    return id;
};

let _id = get_param('id_noticias');

let noticias = buscar_noticia(_id);

let mostrar_datos = () => {

  input_nombre.value = noticias[0]['nombre'];
  input_descripcion.value = noticias[0]['descripcion'];
  imgNoticia.src = noticias[0]['imagen']
};

let obtener_datos=()=>{
  if(validar()==false){
    let id = _id;
    let nombre = input_nombre.value;
    let descripcion = input_descripcion.value;
    let imagen = imgNoticia.src;

    Swal.fire({
        title: '¿Está seguro que desea actualizar?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro'
    }).then((result) => {
        if (result.value) {
            actualizar_noticia(id,nombre, descripcion, imagen);
        }
    })
} else {
    swal.fire({
        type: 'warning',
        title: 'No se pudo actualizar',
        text: 'Por favor revise los campos resaltados'
    });

  }
}
btn_actualizar.addEventListener('click', obtener_datos);
mostrar_datos();
