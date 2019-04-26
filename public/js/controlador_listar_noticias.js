const tablaNoticias = document.querySelector('#tbl_noticias tbody');
let noticias = listar_noticias();
const editarN = document.querySelector('#editarn');
const eliminarN = document.querySelector('#eliminarn');
const deshabilitarN = document.querySelector('#deshabilitarn');
const habilitarN = document.querySelector('#habilitarn');
const estadon = document.querySelector('#estadon');
const logn = sessionStorage.getItem('idu');
const institucionN = sessionStorage.getItem('id_lugar');
mostrar_noticias();

if(institucionN == logn){
editarN.classList.remove('hideInput');
eliminarN.classList.remove('hideInput');
deshabilitarN.classList.remove('hideInput');
habilitarN.classList.remove('hideInput');
estadon.classList.remove('hideInput');
}else{
  editarN.classList.add('hideInput');
eliminarN.classList.add('hideInput');
deshabilitarN.classList.add('hideInput');
habilitarN.classList.add('hideInput');
estadon.classList.add('hideInput');
}


input_Filtro.addEventListener('keyup', mostrar_noticias);

function mostrar_noticias() {
  let noticias = listar_noticias();
  let filtro = input_Filtro.value;
  tablaNoticias.innerHTML = '';
  for (let i = 0; i < noticias.length; i++) {
      if (noticias[i]['nombre'].toLowerCase().includes(filtro.toLowerCase()) && noticias[i]['id_institucion'] == institucionN && institucionN == logn) {
        let fila = tablaNoticias.insertRow();
        fila.insertCell().innerHTML = noticias[i]['nombre'];
        fila.insertCell().innerHTML = noticias[i]['descripcion'];
        let imagen = document.createElement('img');
        imagen.classList.add('imagentablaNoticias');
        if (noticias[i]['imagen']) {
          imagen.src = noticias[i]['imagen'];
        } else {
          imagen.src = './imgs/imgph.jpg';
        }
        fila.insertCell().appendChild(imagen);
          fila.insertCell().innerHTML = noticias[i]['estado'];
        let celda_configuracion = fila.insertCell();

        let boton_editar = document.createElement('a');
        boton_editar.innerHTML ='<i class="fas fa-edit"></i>';
        boton_editar.href=`modificar_noticias.html?id_noticias=${noticias[i]['_id']}`

        celda_configuracion.appendChild(boton_editar);

        let celda_eliminar = fila.insertCell();

        let boton_eliminar = document.createElement('a');
        boton_eliminar.href= '#';
        boton_eliminar.innerHTML= '<i class="fas fa-trash-alt"></i>';
        boton_eliminar.dataset.id= noticias[i]['_id'];
        boton_eliminar.addEventListener('click', confirmar_borrado);
        celda_eliminar.appendChild(boton_eliminar);

        let celda_deshabilitar = fila.insertCell();
        let boton_deshabilitar = document.createElement('a');
        boton_deshabilitar.innerHTML= '<i class="fas fa-eye-slash"></i>';
        boton_deshabilitar.dataset.id = noticias[i]['_id'];
        boton_deshabilitar.addEventListener('click', confirmar_deshabilitar);
        celda_deshabilitar.appendChild(boton_deshabilitar);

        let celda_habilitar = fila.insertCell();
        let boton_habilitar = document.createElement('a');
        boton_habilitar.innerHTML= '<i class="fas fa-eye"></i>';
        boton_habilitar.dataset.id = noticias[i]['_id'];
        boton_habilitar.addEventListener('click', confirmar_habilitar);
        celda_habilitar.appendChild(boton_habilitar);
      }else{
        if (noticias[i]['nombre'].toLowerCase().includes(filtro.toLowerCase()) && noticias[i]['id_institucion'] == institucionN ) {
          let fila = tablaNoticias.insertRow();
          fila.insertCell().innerHTML = noticias[i]['nombre'];
          fila.insertCell().innerHTML = noticias[i]['descripcion'];
          let imagen = document.createElement('img');
          imagen.classList.add('imagentablaNoticias');
          if (noticias[i]['imagen']) {
            imagen.src = noticias[i]['imagen'];
          } else {
            imagen.src = './imgs/imgph.jpg';
          }
          fila.insertCell().appendChild(imagen);
        }
      }
  };
};


   function confirmar_borrado(){
     let id= this.dataset.id;
     Swal.fire({
       title:'¿Está seguro que desea eliminar?',
       type: 'warning',
       showCancelButton: true,
       confirmButtonColor: '#3085d6',
       cancelButtonColor: '#d33',
       confirmButtonText: 'Sí, estoy seguro.'
   }).then((result)=>{
     if(result.value){
      borrar_noticias(id);
       noticias = listar_noticias();
       mostrar_noticias();
       Swal.fire({
        title: '¡Eliminada con éxito!',
         type:'success'
       })
     }
   })

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
   deshabilitar_noticias(id);
    noticias = listar_noticias();
    mostrar_noticias();
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
   habilitar_noticias(id);
    noticias = listar_noticias();
    mostrar_noticias();
    Swal.fire({
      title:'¡Habilitada con éxito!',
      type:'success'
    })
  }
})
};
mostrar_noticias();
