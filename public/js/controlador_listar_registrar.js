'use strict';

const tabla = document.querySelector('#tbl_citas tbody');
const inputFiltro = document.querySelector('#buscar_cita');


mostrar_datos();

inputFiltro.addEventListener('keyup' , mostrar_datos);



function mostrar_datos(){
        let cita = listar_citas();
        let filtro = inputFiltro.value;
        let id_institucion = sessionStorage.getItem('id_lugar');
        tabla.innerHTML='';

        for(let i = 0; i <cita.length; i++){
        if(id_institucion == cita[i]['id_institucion']){
          if(cita[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())){
          let fila = tabla.insertRow();

        fila.insertCell().innerHTML = cita[i]['nombre'];
   fila.insertCell().innerHTML = cita[i]['date'];
   fila.insertCell().innerHTML = cita[i]['time'];

 };

};

}
};

mostrar_datos();
