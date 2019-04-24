
'use strict';

const tabla = document.querySelector('#tbl_criterio tbody');
const inputFiltro = document.querySelector('#buscar_criterio');
const institucion = sessionStorage.getItem('id_lugar');
const botonr = document.querySelector('#btn_registrar');
const log = sessionStorage.getItem('idu');


let evaluacion = listar_evaluacion();

mostrar_datos();

inputFiltro.addEventListener('keyup', mostrar_datos);

function mostrar_datos() {

  let evaluacion = listar_evaluacion();
  if (evaluacion) {
    let filtro = inputFiltro.value;
    tabla.innerHTML = '';

    for (let i = 0; i < evaluacion.length; i++) {

      if (evaluacion[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())) {

        let fila = tabla.insertRow();

        fila.insertCell().innerHTML = evaluacion[i]['nombre'];
        fila.insertCell().innerHTML = evaluacion[i]['calificacion']
          ;
        fila.insertCell().innerHTML = evaluacion[i]['estado'];

        let celda_configuracion = fila.insertCell();

        let boton_editar = document.createElement('a');
        boton_editar.innerHTML = '<i class="fas fa-edit"></i>';
        boton_editar.href = `actualizar_criterio_evaluacion.html?id_criterio=${evaluacion[i]['_id']}`

        celda_configuracion.appendChild(boton_editar);


        let celda_eliminar = fila.insertCell();

        let boton_eliminar = document.createElement('a');
        boton_eliminar.href = '#';
        boton_eliminar.innerHTML = '<i class="fas fa-trash-alt"></i>';
        boton_eliminar.dataset.id = evaluacion[i]['_id'];
        boton_eliminar.addEventListener('click', confirmar_borrado);
        celda_eliminar.appendChild(boton_eliminar);

        let celda_deshabilitar = fila.insertCell();
        let boton_deshabilitar = document.createElement('a');
        boton_deshabilitar.innerHTML = '<i class="fas fa-eye-slash"></i>';
        boton_deshabilitar.dataset.id = evaluacion[i]['_id'];
        boton_deshabilitar.addEventListener('click', confirmar_deshabilitar);
        celda_deshabilitar.appendChild(boton_deshabilitar);

        let celda_habilitar = fila.insertCell();
        let boton_habilitar = document.createElement('a');
        boton_habilitar.innerHTML = '<i class="fas fa-eye"></i>';
        boton_habilitar.dataset.id = evaluacion[i]['_id'];
        boton_habilitar.addEventListener('click', confirmar_habilitar);
        celda_habilitar.appendChild(boton_habilitar);

      } else {
        if (evaluacion[i]['nombre'].toLowerCase().includes(filtro.toLowerCase()) && evaluacion[i]['estado'] == "Activo") {

          let fila = tabla.insertRow();

          fila.insertCell().innerHTML = evaluacion[i]['nombre'];
          fila.insertCell().innerHTML = evaluacion[i]['calificacion']
            ;
          fila.insertCell().innerHTML = evaluacion[i]['estado'];

        }
      };

    }
  };
  function confirmar_borrado() {
    let id = this.dataset.id;
    Swal.fire({
      title: '¿Está seguro que desea eliminar?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, estoy seguro.'
    }).then((result) => {
      if (result.value) {
        borrar_criterio(id);
        evaluacion = listar_evaluacion();
        mostrar_datos();
        Swal.fire({
          title: '¡Eliminada con éxito!',
          type: 'success'
        })
      }
    })

  }
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
   deshabilitar_criterio(id);
   evaluacion = listar_evaluacion();
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
   habilitar_criterio(id);
   evaluacion = listar_evaluacion();
    mostrar_datos();
    Swal.fire({
      title:'¡Habilitada con éxito!',
      type:'success'
    })
  }
})
};

mostrar_datos();
