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
    sltcodigo.value=idioma[0]['codigo iso'];
    imgbandera.value=idioma[0]['bandera'];
}

if(idioma){
    mostrar_datos();
}