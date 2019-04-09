'use strict';
const input_cedula = document.querySelector('#txt_cedula');
const input_nombre = document.querySelector('#txt_nombre');
const input_nombre_comercial = document.querySelector('#txt_nombre_comercial');
let input_clase;
let input_genero;
let input_grado;
let input_especialidad;
const input_provincia = document.querySelector("#txt_provincia");
const input_anio_funda = document.querySelector('#txt_anio_funda');
const input_historica = document.querySelector('#txt_referen_historica');
const input_telefono = document.querySelector('#txt_num_telefono');
const input_fax = document.querySelector('#txt_fax');
const input_web = document.querySelector('#txt_web');
const input_facebook = document.querySelector('#txt_facebook');
const input_twitter = document.querySelector('#txt_twitter');
const input_instagram = document.querySelector('#txt_instagram');
const input_direccion = document.querySelector('#txt_direccion');
const input_canton = document.querySelector('#txt_canton');
const input_distrito = document.querySelector('#txt_distrito');
const input_url_maps = document.querySelector('#txt_direccion'); //todo 
const input_documentos = '//TODO ';
const btn_enviar = document.querySelector('#btn_enviar');


let marcar_radios = () => {
    input_clase = document.getElementById('select_tipo');
    input_genero = document.getElementById('select_genero');
    input_grado = document.getElementById('select_grado');
    input_especialidad = document.getElementById('select_especialidad');
}


let obtener_datos = () => {
    try {

        marcar_radios();

        registrar_institucion(verificar_id(input_cedula.value),
            campo_requerido(input_nombre.value),
            campo_requerido(input_nombre_comercial.value),
            input_anio_funda.value,
            campo_requerido(input_grado.value),
            campo_requerido(input_clase.value),
            input_genero.value,
            input_especialidad.value,
            input_historica.value,
            campo_requerido(input_provincia.value),
            campo_requerido(input_canton.value),
            campo_requerido(input_distrito.value),
            campo_requerido(input_direccion.value),
            input_url_maps.value,
            campo_requerido(input_telefono.value),
            input_fax.value,
            input_web.value,
            input_facebook.value,
            input_twitter.value,
            input_instagram.value,
            input_documentos.value);


    } catch (e) {

        swal.fire({
            type: 'warning',
            title: 'Error al registrar',
            text: e
        });
    }

};


btn_enviar.addEventListener('click', obtener_datos);