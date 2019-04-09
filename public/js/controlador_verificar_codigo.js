'use stric';

const input_codigo = document.querySelector('#txt_codigo');
const input_btn = document.querySelector('#btn_verifica');


//console.log(sessionStorage.getItem('id_institucion_registro'));



function validarCodigo() {

    console.log(sessionStorage.getItem('id_registro'));

    if (input_codigo.value != '') {

        verificar_codigo(sessionStorage.getItem('id_registro'), input_codigo.value);

    } else {
        document.getElementById('txt_codigo').style.borderColor = "red";
    }

};


input_btn.addEventListener('click', validarCodigo);
