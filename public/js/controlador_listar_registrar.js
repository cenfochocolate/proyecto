'use strict';

const tabla = document.querySelector('#tbl_citas tbody');
const inputFiltro = document.querySelector('#buscar_cita');
 

mostrar_datos();

inputFiltro.addEventListener('keyup' , mostrar_datos);



function mostrar_datos(){
        let cita = listar_citas();
        let filtro = inputFiltro.value;
        tabla.innerHTML='';
      
        for(let i = 0; i <cita.length; i++){
          if(cita[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())){
          let fila = tabla.insertRow();
    
        fila.insertCell().innerHTML = cita[i]['nombre'];
   fila.insertCell().innerHTML = cita[i]['date'];
   fila.insertCell().innerHTML = cita[i]['time']; 

   let celda_configuracion = fila.insertCell();

   let boton_editar = document.createElement('a');
   boton_editar.textContent ='Editar';
   boton_editar.href=`actualizar_cita.html?id_cita=${cita[i]['_id']}`

   celda_configuracion.appendChild(boton_editar);
   
};

}
};

mostrar_datos();
