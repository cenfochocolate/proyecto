'use strict';

const tabla = document.querySelector('#tbl_idiomas tbody');
const input_filtro = document.querySelector('#txtfiltro');
let idiomas=listar_idiomas();

let mostrar_datos = () => {
    let filtro=input_filtro.value;
    tabla.innerHTML='';

    for (let i = 0; i< idiomas.length; i++) {
     if (idiomas[i]['idioma'].toLowerCase().includes(filtro.toLowerCase())) {
       let fila=tabla.insertRow();

       fila.insertCell().innerHTML =idiomas[i]['idioma'];
       fila.insertCell().innerHTML = idiomas[i]['codigo_iso'];
       

       let imagen=document.createElement('img');
       imagen.classList.add('imgtabla');
       if (idiomas[i]['imagen']) {
           imagen.src=idiomas[i]['imagen']
       } else {
           imagen.src='./imgs/imgph.jpg';
       }
       fila.insertCell().appendChild(imagen);

       let celda_configuracion = fila.insertCell();

       // Creación del botón de editar
       let boton_editar = document.createElement('a');
       boton_editar.textContent = 'Editar';
       boton_editar.href = `actualizar_idioma.html?id_idioma=${idiomas[i]['_id']}`;

       celda_configuracion.appendChild(boton_editar);

       let celda_eliminar = fila.insertCell();

       let boton_eliminar = document.createElement('a');
       boton_eliminar.href= '#';
       boton_eliminar.innerHTML= 'Eliminar';
       boton_eliminar.dataset.id= idiomas[i]['_id'];
       boton_eliminar.addEventListener('click', confirmar_borrado);
       celda_eliminar.appendChild(boton_eliminar);

    }    
    }
    


}
function confirmar_borrado(){
    let id= this.dataset.id;
    Swal.fire({
      title:'¿Está seguro que desea eliminar el idioma?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, estoy seguro.'
  }).then((result)=>{
    if(result.value){
        borrar_idioma(id);
      idiomas=listar_idiomas();
      mostrar_datos();
      Swal.fire({
        title:'¡Servicio eliminada!',
        text:'El idioma fue eliminado con éxito.',
        type:'success'
      })
    }
  })
  
  };
mostrar_datos();     
input_filtro.addEventListener('keyup',mostrar_datos);