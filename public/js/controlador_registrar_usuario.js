'use strict';
const input_tipo = document.querySelector('#slt_rol');
const input_identificacion = document.querySelector('#txt_identificacion');
const input_nombre = document.querySelector('#txt_nombre');
const input_papellido = document.querySelector('#txt_primer_apellido');
const input_sapellido = document.querySelector('#txt_segundo_apellido');
const input_nacionalidad = document.querySelector('#txt_nacionalidad');
const input_nombre_comercial = document.querySelector('#txt_nombre_comercial');
const input_nhijos = document.querySelector('#numero_hijos');
const select_anios = document.querySelector('#txt_anio');
const input_grado = document.forms.box.grado;
const input_clase = document.forms.box.clase;
const input_genero = document.forms.box.genero;
const input_especialidad = document.querySelector('#select_especialidad');
const input_historica = document.querySelector('#txt_ref');
const lst_provincia = document.querySelector('#select_provincia');
const lst_canton = document.querySelector('#select_canton');
const lst_distrito = document.querySelector('#select_distrito');
const input_direccion = document.querySelector('#txt_direccion');
const input_mail = document.querySelector('#txt_mail');
const input_telefono = document.querySelector('#txt_telefono');
const input_telefono_extencion = document.querySelector('#txt_extencion');
const input_fax = document.querySelector('#txt_fax');
const input_pagina_web = document.querySelector('#txt_pagina_web');
const input_url_foto = document.querySelector('#previewimg');
const input_url_doc = document.querySelector('#btn_cargar_doc');
const input_documentos = '//TODO ';
const input_contrasenna = document.querySelector('#txt_contrasenna');
const btn_enviar = document.querySelector('#btn_enviar');
const tc = sessionStorage.getItem('tipo_usuario');

