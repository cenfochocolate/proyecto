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

   let celda_eliminar = fila.insertCell();

   let boton_eliminar = document.createElement('a');
   boton_eliminar.href= '#';
   boton_eliminar.innerHTML= 'Eliminar';
   boton_eliminar.dataset.id= cita[i]['_id'];
   boton_eliminar.addEventListener('click', confirmar_borrado);
   celda_eliminar.appendChild(boton_eliminar);
   

};

}
};
function confirmar_borrado(){
  let id= this.dataset.id;
  Swal.fire({
    title:'¿Está seguro que desea eliminar la cita?',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, estoy seguro.'
}).then((result)=>{
  if(result.value){
    borrar_cita(id);
    cita = listar_citas();
    mostrar_datos();
    Swal.fire(
      '¡Cita eliminada!',
       'La cita fue eliminada con éxito.',
       'succes'
    )
  }
})

};
mostrar_datos();
