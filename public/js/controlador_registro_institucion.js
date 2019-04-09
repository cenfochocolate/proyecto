'use strict';
const input_cedula = document.querySelector('#txt_cedula');
const input_nombre = document.querySelector('#txt_nombre');
const input_nombre_comercial = document.querySelector('#txt_nombre_comercial');
const input_anio_funda = document.getElementById('select_anio_fundacion');
const input_grado = document.forms.box.grado;
const input_clase = document.forms.box.clase;
const input_genero = document.forms.box.genero;
const input_especialidad = document.getElementById('select_especialidad');
const input_historica = document.querySelector('#txt_ref');
const input_provincia = document.getElementById('select_provincia');
let input_canton = document.getElementById('select_canton');
let input_distrito = document.getElementById('select_distrito');
const input_direccion = document.querySelector('#txt_direccion');
const input_mail = document.querySelector('#txt_mail');
const input_telefono = document.querySelector('#txt_telefono');
const input_telefono_extencion = document.querySelector('#txt_extencion');
const input_fax = document.querySelector('#txt_fax');
const input_pagina_web = document.querySelector('#txt_pagina_web');
const input_url_foto = document.querySelector('#image_preview');
const input_url_doc = document.querySelector('#btn_cargar_doc');


//url archivo
//url foto

//todo
const input_documentos = '//TODO ';
const btn_enviar = document.querySelector('#btn_enviar');
const txt_cedula = document.querySelector('#txt_cedula');
const select_anios = document.querySelector('#select_anio_fundacion');
const lst_provincia = document.querySelector('#select_provincia');
const lst_canton = document.querySelector('#select_canton');
const lst_distrito = document.querySelector('#select_distrito');

function validar_inicio_sesion() {
    console.log('se dejo el foco');

};


function setMasks() {
    //cedula juridica
    $(document).ready(function () {
        $('#txt_cedula').mask("3-999-999999");
    });
    //numero telefono
    $(document).ready(function () {
        $('#txt_telefono').mask("(50Salida temprana	Se estará saliendo temprano este viernes	￼
Viernes6)9999-9999");
    });
};
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

function setConsecutivoAnios() {
    //hacemos un ciclo teniendo en cuenta el a�o actual
    //lo recorremos mientras agregamos los elementos al
    //select de a�os.
    //pd: como minimo se tiene tiene 1983 que es el a�o de la escuela mas
    //antigua de cr
    for (var i = new Date().getFullYear(); i > 1983; i--) {
        let option = document.createElement('option');
        option.text = i;
        option.value = i;
        select_anios.add(option);
    }

};

function getRadioButtonValue(ctrl) {
    for (let i = 0; i < ctrl.length; i++)
        if (ctrl[i].checked) return ctrl[i].value;
};


let validar = () => {
    let malo = true;


    //cedula
    if ((input_cedula.value == '') || ((input_cedula.value.length <= 10))) {
        document.getElementById('input_id').style.borderColor = "red";
        malo = true;
    } else {
        document.getElementById('input_id').style.borderColor = "#c9c9c9";
        malo = false;
    }
    //nommbre comercial
    if (input_nombre_comercial.value == '') {
        malo = true;
        document.getElementById('input_nombre_comercial').style.borderColor = "red";

    } else {
        document.getElementById('input_nombre_comercial').style.borderColor = "#c9c9c9";
        malo = false;
    }
    //nombre
    if (input_nombre.value == '') {
        malo = true;
        document.getElementById('input_nombre').style.borderColor = "red";
    } else {
        documentSalida temprana	Se estará saliendo temprano este viernes	￼
Viernes.getElementById('input_nombre').style.borderColor = "#c9c9c9";
        malo = false;
    }
    //anio fundacion
    if (input_anio_funda.value == '0') {
        malo = true;
        document.getElementById('anio_fundacion').style.borderColor = "red";
    } else {
        malo = false;
        document.getElementById('anio_fundacion').style.borderColor = "#c9c9c9";
    }
    //provincia
    if (input_provincia.options[input_provincia.selectedIndex].value == 0) {
        malo = true;
        document.getElementById('input_provincia').style.borderColor = "red";
        document.getElementById('div_canton').style.borderColor = "red";
        document.getElementById('div_distrito').style.borderColor = "red";
        //div_distrito

    } else {
        document.getElementById('input_provincia').style.borderColor = "#c9c9c9";
        document.getElementById('div_canton').style.borderColor = "#c9c9c9";
        document.getElementById('div_distrito').style.borderColor = "#c9c9c9";
        malo = false;
    }
    //especialidad
    if (input_especialidad.options[input_especialidad.selectedIndex].value == 0) {
        malo = true;
        document.getElementById('input_especialidad').style.borderColor = "red";
        malo = true;
    } else {
        document.getElementById('input_especialidad').style.borderColor = "#c9c9c9";
        malo = false;
    }
    //direccion
    if (input_direccion.value == '') {
        malo = true;
        document.getElementById('input_direccion').style.borderColor = "red";
    } else {
        document.getElementById('input_direccion').style.borderColor = "#c9c9c9";
        malo = false;
    }
    //mail
    if (!(validateEmail(input_mail.value)) || (input_mail.value == '')) {
        malo = true;
        document.getElementById('input_correo').style.borderColor = "red";

    } else {
        document.getElementById('input_correo').style.borderColor = "#c9c9c9";
        malo = false;
    }
    //telefono
    if ((input_telefono.value == '') || (input_telefono.value.length != 14)) {
        malo = true;
        document.getElementById('div_telefono').style.borderColor = "red";
    } else {
        document.getElementById('div_telefono').style.borderColor = "#c9c9c9";
        malo = false;
    }
    //http://localhost:3000/public/registrar_instituciones.html

    //foto
    if (input_url_foto.src == 'http://localhost:3000/public/registrar_instituciones.html') {
        malo = true;
        document.querySelector('#div_image').style.borderColor = "red";
    } else {
        document.querySelector('#div_image').style.borderColor = "green";
        malo = false;
    }

    //doc
    if (!input_url_doc.src) {//true
        document.querySelector('#input_cargar_doc').style.borderColor = "red";
        malo = true;
    } else {
        document.querySelector('#input_cargar_doc').style.borderColor = "green";
        malo = false;
    }
    return malo;
};