$(function validar_select(){ /*this.setMasks();
 DOM ready */
    $(input_tipo).change(function() {
      console.log(this.value);

      if (this.value === 'padre') {
         $('#txt_identificacion').removeClass('error_input');;
         $('#txt_nombre').removeClass('error_input');;
         $('#txt_primer_apellido').removeClass('error_input');;
         $('#txt_segundo_apellido').removeClass('error_input');;
         $('#txt_nacionalidad').removeClass('error_input');;
         $('#txt_nombre_comercial').removeClass('error_input');;
         $('#numero_hijos').removeClass('error_input');;
         $('#txt_anio').removeClass('error_input');;
         $('#grado').removeClass('error_input');;
         $('#clase').removeClass('error_input');;
         $('#genero').removeClass('error_input');;
         $('#select_especialidad').removeClass('error_input');;
         $('#txt_ref').removeClass('error_input');;
         $('#select_provincia').removeClass('error_input');;
         $('#select_canton').removeClass('error_input');;
         $('#select_distrito').removeClass('error_input');;
         $('#txt_direccion').removeClass('error_input');;
         $('#txt_mail').removeClass('error_input');;
         $('#txt_telefono').removeClass('error_input');;
         $('#txt_extencion').removeClass('error_input');;
         $('#txt_fax').removeClass('error_input');;
         $('#txt_pagina_web').removeClass('error_input');;
         $('#image_preview').removeClass('error_input');;
         $('#btn_cargar_doc').removeClass('error_input');;
         $('#documentos').removeClass('error_input');;
         $('#txt_contrasenna').removeClass('error_input');;


        $('#box').removeClass('hideInput');
        $('#nombreComercial').addClass('hideInput');
        $('#anio_fundacion').addClass('hideInput');
        $('#grado').addClass('hideInput');
        $('#clase').addClass('hideInput');
        $('#genero').addClass('hideInput');
        $('#especialidad').addClass('hideInput');
        $('#div_ref_historica').addClass('hideInput');
        $('#name_extencion').addClass('hideInput');
        $('#txt_extencion').addClass('hideInput');
        $('#fax').addClass('hideInput');
        $('#pagina').addClass('hideInput');
        $('#documentos').addClass('hideInput');

        $('#div_telefono').removeClass('hideInput');
        $('#input_nhijos').removeClass('hideInput');
        $('#div_foto').removeClass('hideInput');
        $('#nombre').removeClass('hideInput');
        $('#papellido').removeClass('hideInput');
        $('#sapellido').removeClass('hideInput');
        $('#identificacion').removeClass('hideInput');
        $('#nacionalidad').removeClass('hideInput');
        $('#num_hijos').removeClass('hideInput');
        $('#provincia').removeClass('hideInput');
        $('#canton').removeClass('hideInput');
        $('#distrito').removeClass('hideInput');
        $('#direccion').removeClass('hideInput');
        $('#correo').removeClass('hideInput');
        $('#contrasenna').removeClass('hideInput');
        $('#div_submit').removeClass('hideInput');





      } else if ( this.value === 'institucion') {

        $('#txt_identificacion').removeClass('error_input');;
        $('#txt_nombre').removeClass('error_input');;
        $('#txt_primer_apellido').removeClass('error_input');;
        $('#txt_segundo_apellido').removeClass('error_input');;
        $('#txt_nacionalidad').removeClass('error_input');;
        $('#txt_nombre_comercial').removeClass('error_input');;
        $('#numero_hijos').removeClass('error_input');;
        $('#txt_anio').removeClass('error_input');;
        $('#grado').removeClass('error_input');;
        $('#clase').removeClass('error_input');;
        $('#genero').removeClass('error_input');;
        $('#select_especialidad').removeClass('error_input');;
        $('#txt_ref').removeClass('error_input');;
        $('#select_provincia').removeClass('error_input');;
        $('#select_canton').removeClass('error_input');;
        $('#select_distrito').removeClass('error_input');;
        $('#txt_direccion').removeClass('error_input');;
        $('#txt_mail').removeClass('error_input');;
        $('#txt_telefono').removeClass('error_input');;
        $('#txt_extencion').removeClass('error_input');;
        $('#txt_fax').removeClass('error_input');;
        $('#txt_pagina_web').removeClass('error_input');;
        $('#image_preview').removeClass('error_input');;
        $('#btn_cargar_doc').removeClass('error_input');;
        $('#documentos').removeClass('error_input');;
        $('#txt_contrasenna').removeClass('error_input');;


        $('#box').removeClass('hideInput');
        $('#nombreComercial').removeClass('hideInput');
        $('#anio_fundacion').removeClass('hideInput');
        $('#grado').removeClass('hideInput');
        $('#clase').removeClass('hideInput');
        $('#genero').removeClass('hideInput');
        $('#especialidad').removeClass('hideInput');
        $('#div_ref_historica').removeClass('hideInput');
        $('#div_telefono').removeClass('hideInput');
        $('#name_extencion').removeClass('hideInput');
        $('#txt_extencion').removeClass('hideInput');
        $('#fax').removeClass('hideInput');
        $('#pagina').removeClass('hideInput');
        $('#documentos').removeClass('hideInput');
        $('#correo').removeClass('hideInput');
        $('#contrasenna').removeClass('hideInput');
        $('#div_foto').removeClass('hideInput');
        $('#nombre').removeClass('hideInput');
        $('#provincia').removeClass('hideInput');
        $('#canton').removeClass('hideInput');
        $('#distrito').removeClass('hideInput');
        $('#direccion').removeClass('hideInput');
        $('#div_submit').removeClass('hideInput');
        $('#identificacion').removeClass('hideInput');

        $('#num_hijos').addClass('hideInput');
        $('#papellido').addClass('hideInput');
        $('#sapellido').addClass('hideInput');
        $('#nacionalidad').addClass('hideInput');



      } else if (this.value === 'null') {
        $('#txt_identificacion').removeClass('error_input');;
        $('#txt_nombre').removeClass('error_input');;
        $('#txt_primer_apellido').removeClass('error_input');;
        $('#txt_segundo_apellido').removeClass('error_input');;
        $('#txt_nacionalidad').removeClass('error_input');;
        $('#txt_nombre_comercial').removeClass('error_input');;
        $('#numero_hijos').removeClass('error_input');;
        $('#txt_anio').removeClass('error_input');;
        $('#grado').removeClass('error_input');;
        $('#clase').removeClass('error_input');;
        $('#genero').removeClass('error_input');;
        $('#select_especialidad').removeClass('error_input');;
        $('#txt_ref').removeClass('error_input');;
        $('#select_provincia').removeClass('error_input');;
        $('#select_canton').removeClass('error_input');;
        $('#select_distrito').removeClass('error_input');;
        $('#txt_direccion').removeClass('error_input');;
        $('#txt_mail').removeClass('error_input');;
        $('#txt_telefono').removeClass('error_input');;
        $('#txt_extencion').removeClass('error_input');;
        $('#txt_fax').removeClass('error_input');;
        $('#txt_pagina_web').removeClass('error_input');;
        $('#image_preview').removeClass('error_input');;
        $('#btn_cargar_doc').removeClass('error_input');;
        $('#documentos').removeClass('error_input');;
        $('#txt_contrasenna').removeClass('error_input');;

        $('#div_submit').addClass('hideInput');
        $('#nombreComercial').addClass('hideInput');
        $('#ced_juridica').addClass('hideInput');
        $('#anio_fundacion').addClass('hideInput');
        $('#grado').addClass('hideInput');
        $('#clase').addClass('hideInput');
        $('#genero').addClass('hideInput');
        $('#especialidad').addClass('hideInput');
        $('#div_ref_historica').addClass('hideInput');
        $('#div_telefono').addClass('hideInput');
        $('#name_extencion').addClass('hideInput');
        $('#txt_extencion').addClass('hideInput');
        $('#fax').addClass('hideInput');
        $('#pagina').addClass('hideInput');
        $('#documentos').addClass('hideInput');
        $('#correo').addClass('hideInput');
        $('#contrasenna').addClass('hideInput');
        $('#div_foto').addClass('hideInput');
        $('#nombre').addClass('hideInput');
        $('#provincia').addClass('hideInput');
        $('#canton').addClass('hideInput');
        $('#distrito').addClass('hideInput');
        $('#direccion').addClass('hideInput');
        $('#num_hijos').addClass('hideInput');
        $('#papellido').addClass('hideInput');
        $('#sapellido').addClass('hideInput');
        $('#identificacion').addClass('hideInput');
        $('#nacionalidad').addClass('hideInput');
      }
    });
});



