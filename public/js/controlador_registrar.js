'use strict';
const input_nombre = document.querySelector('#txt_nombre');
const input_date = document.querySelector('#txt_fecha');
const input_time = document.querySelector('#txt_hora');
const boton_insertar = document.querySelector('#btn_insertar');
const id_ins = sessionStorage.getItem('id_lugar');
const tipo = sessionStorage.getItem('tipo_usuario');







let validar = () => {
    let date = new Date(input_date.value).getDay();
    let error = false;



    if(tipo == 'padre'){
      error= false;
    }else{
      error= true;
    }

    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error_input');
    } else {
        input_nombre.classList.remove('error_input');
    }




    if(input_date <= new Date() || input_date=="Invalid Date"){
        error = true;
        input_date.classList.add('error_input');

    }else {
        input_date.classList.remove('error_input');
    }


    if(date  == '5' || date == '6'){
        error = true;
        input_date.classList.add('error_input');
        swal.fire({
            type: 'warning',
            title: 'La cita no fué registrada',
            text: 'Porfavor seleccione un día entre semana'
        });
    } else {
    input_date.classList.remove('error_input');
   }





    if (input_time == 'Invalid Entry') {
        error = true;
        input_time.classList.add('error_input');
    } else {
        input_time.classList.remove('error_input');
    }



    return error;

};





let obtener_datos = () => {



    if (validar() == false) {
        // Se ejecuta solo si la validación no da error
        let nombre = input_nombre.value;
        let date =  input_date.value;
        let time = input_time.value;
        let id_institucion = id_ins;

        registrar_citas(id_institucion,nombre,date, time);

    } else {
        swal.fire({
            type: 'warning',
            title: 'La cita no fue registrada',
            text: 'Por favor revise los campos resaltados o usted no es un padre'
        });
    }
};

boton_insertar.addEventListener('click', obtener_datos);
