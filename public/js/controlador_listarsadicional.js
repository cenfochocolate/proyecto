'use strict';
const tabla = document.querySelector('#tbl_sadicional tbody');
const inputFiltro = document.querySelector('#buscar_sadicional_institucion');
const id_institucion = sessionStorage.getItem('id_lugar');

let sadicional = listar_sadicional();

mostrar_datos();

inputFiltro.addEventListener('keyup' , mostrar_datos);

function mostrar_datos(){
  let sadicional = listar_sadicional();
  let filtro = inputFiltro.value;
  tabla.innerHTML='';

  for(let i = 0; i < sadicional.length; i++){
    if(sadicional[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())){
      if(id_institucion == sadicional[i]['id_institucion']){
        let fila = tabla.insertRow();

        fila.insertCell().innerHTML = sadicional[i]['nombre'];
        fila.insertCell().innerHTML = sadicional[i]['descripcion'];
        let imagen = document.createElement('img');
        imagen.classList.add('imagenTabla');
        if(sadicional[i]['imagen']){
          imagen.src = sadicional[i]['imagen'];
        }else{
          imagen.src = './imgs/imgph.jpg';
        }
        fila.insertCell().appendChild(imagen);

        let celda_configuracion = fila.insertCell();
      
        let boton_editar = document.createElement('a');
        boton_editar.textContent = 'Editar';
        boton_editar.href = `actualizar_servicio.html?id_servicio=${sadicional[i]['_id']}`;

        celda_configuracion.appendChild(boton_editar);

        let celda_eliminar = fila.insertCell();

        let boton_eliminar = document.createElement('a');
        boton_eliminar.href= '#';
        boton_eliminar.innerHTML= 'Eliminar';
        boton_eliminar.dataset.id= sadicional[i]['_id'];
        boton_eliminar.addEventListener('click', confirmar_borrado);
        celda_eliminar.appendChild(boton_eliminar);

      }
  }
  };
};


function confirmar_borrado(){
  let id= this.dataset.id;
  Swal.fire({
    title:'¿Está seguro que desea eliminar el servicio?',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, estoy seguro.'
}).then((result)=>{
  if(result.value){
    borrar_servicio(id);
    sadicional = listar_sadicional();
    mostrar_datos();
    Swal.fire({
      title:'¡Servicio eliminada!',
      text:'El servicio fue eliminado con éxito.',
      type:'success'
    })
  }
})

};

mostrar_datos();
