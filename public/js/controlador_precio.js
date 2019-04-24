'use strict';


const inputnumero = document.querySelector('#txt_numero');
const inputformato = document.querySelector('#txt_formato');
const inputprecio = document.querySelector('#txt_precio');
const fieldset_pago = document.querySelector('#fieldset_pago');
const botonRegistrar = document.querySelector('#btn_registrar');
const id_institucion = sessionStorage.getItem('idu');

let validar = () => {
    let error = false;
    let precio_seleccionado = document.querySelector('#fieldset_pago input[type=radio]:checked');

    if (inputnumero.value == ''){
        error = true;
        inputnumero.classList.add('error_input');
    }else{
        inputnumero.classList.remove('error_input');
    }

    if (inputformato.value == ''){
        error = true;
        inputformato.classList.add('error_input');
    }else{
        inputformato.classList.remove('error_input');
    }

    if (inputprecio.value == ''){
        error = true;
        inputprecio.classList.add('error_input')
    }else{
        inputprecio.classList.remove('error_input');
    }

    if (precio_seleccionado == null){
        error = true;
        fieldset_pago.classList.add('error_input');
    }else{
        fieldset_pago.classList.remove('error_input');
    }
    
    return error;
};


function obtener_datos ()  {

    if (validar()== false){
    let id = id_institucion;
    let numero = inputnumero.value;
    let formato = inputformato.selectedOptions[0].textContent;
    let precio = inputprecio.value;
    let pago = document.querySelector('#fieldset_pago input[type=radio]:checked').value;



     registrar_precio(id,numero, formato, precio, pago);
     
     console.log('Su número de cuenta es' + numero + 'el formato que se escogio es' + formato + 'con el precio de ' + precio + 'su pago' + pago + 'sera presencial');
     
    } else {
        swal.fire({
            type: 'warning',
            title: 'El comentario no fue enviado',
            text: 'Por favor revise los campos resaltados'
        });
    }
};

botonRegistrar.addEventListener('click', obtener_datos);