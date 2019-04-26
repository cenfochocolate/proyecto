'use strict';

const tabla = document.querySelector('#tbl_preguntas tbody');
const inputFiltro = document.querySelector('#buscar_preguntas')
let id_institucion = sessionStorage.getItem('id_lugar');
const editar = document.querySelector('#editar');
const eliminar = document.querySelector('#eliminar');
const deshabilitar = document.querySelector('#deshab');
const habilitar = document.querySelector('#hab');
const log = sessionStorage.getItem('idu');
const boton = document.querySelector('#btn_listar');
const estado = document.querySelector('#estado');

if(id_institucion == log){
  boton.classList.remove('hideInput');
  estado.classList.remove('hideInput');
  editar.classList.remove('hideInput');
  eliminar.classList.remove('hideInput');
  habilitar.classList.remove('hideInput');
  deshabilitar.classList.remove('hideInput');
}else{
  boton.classList.add('hideInput');
  estado.classList.add('hideInput');
  editar.classList.add('hideInput');
  eliminar.classList.add('hideInput');
  habilitar.classList.add('hideInput');
  deshabilitar.classList.add('hideInput');
}

mostrar_datos();

inputFiltro.addEventListener('keyup', mostrar_datos);

function mostrar_datos() {
  let preguntas = listar_preguntas();
  let filtro = inputFiltro.value;
  tabla.innerHTML = '';

  for (let i = 0; i < preguntas.length; i++) {
      if (preguntas[i]['preguntas'].toLowerCase().includes(filtro.toLowerCase())&& preguntas[i]['id_institucion']== id_institucion && id_institucion == log) {
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = preguntas[i]['preguntas'];
        fila.insertCell().innerHTML = preguntas[i]['respuestas'];
        fila.insertCell().innerHTML = preguntas[i]['estado'];

        let celda_configuracion = fila.insertCell();

        let boton_editar = document.createElement('a');
        boton_editar.innerHTML ='<i class="fas fa-edit"></i>';
        boton_editar.href = `actualizar_pregunta.html?id_pregunta=${preguntas[i]['_id']}`

        celda_configuracion.appendChild(boton_editar);
 




        let celda_eliminar = fila.insertCell();

        let boton_eliminar = document.createElement('a');
        boton_eliminar.href = '#';
        boton_eliminar.innerHTML = '<i class="fas fa-trash-alt"></i>';
        boton_eliminar.dataset.id = preguntas[i]['_id'];
        boton_eliminar.addEventListener('click', confirmar_borrado);

        celda_eliminar.appendChild(boton_eliminar);

        let celda_deshabilitar = fila.insertCell();
        let boton_deshabilitar = document.createElement('a');
        boton_deshabilitar.innerHTML = '<i class="fas fa-eye-slash"></i>';
        boton_deshabilitar.dataset.id = preguntas[i]['_id'];
        boton_deshabilitar.addEventListener('click', confirmar_deshabilitar);
        celda_deshabilitar.appendChild(boton_deshabilitar);

        let celda_habilitar = fila.insertCell();
        let boton_habilitar = document.createElement('a');
        boton_habilitar.innerHTML = '<i class="fas fa-eye"></i>';
        boton_habilitar.dataset.id = preguntas[i]['_id'];
        boton_habilitar.addEventListener('click', confirmar_habilitar);
        celda_habilitar.appendChild(boton_habilitar);

      } else {
        if (preguntas[i]['preguntas'].toLowerCase().includes(filtro.toLowerCase()) && preguntas[i]['id_institucion'] == id_institucion && preguntas[i]['estado'] == "Activo") {

          let fila = tabla.insertRow();

          fila.insertCell().innerHTML = preguntas[i]['preguntas'];
          fila.insertCell().innerHTML = preguntas[i]['respuestas'];


        
        }

      }
    
  };
  function confirmar_borrado() {
    let id = this.dataset.id;
    Swal.fire({
      title: '¿Está seguro que desea eliminar la pregunta?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, estoy seguro.'
    }).then((result) => {
      if (result.value) {
        borrar_pregunta(id);
        preguntas = listar_preguntas();
        mostrar_datos();
        Swal.fire({
          title: '¡Pregunta eliminada!',
          text: 'La pregunta fue eliminada con éxito.',
          type: 'success'
        })
      }
    })

  }

};
function confirmar_deshabilitar() {
  let id = this.dataset.id;
  Swal.fire({
    title: '¿Está seguro que desea deshabilitar?',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, estoy seguro.'
  }).then((result) => {
    if (result.value) {
      deshabilitar_pregunta(id);
      preguntas = listar_preguntas();
      mostrar_datos();
      Swal.fire({
        title: '¡Deshabilitada con éxito!',
        type: 'success'
      })
    }
  })
};


function confirmar_habilitar() {
  let id = this.dataset.id;
  Swal.fire({
    title: '¿Está seguro que desea habilitar?',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, estoy seguro.'
  }).then((result) => {
    if (result.value) {
      habilitar_pregunta(id);
      preguntas = listar_preguntas();
      mostrar_datos();
      Swal.fire({
        title: '¡Habilitada con éxito!',
        type: 'success'
      })
    }
  })
};

mostrar_datos();
