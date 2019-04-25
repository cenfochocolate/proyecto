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
    

    let idIMG = noticia[0]['imagen'].split('upload/')[1];
    imgNoticia.src = 'http://res.cloudinary.com/cenfochocolate/image/upload/' + idIMG;

}

if(noticia){
    mostrar_datos();
}

let obtener_datos = () =>{
    let nombre = input_nombre.value;
    let descripcion = input_descripcion.value;
    let imagen= imgNoticia.src;
    
    Swal.fire({
        title: '¿Está seguro que desea actualizar la noticia?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro'
      }).then((result) => {
        if (result.value) {
            actualizar_noticia(nombre, descripcion, imagen, _id);
        }
      })
     
    
};

btn_actualizar.addEventListener('click', obtener_datos);