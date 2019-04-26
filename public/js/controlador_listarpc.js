'use strict';
const tabla = document.querySelector('#tbl_pcomercial tbody');
const institucion = sessionStorage.getItem('id_lugar');
const editar = document.querySelector('#editar');
const eliminar = document.querySelector('#eliminar');
const deshabilitar = document.querySelector('#deshab');
const habilitar = document.querySelector('#hab');
const estado = document.querySelector('#estado');
const botonr = document.querySelector('#btn_listar');
const log = sessionStorage.getItem('idu');

let pcomercial = listar_pcomercial();

if (institucion == log) {
  editar.classList.remove('hideInput');
  eliminar.classList.remove('hideInput');
  deshabilitar.classList.remove('hideInput');
  habilitar.classList.remove('hideInput');
  botonr.classList.remove('hideInput');
  estado.classList.remove('hideInput');
} else {
  editar.classList.add('hideInput');
  eliminar.classList.add('hideInput');
  deshabilitar.classList.add('hideInput');
  habilitar.classList.add('hideInput');
  botonr.classList.add('hideInput');
  estado.classList.add('hideInput');
}


function mostrar_datos() {
  tabla.innerHTML = '';

  for (let i = 0; i < pcomercial.length; i++) {
    let pcomercial = listar_pcomercial();

    if (pcomercial[i]['id_institucion'] == institucion && institucion == log) {

      let fila = tabla.insertRow();

      fila.insertCell().innerHTML = pcomercial[i]['pcomercial'];
      fila.insertCell().innerHTML = pcomercial[i]['estado'];

      let celda_configuracion = fila.insertCell();

      let boton_editar = document.createElement('a');
      boton_editar.innerHTML = '<i class="fas fa-edit"></i>';
      boton_editar.href = `actualizar_pagina_comercial.html?id_pagina=${pcomercial[i]['_id']}`;

      celda_configuracion.appendChild(boton_editar);

      let celda_eliminar = fila.insertCell();

      let boton_eliminar = document.createElement('a');
      boton_eliminar.href = '#';
      boton_eliminar.innerHTML = '<i class="fas fa-trash-alt"></i>';
      boton_eliminar.dataset.id = pcomercial[i]['_id'];
      boton_eliminar.addEventListener('click', confirmar_borrado);
      celda_eliminar.appendChild(boton_eliminar);

      let celda_deshabilitar = fila.insertCell();

      let boton_deshabilitar = document.createElement('a');
      boton_deshabilitar.innerHTML = '<i class="fas fa-eye-slash"></i>';
      boton_deshabilitar.dataset.id = pcomercial[i]['_id'];
      boton_deshabilitar.addEventListener('click', confirmar_deshabilitar);
      celda_deshabilitar.appendChild(boton_deshabilitar);

      let celda_habilitar = fila.insertCell();

      let boton_habilitar = document.createElement('a');
      boton_habilitar.innerHTML = '<i class="fas fa-eye"></i>';
      boton_habilitar.dataset.id = pcomercial[i]['_id'];
      boton_habilitar.addEventListener('click', confirmar_habilitar);
      celda_habilitar.appendChild(boton_habilitar);

    } else {
      if (pcomercial[i]['id_institucion'] == institucion && pcomercial[i]['estado'] == "Activo") {

        let fila = tabla.insertRow();

        fila.insertCell().innerHTML = pcomercial[i]['pcomercial'];

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
      borrar_pagina(id);
      pcomercial = listar_pcomercial();
      mostrar_datos();
      Swal.fire({
        title: '¡Eliminada con éxito!',
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
      deshabilitar_pagina(id);
      pcomercial = listar_pcomercial();
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
      habilitar_pagina(id);
      pcomercial = listar_pcomercial();
      mostrar_datos();
      Swal.fire({
        title: '¡Habilitada con éxito!',
        type: 'success'
      })
    }
  })
};

mostrar_datos();
