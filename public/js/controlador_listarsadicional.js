'use strict';
const tabla = document.querySelector('#tbl_sadicional tbody');
const inputFiltro = document.querySelector('#buscar_sadicional_institucion');
const id_institucion = sessionStorage.getItem('id_lugar');


let sadicional = listar_sadicional();



mostrar_datos();

inputFiltro.addEventListener('keyup', mostrar_datos);

function mostrar_datos() {
  let sadicional = listar_sadicional();
  let filtro = inputFiltro.value;
  tabla.innerHTML = '';


  let fila = tabla.insertRow();
  for (let i = 0; i < sadicional.length; i++) {

    if (sadicional[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())) {

      if (id_institucion == sadicional[i]['id_institucion']) {


        fila.insertCell().innerHTML = sadicional[i]['nombre'];
        fila.insertCell().innerHTML = sadicional[i]['descripcion'];
        let imagen = document.createElement('img');
        imagen.classList.add('imagenTabla');
        if (sadicional[i]['imagen']) {
          imagen.src = sadicional[i]['imagen'];
        } else {
          imagen.src = './imgs/imgph.jpg';
        }
        fila.insertCell().appendChild(imagen);
        fila.insertCell().innerHTML = sadicional[i]['estado'];

        fila.insertCell().innerHTML = sadicional[i]['estado'];

        let celda_configuracion = fila.insertCell();

        let boton_editar = document.createElement('a');
        boton_editar.innerHTML = '<i class="fas fa-edit"></i>';
        boton_editar.href = `actualizar_servicio.html?id_servicio=${sadicional[i]['_id']}`;

        celda_configuracion.appendChild(boton_editar);

        let celda_eliminar = fila.insertCell();

        let boton_eliminar = document.createElement('a');
        boton_eliminar.href = '#';
        boton_eliminar.innerHTML = '<i class="fas fa-trash-alt"></i>';
        boton_eliminar.dataset.id = sadicional[i]['_id'];
        boton_eliminar.addEventListener('click', confirmar_borrado);
        celda_eliminar.appendChild(boton_eliminar);

        //deshabilitar 
        let celda_deshabilitar = fila.insertCell();
        let boton_deshabilitar = document.createElement('a');
        boton_deshabilitar.innerHTML = '<i class="fas fa-eye-slash"></i>';
        boton_deshabilitar.dataset.id = sadicional[i]['_id'];
        boton_deshabilitar.addEventListener('click', confirmar_deshabilitar);
        celda_deshabilitar.appendChild(boton_deshabilitar);

        //habilitar
        let celda_habilitar = fila.insertCell();
        let boton_habilitar = document.createElement('a');
        boton_habilitar.innerHTML = '<i class="fas fa-eye"></i>';
        boton_habilitar.dataset.id = sadicional[i]['_id'];
        boton_habilitar.addEventListener('click', confirmar_habilitar);
        celda_habilitar.appendChild(boton_habilitar);
      }
    } else {
      if (sadicional[i]['nombre'].toLowerCase().includes(filtro.toLowerCase()) && sadicional[i]['id_institucion'] == institucion && sadicional[i]['estado'] == "Activo")



        fila.insertCell().innerHTML = sadicional[i]['nombre'];
      fila.insertCell().innerHTML = sadicional[i]['descripcion'];
      let imagen = document.createElement('img');
      imagen.classList.add('imagenTabla');
      if (sadicional[i]['imagen']) {
        imagen.src = sadicional[i]['imagen'];
      } else {
        imagen.src = './imgs/imgph.jpg';
      }
      fila.insertCell().appendChild(imagen);

      fila.insertCell().innerHTML = sadicional[i]['estado'];

      let celda_deshabilitar = fila.insertCell();
      let boton_deshabilitar = document.createElement('a');
      boton_deshabilitar.innerHTML = '<i class="fas fa-eye-slash"></i>';
      boton_deshabilitar.dataset.id = sadicional[i]['_id'];
      boton_deshabilitar.addEventListener('click', confirmar_deshabilitar);
      celda_deshabilitar.appendChild(boton_deshabilitar);

      let celda_habilitar = fila.insertCell();
      let boton_habilitar = document.createElement('a');
      boton_habilitar.innerHTML = '<i class="fas fa-eye"></i>';
      boton_habilitar.dataset.id = sadicional[i]['_id'];
      boton_habilitar.addEventListener('click', confirmar_habilitar);
      celda_habilitar.appendChild(boton_habilitar);


    }
  };
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
      borrar_servicio(id);
      sadicional = listar_sadicional();
      mostrar_datos();
      Swal.fire({
        title: '¡Matrícula eliminada!',
        text: 'La matrícula fue eliminada con éxito.',
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
      deshabilitar_servicio(id);
      sadicional = listar_sadicional();
      mostrar_datos();
      Swal.fire({
        title: '¡Deshabilitado con éxito!',
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
      habilitar_servicio(id);
      sadicional = listar_sadicional();
      mostrar_datos();
      Swal.fire({
        title: '¡Habilitado con éxito!',
        type: 'success'
      })
    }
  })
};

mostrar_datos();