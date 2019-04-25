'use strict';

const tabla = document.querySelector('#tbl_instituciones tbody');
const inputFiltro= document.querySelector('#buscar_institucion');

let usuarios = listar_instituciones();

mostrar_instituciones();

inputFiltro.addEventListener('keyup', mostrar_instituciones);

function mostrar_instituciones(){
  let usuarios = listar_instituciones();
  let filtro=inputFiltro.value;
  tabla.innerHTML='';

  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i]['tipo'].includes('institucion') && usuarios[i]['nombre_comercial'].toLowerCase().includes(filtro.toLowerCase())&& usuarios[i]['aprobada'] == false) {
      let fila = tabla.insertRow();
      let celdaNombre = fila.insertCell();
      let fechaHoy = moment();
      let fechaIns= usuarios[i]['fecha'];
      let diferencia = fechaHoy.diff(fechaIns,"days");

      console.log(diferencia);
      celdaNombre.innerHTML = usuarios[i]['nombre_comercial'];
      celdaNombre.classList.add('botonid');
      celdaNombre.addEventListener('click', function(){

      sessionStorage.setItem('id_lugar', usuarios[i]['_id']);

      window.location.href = 'perfil_institucion.html'
        })
      let celdaGrado = fila.insertCell();
      celdaGrado.innerHTML = usuarios[i]['grado'];


      let celdaImagen = fila.insertCell();
      let imagen = document.createElement('img');
      imagen.classList.add('imagentablainstituciones');
      if (usuarios[i]['url_foto']) {
        imagen.src = usuarios[i]['url_foto'];
      } else {
        imagen.src = './imgs/imgph.jpg';
      }

      celdaImagen.appendChild(imagen);

      let celda_aceptar = fila.insertCell();
      let boton_aceptar = document.createElement('a');
      boton_aceptar.innerHTML= '<i class="fas fa-trash-alt"></i>';
      boton_aceptar.dataset.id= usuarios[i]['_id'];
      boton_aceptar.addEventListener('click', confirmar_aceptar);
      celda_aceptar.appendChild(boton_aceptar);

      let celda_eliminar = fila.insertCell();
      let boton_eliminar = document.createElement('a');
      boton_eliminar.innerHTML= '<i class="fas fa-trash-alt"></i>';
      boton_eliminar.dataset.id= usuarios[i]['_id'];
      boton_eliminar.addEventListener('click', confirmar_eliminar);
      celda_eliminar.appendChild(boton_eliminar);

      if(diferencia >= 3){
        celdaNombre.classList.add('days');
        celdaGrado.classList.add('days');
        celdaImagen.classList.add('days');
        celda_aceptar.classList.add('days');
        celda_eliminar.classList.add('days');
      }else{
        celdaNombre.classList.remove('days');
        celdaGrado.classList.remove('days');
        celdaImagen.classList.remove('days');
        celda_aceptar.classList.remove('days');
        celda_eliminar.classList.remove('days');
      }

    }
  };
};

function confirmar_aceptar(){
  let id= this.dataset.id;
  Swal.fire({
    title:'¿Está seguro que desea aceptar la institución?',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, estoy seguro.'
}).then((result)=>{
  if(result.value){
    aceptar_institucion(id);
    usuarios = listar_instituciones();
    mostrar_instituciones();
    Swal.fire({
      title:'¡institucion aceptada!',
      text:'La institucion fue aceptada con éxito.',
      type:'success'
    })
  }
})
};
function confirmar_eliminar(){
  let id= this.dataset.id;
  Swal.fire({
    title:'¿Está seguro que desea denegar la institución?',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, estoy seguro.'
}).then((result)=>{
  if(result.value){
    eliminar_institucion(id);
    usuarios = listar_instituciones();
    mostrar_instituciones();
    Swal.fire({
      title:'¡institucion denegada!',
      text:'La institucion fue denegada con éxito.',
      type:'success'
    })
  }
})
};
