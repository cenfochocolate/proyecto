
'use strict';

const tabla = document.querySelector('#tbl_criterio tbody');
const inputFiltro = document.querySelector('#buscar_criterio');

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
        fila.insertCell().innerHTML = evaluacion[i]['calificacion'];

        let celda_configuracion = fila.insertCell();

        let boton_editar = document.createElement('a');
        boton_editar.innerHTML ='<i class="fas fa-edit"></i>';
        boton_editar.href = `actualizar_criterio_evaluacion.html?id_criterio=${evaluacion[i]['_id']}`

        celda_configuracion.appendChild(boton_editar);


        let celda_eliminar = fila.insertCell();

        let boton_eliminar = document.createElement('a');
        boton_eliminar.href = '#';
        boton_eliminar.innerHTML = '<i class="fas fa-trash-alt"></i>';
        boton_eliminar.dataset.id = evaluacion[i]['_id'];
        boton_eliminar.addEventListener('click', confirmar_borrado);
        celda_eliminar.appendChild(boton_eliminar);


      };

    }
  };
  function confirmar_borrado() {
    let id = this.dataset.id;
    Swal.fire({
      title: '¿Está seguro que desea eliminar la evaluación?',
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
          title: '¡Evaluación eliminada!',
          text: 'La evaliación fue eliminada con éxito.',
          type: 'success'
        })
      }
    })

  }
};

mostrar_datos();
