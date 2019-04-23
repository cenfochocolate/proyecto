'use strict';
const tabla = document.querySelector('#tbl_pcomercial tbody');
const id_institucion = sessionStorage.getItem('id_lugar');

let pcomercial = listar_pcomercial();

function mostrar_datos() {
tabla.innerHTML = '';

  for (let i = 0; i < pcomercial.length; i++) {
    let pcomercial = listar_pcomercial();

    if (id_institucion == pcomercial[i]['id_institucion']) {

      let fila = tabla.insertRow();

      fila.insertCell().innerHTML = pcomercial[i]['pcomercial'];

      let celda_configuracion = fila.insertCell();

      let boton_editar = document.createElement('a');
      boton_editar.innerHTML ='<i class="fas fa-edit"></i>';
      boton_editar.href = `actualizar_pagina_comercial.html?id_pagina=${pcomercial[i]['_id']}`;

      celda_configuracion.appendChild(boton_editar);

      let celda_eliminar = fila.insertCell();

      let boton_eliminar = document.createElement('a');
      boton_eliminar.href = '#';
      boton_eliminar.innerHTML = '<i class="fas fa-trash-alt"></i>';
      boton_eliminar.dataset.id = pcomercial[i]['_id'];
      boton_eliminar.addEventListener('click', confirmar_borrado);
      celda_eliminar.appendChild(boton_eliminar);
    };
  }
};
function confirmar_borrado() {
  let id = this.dataset.id;
  Swal.fire({
    title: '¿Está seguro que desea eliminar la página?',
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
        title: '¡Página eliminada!',
        text: 'La página fue eliminada con éxito.',
        type: 'success'
      }) 
    }
  })
};

mostrar_datos();
