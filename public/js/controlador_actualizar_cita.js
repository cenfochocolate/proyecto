'use strict';
const input_nombre = document.querySelector('#txt_nombre');
const input_date = document.querySelector('#txt_fecha');
const input_time = document.querySelector('#txt_hora');
const boton_actualizar = document.querySelector('#btn_actualizar');

let get_param = (param)=> {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let id= url.searchParams.get(param);

    return id;
};

let _id= get_param('id_cita');

let cita= buscar_cita(_id);

let mostrar_datos = () =>{


    input_nombre.value = cita[0]['nombre'];
    input_date.value = cita[0]['time'];
    input_time.value = cita[0]['date'];



    }


if(cita){
    mostrar_datos()
}






let validar = () => {
    let date = new Date(input_date.value).getDay();
    let error = false;




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



        let nombre = input_nombre.value;
        let date =  input_date.value;
        let time = input_time.value;

        Swal.fire({
            title: 'Está seguro que desea actualizar la cita?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, estoy seguro'
        }).then((result) => {
            if (result.value) {

        actualizar_cita(nombre,date, time, _id);
    }
})



    }else{
        swal.fire({
          type: 'warning',
          title: 'No se pudo actualizar',
          text: 'Por favor revise los campos resaltados'
        });
      }



};

boton_actualizar.addEventListener('click', obtener_datos);