function setMasks() {
    //numero telefono
    $(document).ready(function () {
        $('#txt_telefono').mask("(506)9999-9999");
    });
};

function validateEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

function getRadioButtonValue(ctrl) {
    for (let i = 0; i < ctrl.length; i++)
        if (ctrl[i].checked) return ctrl[i].value;
};

let validar = () => {
    let error = false;
    if(input_tipo.value == 'padre'){

          if (input_nombre.value=='') {
            error=true;
            input_nombre.classList.add('error_input');
          } else {
            input_nombre.classList.remove('error_input');
          }

          if (lst_provincia.options[lst_provincia.selectedIndex].value == 0) {
              error = true;
              lst_provincia.classList.add('error_input');
              lst_canton.classList.add('error_input');
              lst_distrito.classList.add('error_input');
          } else {
            lst_provincia.classList.remove('error_input');
            lst_canton.classList.remove('error_input');
            lst_distrito.classList.remove('error_input');
          }

          if (input_direccion.value=='') {
            error=true;
            input_direccion.classList.add('error_input');
          } else {
            input_direccion.classList.remove('error_input');
          }

          if (input_mail.value=='') {
            error==true;
            input_mail.classList.add('error_input');
          } else {
            input_mail.classList.remove('error_input');
          }

          if (input_contrasenna.value=='') {
            error=true;
            input_contrasenna.classList.add('error_input');
          } else {
            input_contrasenna.classList.remove('error_input');
          }

          if (input_telefono.value=='') {
              error=true;
              input_telefono.classList.add('error_input');
          } else {
            input_telefono.classList.remove('error_input');
          }

        if (input_papellido.value==''){
          error = true;
          input_papellido.classList.add('error_input');
        }else {
          input_papellido.classList.remove('error_input');
        }

        if (input_sapellido.value=='') {
          error = true;
          input_sapellido.classList.add('error_input');
        } else {
          input_sapellido.classList.remove('error_input');
        }

        if (input_identificacion.value==''){
          error = true;
          input_identificacion.classList.add('error_input');
        }else {
          input_identificacion.classList.remove('error_input');
        }

        if (input_nacionalidad.value==''){
          error = true;
          input_nacionalidad.classList.add('error_input');
        }else {
          input_nacionalidad.classList.remove('error_input');
        }

        if (input_nhijos.value==''){
          error = true;
          input_nhijos.classList.add('error_input');
        }else {
          input_nhijos.classList.remove('error_input');
        }

        //Aquí terminan las validaciones de los padres de familia

    }else{



          if (input_nombre.value=='') {
            error=true;
            input_nombre.classList.add('error_input');
          } else {
            input_nombre.classList.remove('error_input');
          }

          if (lst_provincia.options[lst_provincia.selectedIndex].value == 0) {
              error = true;
              lst_provincia.classList.add('error_input');
              lst_canton.classList.add('error_input');
              lst_distrito.classList.add('error_input');
          } else {
            lst_provincia.classList.remove('error_input');
            lst_canton.classList.remove('error_input');
            lst_distrito.classList.remove('error_input');
          }

          if (input_direccion.value=='') {
            error=true;
            input_direccion.classList.add('error_input');
          } else {
            input_direccion.classList.remove('error_input');
          }

          if (input_mail.value=='') {
            error==true;
            input_mail.classList.add('error_input');
          } else {
            input_mail.classList.remove('error_input');
          }

          if (input_contrasenna.value=='') {
            error=true;
            input_contrasenna.classList.add('error_input');
          } else {
            input_contrasenna.classList.remove('error_input');
          }

          if (input_telefono.value=='') {
              error=true;
              input_telefono.classList.add('error_input');
          } else {
            input_telefono.classList.remove('error_input');
          }

        if (input_nombre_comercial.value==''){
          error = true;
          input_nombre_comercial.classList.add('error_input');
        }else {
          input_nombre_comercial.classList.remove('error_input');
        }

        if (select_anios.value<1) {
          error=true;
          select_anios.classList.add('error_input');
        } else {
          select_anios.classList.remove('error_input');
        }

        if (input_especialidad.value=='0') {
          error= true;
          input_especialidad.classList.add('error_input');
        } else {
          input_especialidad.classList.remove('error_input')
        }

        if (input_telefono_extencion.value=='') {
          error=true;
          input_telefono_extencion.classList.add('error_input');
        } else {
          input_telefono_extencion.classList.remove('error_input');
        }

        if (input_fax.value=='') {
          error=true;
          input_fax.classList.add('error_input');
        } else {
          input_fax.classList.remove('error_input');
        }

    }
    return error;
};

