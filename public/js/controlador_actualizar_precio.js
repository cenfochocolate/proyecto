'use strict';

const inputnumero = document.querySelector('#txt_numero');
const inputformato = document.querySelector('#txt_formato');
const inputprecio = document.querySelector('#txt_precio');
const fieldset_pago = document.querySelector('#fieldset_pago');
const btn_actualizar = document.querySelector('#btn_actualizar');


let get_param = (param) => {
    let url_string =  window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param);
    return id;
};


let _id = get_param('id_precio');

let precio = buscar_precio(_id);


let mostrar_datos = () => {
    inputnumero.value = precio[0]['numero'];

    let opciones_formato = document.querySelectorAll('#txt_formato option');

    for (let i = 0; i < opciones_formato.length; i++) {
        if (opciones_formato[i].textContent == precio[0]['formato']) {
            opciones_formato[i].selected = true;
        }
    }

    inputprecio.value = precio[0]['precio'];

    let rdb = document.querySelectorAll('#fieldset_pago input[type=radio]');

    if (rdb.value == 'si') {
        rdb[0].checked = true;
    } else {
        rdb[1].checked = true;
    }

}

if (precio) {
    mostrar_datos()
}


let obtener_datos = () => {

        let numero = inputnumero.value;
        let formato = inputformato.selectedOptions[0].textContent;
        let precio = inputprecio.value;
        let pago = fieldset_pago.value;


        Swal.fire({
            title: 'Está seguro que desea actualizar la matrícula?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, estoy seguro'
        }).then((result) => {
            if (result.value) {

                actualizar_precio(numero, formato, precio, pago, _id);

            }
        })



};

btn_actualizar.addEventListener('click', obtener_datos);