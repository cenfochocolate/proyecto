'use strict';

const tabla = document.querySelector('#tbl_preguntas tbody');
const inputFiltro = document.querySelector('#buscar_preguntas')
let id_institucion = sessionStorage.getItem('id_lugar');



mostrar_datos();

inputFiltro.addEventListener('keyup' , mostrar_datos);
 
function mostrar_datos () {
    let preguntas = listar_preguntas();
    let filtro = inputFiltro.value;
    tabla.innerHTML='';

    for(let i =0; i<preguntas.length; i++){
      if(id_institucion == preguntas[i]['id_institucion']){
        if(preguntas[i]['preguntas'].toLowerCase().includes(filtro.toLowerCase())){
                let fila = tabla.insertRow();
                fila.insertCell().innerHTML = preguntas[i]['preguntas'];
                fila.insertCell().innerHTML = preguntas[i]['respuestas'];

                let celda_configuracion = fila.insertCell();

                let boton_editar = document.createElement('a');
                boton_editar.textContent ='Editar';
                boton_editar.href=`actualizar_pregunta.html?id_pregunta=${preguntas[i]['_id']}`
             
                celda_configuracion.appendChild(boton_editar);





                let celda_eliminar = fila.insertCell();

   let boton_eliminar = document.createElement('a');
   boton_eliminar.href= '#';
   boton_eliminar.innerHTML= '<i class="fas fa-trash-alt"></i>';
   boton_eliminar.dataset.id= preguntas[i]['_id'];
   boton_eliminar.addEventListener('click', confirmar_borrado);
   
   celda_eliminar.appendChild(boton_eliminar);
   

};

}
};
function confirmar_borrado(){
  let id= this.dataset.id;
  Swal.fire({
    title:'¿Está seguro que desea eliminar la pregunta?',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, estoy seguro.'
}).then((result)=>{
  if(result.value){
    borrar_pregunta(id);
    preguntas = listar_preguntas();
    mostrar_datos();
    Swal.fire({
      title:'¡Pregunta eliminada!',
      text:'La pregunta fue eliminada con éxito.',
      type:'success'
    })
  }
})

}
                
};     
     

mostrar_datos();