let registrar = () => {

    if (!validar()) {

      if (input_tipo.value =='institucion') {
        let tipo = input_tipo.value;
        let url_foto = input_url_foto.src;
        let nombre = input_nombre.value;
        let nombre_comercial = input_nombre_comercial.value;
        let identificacion = input_identificacion.value;
        let anio_fundacion = select_anios.value;
        let grado = getRadioButtonValue(input_grado);
        let clase = getRadioButtonValue(input_clase);
        let genero = getRadioButtonValue(input_genero);
        let especialidad = input_especialidad.value;
        let refencia_historica = input_historica.value;
        let provincia = lst_provincia.selectedOptions[0].textContent;
        let canton = lst_provincia.selectedOptions[0].textContent;
        let distrito = lst_distrito.selectedOptions[0].textContent;
        let direccion = input_direccion.value;
        let aprobada = false;
        if(tc == "admin"){
         aprobada = true;
        }
        console.log(tc);
        console.log(aprobada);
        let ubicacion0 = onDragEnd();
        let ubicacion1 = ubicacion0.split(",");
        let longitud = ubicacion1[0];
        let latitud = ubicacion1[1];
        let url_mail = input_mail.value;
        let contrasenna =input_contrasenna.value;
        let telefono = input_telefono.value;
        let telefono_extencion = input_telefono_extencion.value;
        let fax = input_fax.value;
        let web = input_pagina_web.value;
        let url_archivo = input_url_doc.src;

        registrar_institucion(
          aprobada,
          tipo,
          identificacion,
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
          longitud,
          latitud,
          url_mail,
          telefono,
          telefono_extencion,
          fax,
          web,
          url_archivo,
          url_foto,
          contrasenna
          );
      } else{
        let tipo = input_tipo.value;
        let url_foto = input_url_foto.src;
        let nombre = input_nombre.value;
        let primer_apellido = input_papellido.value;
        let segundo_apellido = input_sapellido.value;
        let identificacion = input_identificacion.value;
        let nacionalidad = input_nacionalidad.value;
        let cantidad_de_hijos = input_nhijos.value;
        let provincia = lst_provincia.selectedOptions[0].textContent;
        let canton = lst_canton.selectedOptions[0].textContent;
        let distrito = lst_distrito.selectedOptions[0].textContent;
        let direccion = input_direccion.value;
        let ubicacion0 = onDragEnd();
        let ubicacion1 = ubicacion0.split(",")
        let aprobada = true;
        let longitud = ubicacion1[0];
        let latitud = ubicacion1[1];
        let url_mail = input_mail.value;
        let contrasenna =input_contrasenna.value;
        let telefono = input_telefono.value;

        registrar_padre(
          aprobada,
          tipo,
          identificacion,
          nombre,
          primer_apellido,
          segundo_apellido,
          nacionalidad,
          cantidad_de_hijos,
          provincia,
          canton,
          distrito,
          direccion,
          longitud,
          latitud,
          url_mail,
          telefono,
          url_foto,
          contrasenna
          );
      }
    }else {
        swal.fire({
            type: 'error',
            title: 'Ha ocurrido un error',
            text: 'Por favor complete los campos resaltados en rojo'
        });
    }

};

function establecer_provincias() {

    getProvincias(lst_provincia);

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

        $(lst_canton).html(html);
        $(lst_distrito).html(html);

    } else {
        getCantones(lst_canton, id_provincia);
    }
};

function establecer_distritos() {

    let id_provincia = lst_provincia.value;

    let id_canton = lst_canton.value;

    getDistritos(lst_distrito, id_provincia, id_canton);

};

this.setMasks();


establecer_provincias();
lst_provincia.addEventListener('change', establecer_cantones);
lst_canton.addEventListener('change', establecer_distritos);


btn_enviar.addEventListener('click', registrar);
