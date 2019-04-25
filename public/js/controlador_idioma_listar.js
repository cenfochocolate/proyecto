'use strict';

const tabla = document.querySelector('#tbl_idiomas tbody');
const input_filtro = document.querySelector('#txtfiltro');
let idiomas = listar_idiomas();

let mostrar_datos = () => {
  let filtro = input_filtro.value;
  tabla.innerHTML = '';

  for (let i = 0; i < idiomas.length; i++) {
    if (idiomas[i]['idioma'].toLowerCase().includes(filtro.toLowerCase())) {
      let fila = tabla.insertRow();

      fila.insertCell().innerHTML = idiomas[i]['idioma'];
      fila.insertCell().innerHTML = idiomas[i]['codigo_iso'];


      let imagen = document.createElement('img');
      imagen.classList.add('imgtabla');
      if (idiomas[i]['imagen']) {
        imagen.src = idiomas[i]['imagen']
      } else {
        imagen.src = './imgs/imgph.jpg';
      }
      fila.insertCell().appendChild(imagen);

      fila.insertCell().innerHTML = idiomas[i]['estado'];

      let celda_configuracion = fila.insertCell();

      // Creación del botón de editar
      let boton_editar = document.createElement('a');
      boton_editar.innerHTML = '<i class="fas fa-edit"></i>';
      boton_editar.href = `actualizar_idioma.html?id_idioma=${idiomas[i]['_id']}`;

      celda_configuracion.appendChild(boton_editar);

      let celda_eliminar = fila.insertCell();

      let boton_eliminar = document.createElement('a');
      boton_eliminar.href = '#';
      boton_eliminar.innerHTML = '<i class="fas fa-trash-alt"></i>';
      boton_eliminar.dataset.id = idiomas[i]['_id'];
      boton_eliminar.addEventListener('click', confirmar_borrado);
      celda_eliminar.appendChild(boton_eliminar);

      let celda_deshabilitar = fila.insertCell();
      let boton_deshabilitar = document.createElement('a');
      boton_deshabilitar.innerHTML = '<i class="fas fa-eye-slash"></i>';
      boton_deshabilitar.dataset.id = idiomas[i]['_id'];
      boton_deshabilitar.addEventListener('click', confirmar_deshabilitar);
      celda_deshabilitar.appendChild(boton_deshabilitar);

      let celda_habilitar = fila.insertCell();
      let boton_habilitar = document.createElement('a');
      boton_habilitar.innerHTML = '<i class="fas fa-eye"></i>';
      boton_habilitar.dataset.id = idiomas[i]['_id'];
      boton_habilitar.addEventListener('click', confirmar_habilitar);
      celda_habilitar.appendChild(boton_habilitar);

    } else {
      if (idiomas[i]['idioma'].toLowerCase().includes(filtro.toLowerCase()) && idiomas[i]['id_institucion'] == institucion && idiomas[i]['estado'] == "Activo") {
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = idiomas[i]['idioma'];
        fila.insertCell().innerHTML = idiomas[i]['codigo_iso'];


        let imagen = document.createElement('img');
        imagen.classList.add('imgtabla');
        if (idiomas[i]['imagen']) {
          imagen.src = idiomas[i]['imagen']
        } else {
          imagen.src = './imgs/imgph.jpg';
        }
        fila.insertCell().appendChild(imagen);

        fila.insertCell().innerHTML = idiomas[i]['estado'];
      }

    }
  }


}
function confirmar_borrado() {
  let id = this.dataset.id;
  Swal.fire({
    title: '¿Está seguro que desea eliminar el idioma?',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, estoy seguro.'
  }).then((result) => {
    if (result.value) {
      borrar_idioma(id);
      idiomas = listar_idiomas();
      mostrar_datos();
      Swal.fire({
        title: '¡Servicio eliminada!',
        text: 'El idioma fue eliminado con éxito.',
        type: 'success'
      })
    }
  })

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
      deshabilitar_idioma(id);
      idiomas = listar_idiomas();
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
      habilitar_idioma(id);
      idiomas = listar_idiomas();
      mostrar_datos();
      Swal.fire({
        title: '¡Habilitada con éxito!',
        type: 'success'
      })
    }
  })
};
mostrar_datos();
input_filtro.addEventListener('keyup', mostrar_datos);