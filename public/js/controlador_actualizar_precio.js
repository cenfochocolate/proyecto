'use strict';

const inputnumero = document.querySelector('#txt_numero');
const inputformato = document.querySelector('#txt_formato');
const inputprecio = document.querySelector('#txt_precio');
const fieldset_pago = document.querySelector('#fieldset_pago');
const btn_actualizar = document.querySelector('#btn_actualizar');

let get_param = (param) => {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param);

    return id;
};

let _id = get_param('id_precio');

let precio = buscar_precio(_id);

let mostrar_datos = () => {
    inputnumero.value = precio[0]['numero'];
    inputformato.value = precio[0]['formato'];
    inputprecio.value = precio[0]['precio'];
    fieldset_pago.value = precio[0]['pago']
}

if (precio) {
    mostrar_datos()
}

let validar = () => {
    let error = false;
    if (
        inputnumero.value == '') {
        error = true;

        inputnumero.classList.add('error_input');
    } else {

        inputnumero.classList.remove('error_input');
    }
    if (
        inputformato.value == '') {
        error = true;

        inputformato.classList.add('error_input');
    } else {

        inputformato.classList.remove('error_input');
    }
    if (
        inputprecio.value == '') {
        error = true;

        inputprecio.classList.add('error_input');
    } else {

        inputprecio.classList.remove('error_input');
    }
    if (
        fieldset_pago.value == '') {
        error = true;

        fieldset_pago.classList.add('error_input');
    } else {

        fieldset_pago.classList.remove('error_input');
    }
    return error;
};

let obtener_datos = () => {
    if (validar() == false) {
  
    
 
        let numero = inputnumero.value;
        let formato =  inputformato.value;
        let precio = inputprecio.value;
        let pago = fieldset_pago.value;

        actualizar_precio(numero, formato, precio, pago, _id);

    }else{
        swal.fire({
          type: 'warning',
          title: 'No se pudo actualizar',
          text: 'Por favor revise los campos resaltados'
        });
      }
    

   
};

btn_actualizar.addEventListener('click', obtener_datos);