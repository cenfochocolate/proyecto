'use strict';
const input_util = document.querySelector('#txt_util');
const textarea_descripcion = document.querySelector('#txt_descripcion');
const input_numero = document.querySelector('#numero_util');
const select_nivel = document.querySelector('#select_nivel');
const boton_actualizar = document.querySelector('#btn_actualizar');

let get_param = (param) => {
    let url_string =  window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param);
    return id;
};
let _id = get_param('id_mep');

let util = buscar_utile(_id); 

let mostrar_datos = () =>{
    input_util.value=util[0]['util'];
    textarea_descripcion.value=util[0]['descripcion'];
    input_numero.value= util[0]['cantidad'];
    select_nivel.value=util[0]['nivel'];
}
if(util){
    mostrar_datos();
}
let obtener_datos = () =>{
    let util = input_util.value;
    let descripcion = textarea_descripcion.value;
    let numero = input_numero.value;
    let nivel = select_nivel.value;

    Swal.fire({
        title: '¿Está seguro que desea actualizar?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro'
      }).then((result) => {
        if (result.value) {
          actualizar_utiles( util, descripcion, numero,nivel, _id);
        }
      })
     
    
};

boton_actualizar.addEventListener('click', obtener_datos);