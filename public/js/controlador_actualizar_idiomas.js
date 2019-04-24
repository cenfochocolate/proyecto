'use strict';
const input_idioma = document.querySelector('#txt_idioma');
const sltcodigo = document.querySelector('#sltcodigo');
const imgbandera = document.querySelector('#imagen_preview');
const btn_actualizar = document.querySelector('#btn_actualizar');

let get_param = (param) => {
    let url_string =  window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param);
    return id;
};

let _id = get_param('id_idioma');

let idioma = buscar_idioma(_id);

let mostrar_datos = () =>{
    input_idioma.value=idioma[0]['idioma'];
    
    let opciones_codigo = document.querySelectorAll('#sltcodigo option');

    for (let i = 0; i < opciones_codigo.length; i++) {
        if (opciones_codigo[i].textContent == idioma[0]['codigo']) {
            opciones_codigo[i].selected = true;
        }
    }
    
    let idIMG = idioma[0]['imagen'].split('upload/')[1];
    imgbandera.src = 'http://res.cloudinary.com/cenfochocolate/image/upload/' + idIMG;
}

if(idioma){
    mostrar_datos();
}

let obtener_datos = () =>{
    
    let idioma=input_idioma.value;
    let codigo_iso=sltcodigo.selectedOptions[0].textContent;
    let imagen=imgbandera.src;
   
    Swal.fire({
        title: 'Está seguro que desea actualizar el idioma?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro'
      }).then((result) => {
        if (result.value) {
            actualizar_idioma(idioma,codigo_iso, imagen, _id);
        }
      })
}
btn_actualizar.addEventListener('click', obtener_datos);