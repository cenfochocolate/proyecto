
'use strict';

const tabla = document.querySelector('#tbl_grado tbody');
const inputFiltro = document.querySelector('#buscar_mensualidad');

let mensualidad = listar_mensualidad();
mostrar_datos();

inputFiltro.addEventListener('keyup', mostrar_datos);

function mostrar_datos  ()  {
  let mensualidad = listar_mensualidad();
  let filtro = inputFiltro.value;
  tabla.innerHTML = '';

  for (let i = 0; i < mensualidad.length; i++) {
    if (mensualidad[i]['descripcion'].toLowerCase().includes(filtro.toLowerCase())) {

      let fila = tabla.insertRow();

      fila.insertCell().innerHTML = mensualidad[i]['grado'];
      fila.insertCell().innerHTML = mensualidad[i]['institucion'];
      fila.insertCell().innerHTML = mensualidad[i]['descripcion'];

      let celda_configuracion = fila.insertCell();

      let boton_editar = document.createElement('a');
      boton_editar.innerHTML ='<i class="fas fa-edit"></i>';
      boton_editar.href=`actualizar_informacion_mensualidad.html?id_mensualidad=${mensualidad[i]['_id']}`
   
      celda_configuracion.appendChild(boton_editar);
      
      let celda_eliminar = fila.insertCell();

      let boton_eliminar = document.createElement('a');
      boton_eliminar.href= '#';
      boton_eliminar.innerHTML= '<i class="fas fa-trash-alt"></i>';
      boton_eliminar.dataset.id= mensualidad[i]['_id'];
      boton_eliminar.addEventListener('click', confirmar_borrado);
      celda_eliminar.appendChild(boton_eliminar);
      
   
   };
   
   }
   };
   function confirmar_borrado(){
     let id= this.dataset.id;
     Swal.fire({
       title:'¿Está seguro que desea eliminar la mensualida?',
       type: 'warning',
       showCancelButton: true,
       confirmButtonColor: '#3085d6',
       cancelButtonColor: '#d33',
       confirmButtonText: 'Sí, estoy seguro.'
   }).then((result)=>{
     if(result.value){
      borrar_mensualidad(id);
       mensualidad = listar_mensualidad();
       mostrar_datos();
       Swal.fire({
         title:'¡Mensualidad eliminada!',
         text:'La mensualidad fue eliminada con éxito.',
         type:'success'
       })
     }
   })
   
};

mostrar_datos();
