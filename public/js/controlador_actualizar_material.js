'use strict';

const input_nombre_institucion =document.querySelector('#txt_nombre_institucion');
const input_descripcion = document.querySelector('#txt_descripcion');
const boton_enviar = document.querySelector('#btn_registrar');

let get_param = (param)=> {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let id= url.searchParams.get(param);

    return id;
};

let _id= get_param('id_material');

let material= buscar_material(_id);

let mostrar_datos = () =>{


    input_nombre_institucion.value = material[0]['nombre_institucion'];
    input_descripcion.value = material[0]['descripcion'];
  
    
    

    } 


if(material){
    mostrar_datos()
}

let validar=()=>{
    let error=false;

    if (input_nombre_institucion.value == '') {
        error = true;
        input_nombre_institucion.classList.add('error_input');
    } else {
        input_nombre_institucion.classList.remove('error_input');
    }
    if (input_descripcion.value == '') {
        error = true;
        input_descripcion.classList.add('error_input');
    } else {
        input_descripcion.classList.remove('error_input');
    }

    return error;
};

let obtener_datos =() => {

    if (validar()==false) {

    let nombre_institucion = input_nombre_institucion.value;
    let descripcion=input_descripcion.value;

    Swal.fire({
        title: '¿Está seguro que desea actualizar el material?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro'
    }).then((result) => {
        if (result.value) {
    actualizar_material(nombre_institucion,descripcion, _id)
        }
    });
  }else{
    swal.fire({
        type: 'warning',
        title: 'No se completo el registro',
        text: 'Por favor revise los campos resaltados'
    });
  }
};
boton_enviar.addEventListener('click', obtener_datos);

