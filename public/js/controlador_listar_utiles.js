'use strict';

const tabla = document.querySelector('#tbl_utiles tbody');
const inputFiltro = document.querySelector('#buscar_util_institucion');
const select_nivel = document.querySelector('#filtrar_util');
let utiles = listar_utiles();

mostrar_datos();

inputFiltro.addEventListener('keyup', mostrar_datos);
select_nivel.addEventListener('change', mostrar_datos);

function mostrar_datos(){
  let utiles = listar_utiles();
  let filtro = inputFiltro.value;
  let nivel = select_nivel.value;
  tabla.innerHTML='';

  for (let i = 0; i < utiles.length; i++){
      if (utiles[i]['util'].toLowerCase().includes(filtro.toLowerCase()) && nivel == "null") {
      let fila = tabla.insertRow();
      fila.insertCell().innerHTML = utiles[i]['util'];
      fila.insertCell().innerHTML = utiles[i]['descripcion'];
      fila.insertCell().innerHTML = utiles[i]['cantidad'];
      fila.insertCell().innerHTML = utiles[i]['nivel'];
      let celda_configuracion = fila.insertCell();

      // Creación del botón de editar
      let boton_editar = document.createElement('a');
      boton_editar.textContent = 'Editar';
      boton_editar.href = `actualizar_utiles.html?id_utiles=${utiles[i]['_id']}`;
  
      celda_configuracion.appendChild(boton_editar);

      let celda_eliminar = fila.insertCell();

     let boton_eliminar = document.createElement('a');
      boton_eliminar.href= '#';
      boton_eliminar.innerHTML= 'Eliminar';
      boton_eliminar.dataset.id= utiles[i]['_id'];
      boton_eliminar.addEventListener('click', confirmar_borrado);
       celda_eliminar.appendChild(boton_eliminar);
    } else {
      if (utiles[i]['util'].toLowerCase().includes(filtro.toLowerCase()) && utiles[i]['nivel'].includes(nivel)) {
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = utiles[i]['util'];
        fila.insertCell().innerHTML = utiles[i]['descripcion'];
        fila.insertCell().innerHTML = utiles[i]['cantidad'];
        fila.insertCell().innerHTML = utiles[i]['nivel'];
        let celda_configuracion = fila.insertCell();

        // Creación del botón de editar
        let boton_editar = document.createElement('a');
        boton_editar.textContent = 'Editar';
        boton_editar.href = `actualizar_utiles.html?id_utiles=${utiles[i]['_id']}`;
    
        celda_configuracion.appendChild(boton_editar);

        let celda_eliminar = fila.insertCell();

        let boton_eliminar = document.createElement('a');
         boton_eliminar.href= '#';
         boton_eliminar.innerHTML= 'Eliminar';
         boton_eliminar.dataset.id= utiles[i]['_id'];
         boton_eliminar.addEventListener('click', confirmar_borrado);
          celda_eliminar.appendChild(boton_eliminar);
      }
    }
    
  }
};


function confirmar_borrado(){
  let id= this.dataset.id;
  Swal.fire({
    title:'¿Está seguro que desea eliminar el util ?',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, estoy seguro.'
}).then((result)=>{
  if(result.value){
    borrar_util(id);
    utiles = listar_utiles();
    mostrar_datos();
    Swal.fire({
      title:'¡El util fue eliminado!',
      text:'El util fue eliminado con éxito.',
      type:'success'
    })
  }
})

};
mostrar_datos();
 