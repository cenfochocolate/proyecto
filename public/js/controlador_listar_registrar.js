'use strict';

const tabla = document.querySelector('#tbl_citas tbody');
const inputFiltro = document.querySelector('#buscar_cita');
const institucion = sessionStorage.getItem('id_lugar');
const editar = document.querySelector('#editar');
const eliminar = document.querySelector('#eliminar');
const deshabilitar = document.querySelector('#deshab');
const habilitar = document.querySelector('#hab');
const log = sessionStorage.getItem('idu');



  

inputFiltro.addEventListener('keyup' , mostrar_datos);

let cita = listar_citas();

function mostrar_datos(){
       
        let filtro = inputFiltro.value;
        tabla.innerHTML='';
      
        for(let i = 0; i <cita.length; i++){
          if(cita[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())){
           
          let fila = tabla.insertRow();
    
        fila.insertCell().innerHTML = cita[i]['nombre'];
   fila.insertCell().innerHTML = cita[i]['date'];
   fila.insertCell().innerHTML = cita[i]['time'];
   fila.insertCell().innerHTML = cita[i]['estado'];


   let celda_configuracion = fila.insertCell();

   let boton_editar = document.createElement('a');
   boton_editar.innerHTML ='<i class="fas fa-edit"></i>';
   boton_editar.href=`actualizar_cita.html?id_cita=${cita[i]['_id']}`

   celda_configuracion.appendChild(boton_editar);

   let celda_eliminar = fila.insertCell();

   let boton_eliminar = document.createElement('a');
   boton_eliminar.href= '#';
   boton_eliminar.innerHTML= '<i class="fas fa-trash-alt"></i>';
   boton_eliminar.dataset.id= cita[i]['_id'];
   boton_eliminar.addEventListener('click', confirmar_borrado);
   celda_eliminar.appendChild(boton_eliminar);
   
   let celda_deshabilitar = fila.insertCell();
      let boton_deshabilitar = document.createElement('a');
      boton_deshabilitar.innerHTML= '<i class="fas fa-eye-slash"></i>';
      boton_deshabilitar.dataset.id = cita[i]['_id'];
      boton_deshabilitar.addEventListener('click', confirmar_deshabilitar);
      celda_deshabilitar.appendChild(boton_deshabilitar);

      let celda_habilitar = fila.insertCell();
      let boton_habilitar = document.createElement('a');
      boton_habilitar.innerHTML= '<i class="fas fa-eye"></i>';
      boton_habilitar.dataset.id =cita[i]['_id'];
      boton_habilitar.addEventListener('click', confirmar_habilitar);
      celda_habilitar.appendChild(boton_habilitar);

   }else{
    if (cita[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())&&cita[i]['id_institucion'] == institucion && cita[i]['estado'] == "Activo"){

      let fila = tabla.insertRow();

      fila.insertCell().innerHTML = cita[i]['nombre'];
      fila.insertCell().innerHTML = cita[i]['date'];
      fila.insertCell().innerHTML = cita[i]['time']; 
      fila.insertCell().innerHTML = cita[i]['estado'];

};

}
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
    Swal.fire({
      title:'¡Cita eliminada!',
      text:'La cita fue eliminada con éxito.',
      type:'success'
    })
  }
})

};
function confirmar_deshabilitar(){
  let id= this.dataset.id;
  Swal.fire({
    title:'¿Está seguro que desea deshabilitar?',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, estoy seguro.'
}).then((result)=>{
  if(result.value){
   deshabilitar_cita(id);
    cita = listar_citas();
    mostrar_datos();
    Swal.fire({
      title:'¡Deshabilitada con éxito!',
      type:'success'
    })
  }
})
};


function confirmar_habilitar(){
  let id= this.dataset.id;
  Swal.fire({
    title:'¿Está seguro que desea habilitar?',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, estoy seguro.'
}).then((result)=>{
  if(result.value){
   habilitar_cita(id);
    cita = listar_citas();
    mostrar_datos();
    Swal.fire({
      title:'¡Habilitada con éxito!',
      type:'success'
    })
  }
})
};
mostrar_datos();
