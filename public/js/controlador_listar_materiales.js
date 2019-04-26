'use strict';

let tabla = document.querySelector('#tbl_material tbody');
const inputFiltro = document.querySelector('#buscar_material');
const institucion = sessionStorage.getItem('id_lugar');
const editar = document.querySelector('#editar');
const eliminar = document.querySelector('#eliminar');
const deshabilitar = document.querySelector('#deshab');
const habilitar = document.querySelector('#hab');
const botonr = document.querySelector('#btn_registrar');
const log = sessionStorage.getItem('idu');
const estado = document.querySelector('#estado');

let material = listar_materiales();
if(institucion == log){
  editar.classList.remove('hideInput');
  eliminar.classList.remove('hideInput');
  deshabilitar.classList.remove('hideInput');
  habilitar.classList.remove('hideInput');
  botonr.classList.remove('hideInput');
  estado.classList.remove('hideInput');
  
  }else{
    editar.classList.add('hideInput');
  eliminar.classList.add('hideInput');
  deshabilitar.classList.add('hideInput');
  habilitar.classList.add('hideInput');
  botonr.classList.add('hideInput');
  estado.classList.add('hideInput');
  
  }
mostrar_datos();

inputFiltro.addEventListener('keyup', mostrar_datos);

function mostrar_datos() {

    let material = listar_materiales();
    let filtro = inputFiltro.value;
    tabla.innerHTML = '';

    for (let i = 0; i < material.length; i++) {
      if (material[i]['nombre_institucion'].toLowerCase().includes(filtro.toLowerCase()) && material[i]['id_institucion'] == institucion && institucion == log) {


            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = material[i]['nombre_institucion'];
            fila.insertCell().innerHTML = material[i]['descripcion'];
            fila.insertCell().innerHTML = material[i]['estado'];

            let celda_configuracion = fila.insertCell();

      let boton_editar = document.createElement('a');
      boton_editar.innerHTML ='<i class="fas fa-edit"></i>';
      boton_editar.href=`actualizar_material.html?id_material=${material[i]['_id']}`
   
      celda_configuracion.appendChild(boton_editar);

      let celda_eliminar = fila.insertCell();

   let boton_eliminar = document.createElement('a');
   boton_eliminar.href= '#';
   boton_eliminar.innerHTML= '<i class="fas fa-trash-alt"></i>';
   boton_eliminar.dataset.id= material[i]['_id'];
   boton_eliminar.addEventListener('click', confirmar_borrado);
   celda_eliminar.appendChild(boton_eliminar);


   let celda_deshabilitar = fila.insertCell();
      let boton_deshabilitar = document.createElement('a');
      boton_deshabilitar.innerHTML= '<i class="fas fa-eye-slash"></i>';
      boton_deshabilitar.dataset.id = material[i]['_id'];
      boton_deshabilitar.addEventListener('click', confirmar_deshabilitar);
      celda_deshabilitar.appendChild(boton_deshabilitar);

      let celda_habilitar = fila.insertCell();
      let boton_habilitar = document.createElement('a');
      boton_habilitar.innerHTML= '<i class="fas fa-eye"></i>';
      boton_habilitar.dataset.id =material[i]['_id'];
      boton_habilitar.addEventListener('click', confirmar_habilitar);
      celda_habilitar.appendChild(boton_habilitar);

    }else{
        if (material[i]['nombre_institucion'].toLowerCase().includes(filtro.toLowerCase())&&material[i]['id_institucion'] == institucion && material[i]['estado'] == "Activo"){
    
          let fila = tabla.insertRow();
    
          fila.insertCell().innerHTML = material[i]['nombre_institucion'];
          fila.insertCell().innerHTML = material[i]['descripcion'];
        
   
        }
        }
    };

}; 
function confirmar_borrado(){
    let id= this.dataset.id;
    Swal.fire({
      title:'¿Está seguro que desea eliminar?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, estoy seguro.'
  }).then((result)=>{
    if(result.value){
      borrar_material(id);
      material = listar_materiales();
      mostrar_datos();
      Swal.fire({
        title:'¡Material eliminado!',
        text:'El material fue eliminada con éxito.',
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
     deshabilitar_material(id);
     material = listar_materiales();
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
     habilitar_material(id);
     material = listar_materiales();
      mostrar_datos();
      Swal.fire({
        title:'¡Habilitada con éxito!',
        type:'success'
      })
    }
  })
  };

mostrar_datos();
