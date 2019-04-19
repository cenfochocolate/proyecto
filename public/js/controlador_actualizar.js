'use strict';
const input_nombre = document.querySelector('#txt_nombre');
const input_descripcion = document.querySelector('#txt_descripcion');
const imgNoticia = document.querySelector('#previewimg');


let get_param = (param) => {
    let url_string =  window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param);
    return id;
};

let _id = get_param('id_noticia');

let noticia = buscar_noticia(_id);

let mostrar_datos = () =>{

    input_nombre.value=noticia[0]['nombre'];
    input_descripcion.value=noticia[0]['descripcion'];
    imgNoticia.value=noticia[0]['noticia'];

}

if(noticia){
    mostrar_datos();
}

let obtener_datos = () =>{
    let nombre = input_nombre.value;
    let descripcion = input_descripcion.value;
    let noticia= imgNoticia.value;

    Swal.fire({
        title: 'Está seguro que desea actualizar la noticia?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro'
      }).then((result) => {
        if (result.value) {
            actualizar_noticia(nombre, descripcion, noticia, _id);
        }
      })
     
    
};

btn_actualizar.addEventListener('click', obtener_datos);