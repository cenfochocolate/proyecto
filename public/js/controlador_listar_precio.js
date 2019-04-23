
'use strict';

const tabla = document.querySelector('#tbl_precio tbody');
const inputFiltro = document.querySelector('#buscar_precio');

let precio = listar_precio();
mostrar_datos();

inputFiltro.addEventListener('keyup',mostrar_datos);


function mostrar_datos(){
    let precio = listar_precio();
    let filtro = inputFiltro.value;
    tabla.innerHTML='';

    for (let i = 0; i < precio.length; i++) {
      if (precio[i]['formato'].toLowerCase().includes(filtro.toLowerCase())) {

        let fila = tabla.insertRow();

        fila.insertCell().innerHTML = precio[i]['numero'];
        fila.insertCell().innerHTML = precio[i]['formato'];
        fila.insertCell().innerHTML = precio[i]['precio'];
        fila.insertCell().innerHTML = precio[i]['pago'];

       
      let celda_configuracion = fila.insertCell();
       
        let boton_editar = document.createElement('a');
        boton_editar.textContent ='Editar';
        boton_editar.href=`actualizar_precio_matricula.html?id_precio=${precio[i]['_id']}`
     
        celda_configuracion.appendChild(boton_editar);
        let celda_eliminar = fila.insertCell();

        let boton_eliminar = document.createElement('a');
        boton_eliminar.href= '#';
        boton_eliminar.innerHTML= 'Eliminar';
        boton_eliminar.dataset.id= precio[i]['_id'];
        boton_eliminar.addEventListener('click', confirmar_borrado);
        celda_eliminar.appendChild(boton_eliminar);
        
     
     };
     
     }
     };
     function confirmar_borrado(){
       let id= this.dataset.id;
       Swal.fire({
         title:'¿Está seguro que desea eliminar la matrícula?',
         type: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Sí, estoy seguro.'
     }).then((result)=>{
       if(result.value){
        borrar_precio(id);
         precio = listar_precio();
         mostrar_datos();
         Swal.fire({
           title:'¡Matrícula eliminada!',
           text:'La matrícula fue eliminada con éxito.',
           type:'success'
         })
       }
     })
     
};
mostrar_datos();
