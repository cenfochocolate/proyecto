'use strict';
let idrs = sessionStorage.getItem('id_lugar');
let idl = sessionStorage.getItem('idu');
let tablars = document.querySelector('#tbl_redes_sociales tbody');
let estadors = document.querySelector('#estadors');
let editarrs = document.querySelector('#editarrs');
let eliminarrs = document.querySelector('#eliminarrs');
let deshabilitarrs = document.querySelector('#deshabrs');
let habilitarrs = document.querySelector('#habrs');

if(idrs == idl){
  estadors.classList.remove('hideInput');
  editarrs.classList.remove('hideInput');
  eliminarrs.classList.remove('hideInput');
  deshabilitarrs.classList.remove('hideInput');
  habilitarrs.classList.remove('hideInput');
}else{
  estadors.classList.add('hideInput');
  editarrs.classList.add('hideInput');
  eliminarrs.classList.add('hideInput');
  deshabilitarrs.classList.add('hideInput');
  habilitarrs.classList.add('hideInput');
}
  let rs = listar_rs();
mostrar_rs();
function mostrar_rs() {
   rs = listar_rs();
   tablars.innerHTML='';

  for (let i = 0; i < rs.length; i++) {
    if (idrs == rs[i]['id_institucion'] && idl == idrs) {

      let fila = tablars.insertRow();
      fila.insertCell().innerHTML = rs[i]['facebook'];
      fila.insertCell().innerHTML = rs[i]['instagram'];
      fila.insertCell().innerHTML = rs[i]['twitter'];
      fila.insertCell().innerHTML = rs[i]['email'];
      fila.insertCell().innerHTML = rs[i]['youtube'];
      fila.insertCell().innerHTML = rs[i]['estado'];

      let celda_configuracion = fila.insertCell();

      let boton_editar = document.createElement('a');
      boton_editar.innerHTML = '<i class="fas fa-edit"></i>';
      boton_editar.href = `actualizar_rs.html?id_rs=${rs[i]['_id']}`

      celda_configuracion.appendChild(boton_editar);
      let celda_eliminar = fila.insertCell();

      let boton_eliminar = document.createElement('a');
      boton_eliminar.innerHTML = '<i class="fas fa-trash-alt"></i>';
      boton_eliminar.dataset.id = rs[i]['_id'];
      boton_eliminar.addEventListener('click', confirmar_borradoRS);
      celda_eliminar.appendChild(boton_eliminar);

      let celda_deshabilitar = fila.insertCell();
      let boton_deshabilitar = document.createElement('a');
      boton_deshabilitar.innerHTML = '<i class="fas fa-eye-slash"></i>';
      boton_deshabilitar.dataset.id = rs[i]['_id'];
      boton_deshabilitar.addEventListener('click', confirmar_deshabilitarRS);
      celda_deshabilitar.appendChild(boton_deshabilitar);

      let celda_habilitar = fila.insertCell();
      let boton_habilitar = document.createElement('a');
      boton_habilitar.innerHTML = '<i class="fas fa-eye"></i>';
      boton_habilitar.dataset.id = rs[i]['_id'];
      boton_habilitar.addEventListener('click', confirmar_habilitarRS);
      celda_habilitar.appendChild(boton_habilitar);

    }else{
      if(idrs == rs[i]['id_institucion'] && rs[i]['estado'] == "Activo"){
        fila.insertCell().innerHTML = rs[i]['facebook'];
        fila.insertCell().innerHTML = rs[i]['instagram'];
        fila.insertCell().innerHTML = rs[i]['twitter'];
        fila.insertCell().innerHTML = rs[i]['email'];
        fila.insertCell().innerHTML = rs[i]['youtube'];
      }
    }

  };
};


function confirmar_borradoRS() {
  let id = this.dataset.id;
  Swal.fire({
    title: '¿Está seguro que desea eliminar las redes sociales?',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, estoy seguro.'
  }).then((result) => {
    if (result.value) {
      borrar_rs(id);
      rs = listar_rs();
      mostrar_rs();
      Swal.fire({
        title: '¡red social eliminada!',
        text: 'La red social fue eliminada con éxito.',
        type: 'success',

      })
    }
  })

};

function confirmar_deshabilitarRS() {
  let id = this.dataset.id;
  Swal.fire({
    title: '¿Está seguro que desea deshabilitar la red social?',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, estoy seguro.'
  }).then((result) => {
    if (result.value) {
      deshabilitar_rs(id);
      rs = listar_rs();
      mostrar_rs();
      Swal.fire({
        title: '¡Deshabilitada con éxito!',
        type: 'success',

      })
    }
  })
};


function confirmar_habilitarRS() {
  let id = this.dataset.id;
  Swal.fire({
    title: '¿Está seguro que desea habilitar la red social?',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, estoy seguro.'
  }).then((result) => {
    if (result.value) {
      habilitar_rs(id);
      rs = listar_rs();
      mostrar_rs();
      Swal.fire({
        title: '¡Habilitada con éxito!',
        type: 'success',

      })
    }
  })
};
mostrar_rs();
