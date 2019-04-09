'use strict'
const input_nombre = document.querySelector('#txt_nombre');
const input_correo = document.querySelector('#txt_correo');
const input_contrasena = document.querySelector('#txt_contrasena') ;
const input_cjuridica = document.querySelector('#txt_cedulaj');
const slt_sector = document.querySelector('#slt_sector');
const slt_tipo = document.querySelector('#slt_tipo') ;
const slt_clase = document.querySelector('#slt_clase');
const slt_genero = document.querySelector('#slt_genero');
const input_ncomercial = document.querySelector('#txt_nombrecomercial');
const input_afundacion = document.querySelector('#txt_afundacion');
const input_rhistorica = document.querySelector('#txt_rhistorica') ;
const dctIns = document.querySelector('#previewarc');
const input_telefono = document.querySelector('#txt_telefono');
const input_fax = document.querySelector('#txt_fax');
const input_sweb = document.querySelector('#txt_sweb');
const input_ncontacto= document.querySelector('#txt_nombrecontacto');
const input_tcontacto= document.querySelector('#txt_telefonocontacto');
const btn_registrar = document.querySelector('#btn_registrar');

let validar = () => {
    let error = false;

    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error_input');
    } else {
        input_nombre.classList.remove('error_input');
    }
    if (input_correo.value == '') {
        error = true;
        input_correo.classList.add('error_input');
    } else {
        input_correo.classList.remove('error_input');
    }
    if (input_contrasena.value == '') {
        error = true;
        input_contrasena.classList.add('error_input');
    } else {
        input_contrasena.classList.remove('error_input');
    }
    if (input_cjuridica.value == '') {
        error = true;
        input_cjuridica.classList.add('error_input');
    } else {
        input_cjuridica.classList.remove('error_input');
    }
    if (slt_sector.value == 'null') {
        error = true;
        slt_sector.classList.add('error_input');
    } else {
        slt_sector.classList.remove('error_input');
    }
    if (slt_tipo.value == 'null') {
        error = true;
        slt_tipo.classList.add('error_input');
    } else {
        slt_tipo.classList.remove('error_input');
    }
    if (slt_clase.value == 'null') {
        error = true;
        slt_clase.classList.add('error_input');
    } else {
        slt_clase.classList.remove('error_input');
    }
    if (slt_genero.value == 'null') {
        error = true;
        slt_genero.classList.add('error_input');
    } else {
        slt_genero.classList.remove('error_input');
    }
    if (input_ncomercial.value == '') {
        error = true;
        input_ncomercial.classList.add('error_input');
    } else {
        input_ncomercial.classList.remove('error_input');
    }
    if (input_afundacion.value == '') {
        error = true;
        input_afundacion.classList.add('error_input');
    } else {
        input_afundacion.classList.remove('error_input');
    }
    if (input_rhistorica.value == '') {
        error = true;
        input_rhistorica.classList.add('error_input');
    } else {
        input_rhistorica.classList.remove('error_input');
    }
    if (input_telefono.value == '') {
        error = true;
        input_telefono.classList.add('error_input');
    } else {
        input_telefono.classList.remove('error_input');
    }
    if (input_fax.value == '') {
        error = true;
        input_fax.classList.add('error_input');
    } else {
        input_fax.classList.remove('error_input');
    }
    if (input_sweb.value == '') {
        error = true;
        input_sweb.classList.add('error_input');
    } else {
        input_sweb.classList.remove('error_input');
    }
return error;
};

let obtener_datos = () => {

    if (validar() == false) {
        let nombre = input_nombre.value;
        let correo = input_correo.value;
        let contrasena = input_contrasena.value;
        let cedulaj = input_cjuridica.value;
        let sector = slt_sector.value;
        let tipo = slt_tipo.value;
        let clase = slt_clase.value;
        let genero = slt_genero.value;
        let ncomercial = input_ncomercial.value;
        let afundacion = input_afundacion.value;
        let rhistorica = input_rhistorica.value;
        let documento = dctIns.src;
        let telefono = input_telefono.value;
        let fax = input_fax.value;
        let sweb = input_sweb.value;
        let nombrecontacto = input_ncontacto.value;
        let telefonocontacto = input_tcontacto.value;
        registrar_institucion(nombre, correo , contrasena , cedulaj, sector, tipo, clase, genero , ncomercial ,afundacion,
                              rhistorica, documento, telefono, fax, sweb, nombrecontacto, telefonocontacto);


    } else {
        swal.fire({
            type: 'warning',
            title: 'La institución no fue registrada',
            text: 'Por favor revise los campos resaltados'
        });
    }

};
btn_registrar.addEventListener('click', obtener_datos);