let registrar = () => {

    if (!validar()) {

        let cedula = input_cedula.value;
        let nombre = input_nombre.value;
        let nombre_comercial = input_nombre_comercial.value;
        let anio_fundacion = input_anio_funda.value;
        let grado = getRadioButtonValue(input_grado);
        let clase = getRadioButtonValue(input_clase);
        let genero = getRadioButtonValue(input_genero);
        let especialidad = input_especialidad.value;
        let refencia_historica = input_historica.value;
        let provincia = input_provincia.value;
        let canton = input_canton.value;
        let distrito = input_distrito.value;
        let direccion = input_direccion.value;
        let url_mail = input_mail.value;
        let telefono = input_telefono.value;
        let telefono_extencion = input_telefono_extencion.value;
        let fax = input_fax.value;
        let web = input_pagina_web.value;
        let url_archivo = input_url_doc.src;
        let url_foto = input_url_foto.src;

        Salida temprana	Se estará saliendo temprano este viernes	￼
Viernes

        registrar_institucion(
            cedula,
            nombre,
            nombre_comercial,
            anio_fundacion,
            grado,
            clase,
            genero,
            especialidad,
            refencia_historica,
            provincia,
            canton,
            distrito,
            direccion,
            url_mail,
            telefono,
            telefono_extencion,
            fax,
            web,
            url_archivo,
            url_foto);


    } else {

        swal.fire({
            type: 'error',
            title: 'Upps!',
            text: 'valida los campos marcados en rojo'
        });
    }

};

function establecer_provincias() {

    getProvincias('#select_provincia');

    //$('#select_provincia').html(ht);

    ///lst_provincia.html(getProvincias());
};

function establecer_cantones() {

    let id_provincia = lst_provincia.value;

    if (id_provincia == "0") {

        let option = document.createElement('option');
        option.text = 'Seleccione';
        option.value = "0";

        lst_canton.add(option);
        lst_distrito.add(option);

        let html = "<select>";
        html += "<option value='" + 0 + "'>Seleccione</option>";
        html += "</select";

        $('#select_canton').html(html);
        $('#select_distrito').html(html);

    } else {
        getCantones('#select_canton', id_provincia);
    }
};

function establecer_distritos() {

    let id_provincia = lst_provincia.value;

    let id_canton = lst_canton.value;

    getDistritos('#select_distrito', id_provincia, id_canton);

};

this.setMasks();
setConsecutivoAnios();





establecer_provincias();
lst_provincia.addEventListener('change', establecer_cantones);
lst_canton.addEventListener('change', establecer_distritos);

//lst_distrito.addEventListener('change', setDistritoData);

btn_enviar.addEventListener('click', registrar);
txt_cedula.addEventListener('focusout', validar_inicio_sesion);
