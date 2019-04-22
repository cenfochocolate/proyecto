'use strict';
const cerrar_sesion = document.querySelector('#cerrar_sesion');

function borrar_sesion(){
 

  Swal.fire({
    title: '¿Seguro que desea cerrar sesión?',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor:'#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, estoy seguro',
    cancelButtonText: 'Cancelar',
 }).then((result) =>{
   if(result.value){
    localStorage.clear();
     window.location.href = 'iniciar_sesion.html';
   }
 }
 )
   


 
}


cerrar_sesion.addEventListener('click', borrar_sesion);
 