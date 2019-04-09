'use strict';

const input_nombre = document.querySelector('#txt_nombre');
const input_primer_apellido = document.querySelector('#txt_primer_apellido');
const input_segundo_apellido = document.querySelector('#txt_segundo_apellido');
const input_identificacion = document.querySelector('#txt_identificacion');
const input_nacionalidad = document.querySelector('#txt_nacionalidad');
const selectProvincias = document.querySelector('#sltProvincias');
const selectCantones = document.querySelector('#sltCantones');
const selectDistritos = document.querySelector('#sltDistritos');
const input_cantidad_de_hijos = document.querySelector('#txt_cantidad_de_hijos');
const input_correo = document.querySelector('#txt_correo');
const boton_enviar = document.querySelector('#btn_registrar');



let provincias = obtener_provincias();
let cantones = obtener_cantones();
let distritos = obtener_distritos();
llenarProvincias();


let validar = () => {
    let error = false;

    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error_input');
    } else {
        input_nombre.classList.remove('error_input');
    }
    if (input_primer_apellido.value == '') {
        error = true;
        input_primer_apellido.classList.add('error_input');
    } else {
        input_primer_apellido.classList.remove('error_input');
    }
    if (input_segundo_apellido.value == '') {
        error = true;
        input_segundo_apellido.classList.add('error_input');
    } else {
        input_segundo_apellido.classList.remove('error_input');
    }
    if (input_identificacion.value == '') {
        error = true;
        input_identificacion.classList.add('error_input');
    } else {
        input_identificacion.classList.remove('error_input');
    }
    if (input_nacionalidad.value == '') {
        error = true;
        input_nacionalidad.classList.add('error_input');
    } else {
        input_nacionalidad.classList.remove('error_input');
    }
    if (selectProvincias.value == '') {
        error = true;
        selectProvincias.classList.add('error_input');
    } else {
        selectProvincias.classList.remove('error_input');
    }

    if (selectCantones.value == '') {
        error = true;
        selectCantones.classList.add('error_input');
    } else {
        selectCantones.classList.remove('error_input');
    }

    if (selectDistritos.value == '') {
        error = true;
        selectDistritos.classList.add('error_input');
    } else {
        selectDistritos.classList.remove('error_input');
    }
    if (input_cantidad_de_hijos.value == '') {
        error = true;
        input_cantidad_de_hijos.classList.add('error_input');
    } else {
        input_cantidad_de_hijos.classList.remove('error_input');
    }
    if (input_correo.value == '') {
        error = true;
        input_correo.classList.add('error_input');
    } else {
        input_correo.classList.remove('error_input');
    }
    return error;
};

let mostrar_datos = () => {
    let nombre = input_nombre.value;
    let primer_apellido = input_primer_apellido.value;
    let segundo_apellido = input_segundo_apellido.value;
    let identificacion = input_identificacion.value;
    let nacionalidad = input_nacionalidad.value;
    let provincia = selectProvincias.value;
    let canton = selectCantones.value;
    let distrito = selectDistritos.value;
    let cantidad_de_hijos = input_cantidad_de_hijos.value;
    let correo = input_correo.value;



    obtenerDatos();


};

boton_enviar.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    let nombre = input_nombre.value;
    let primer_apellido = input_primer_apellido.value;
    let segundo_apellido = input_segundo_apellido.value;
    let identificacion = Number(input_identificacion.value);
    let nacionalidad = input_nacionalidad.value;
    let provincia = selectProvincias.value;
    let canton = selectCantones.value;
    let distrito = selectDistritos.value;
    let cantidad_de_hijos = Number(input_cantidad_de_hijos.value);
    let correo = input_correo.value;
 

    for(let i =0;i<provincias.length;i++){
        if (provincia==provincias[i].idProvincia) {
            provincia=provincias[i].nombre;
        }
    }

    for(let i =0;i<cantones.length;i++){
        if (canton==cantones[i].idCanton) {
            canton=cantones[i].nombre;
        }
    }

    for(let i =0;i<distritos.length;i++){
        if (distrito==distritos[i].idDistrito) {
            distrito=distritos[i].nombre;
        }
    }
    
    if (validar() == false) {
        registrar_padres(nombre, primer_apellido, segundo_apellido, identificacion, nacionalidad, provincia, canton, distrito, cantidad_de_hijos, correo)

        swal.fire({
            type: 'success',
            title: 'El registro se correctamente',
            text: `El registro se hiso correctamente `
        });

    } else {
        swal.fire({
            type: 'warning',
            title: 'No se completo el registro',
            text: 'Por favor revise los campos resaltados'
        });
    }
}

function llenarProvincias() {
    for (let i = 0; i < provincias.length; i++) {
        let opcion = new Option(provincias[i].nombre);
        opcion.value = provincias[i].idProvincia;
        selectProvincias.appendChild(opcion);
    }
};

function llenarCantones(pidProvincia) {
    selectCantones.innerHTML = '';
    selectCantones.appendChild(new Option('--Seleccione un cantón--'));

    for (let i = 0; i < cantones.length; i++) {
        if (pidProvincia == cantones[i].Provincia_idProvincia) {
            let opcion = new Option(cantones[i].nombre);
            opcion.value = cantones[i].idCanton;
            selectCantones.appendChild(opcion);
        }
    }
};

function llenarDistritos(pidCanton) {
    selectDistritos.innerHTML = '';
    selectDistritos.appendChild(new Option('--Seleccione un distrito--'));

    for (let i = 0; i < distritos.length; i++) {
        if (pidCanton == distritos[i].Canton_idCanton) {
            let opcion = new Option(distritos[i].nombre);
            opcion.value = distritos[i].idDistrito;
            selectDistritos.appendChild(opcion);
        }
    }

};




selectProvincias.addEventListener('change', function () {
    llenarCantones(this.value); //this.value es el valor de la opción de provincia seleccionada
});

selectCantones.addEventListener('change', function () {
    llenarDistritos(this.value); //this.value es el valor de la opción de cantones seleccionada
});