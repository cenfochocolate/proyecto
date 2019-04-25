'use strict';

const tbl_contacto = document.querySelector('#tbl_contacto tbody');
const filtro_contacto = document.querySelector('#buscar_contacto');
const estadoC = document.querySelector('#estadoC');
const editarC = document.querySelector('#editarC');
const eliminarC = document.querySelector('#eliminarC');
const deshabilitarC = document.querySelector('#deshabC');
const habilitarC = document.querySelector('#habC');
const ins = sessionStorage.getItem('id_lugar');
const logC = sessionStorage.getItem('idu');
let contacto = listar_contacto();

if(ins == logC){
  estadoC.classList.remove('hideInput');
  editarC.classList.remove('hideInput');
  eliminarC.classList.remove('hideInput');
  deshabilitarC.classList.remove('hideInput');
  habilitarC.classList.remove('hideInput');
}else{
  estadoC.classList.add('hideInput');
  editarC.classList.add('hideInput');
  eliminarC.classList.add('hideInput');
  deshabilitarC.classList.add('hideInput');
  habilitarC.classList.add('hideInput');
}
mostrar_datos();

filtro_contacto.addEventListener('keyup' , mostrar_datos);
function mostrar_datos(){
  let contacto = listar_contacto();
  let filtro = filtro_contacto.value;

  tbl_contacto.innerHTML='';
  for(let i = 0; i<contacto.length;i++){
    if(contacto[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())&&contacto[i]['id_institucion'] == ins && ins == logC){
  let fila = tbl_contacto.insertRow();
      fila.insertCell().innerHTML = contacto[i]['nombre'];
      fila.insertCell().innerHTML = contacto[i]['departamento'];
      fila.insertCell().innerHTML = contacto[i]['telefono'];
      fila.insertCell().innerHTML = contacto[i]['correo'];
      fila.insertCell().innerHTML = contacto[i]['extension'];
      let imagen = document.createElement('img');
      imagen.classList.add('imagentbl_contacto');
      if(contacto[i]['imagen']){
        imagen.src = contacto[i]['imagen'];
      }else{
        imagen.src = './imgs/imgph.jpg';
      }
      fila.insertCell().appendChild(imagen);
      fila.insertCell().innerHTML = contacto[i]['estado'];

      let celda_configuracion = fila.insertCell();

      let boton_editar = document.createElement('a');
      boton_editar.innerHTML ='<i class="fas fa-edit"></i>';
      boton_editar.href=`actualizar_contacto.html?id_contacto=${contacto[i]['_id']}`

      celda_configuracion.appendChild(boton_editar);

      let celda_eliminar = fila.insertCell();

      let boton_eliminar = document.createElement('a');
      boton_eliminar.href= '#';
      boton_eliminar.innerHTML= '<i class="fas fa-trash-alt"></i>';
      boton_eliminar.dataset.id= contacto[i]['_id'];
      boton_eliminar.addEventListener('click', confirmar_borrado);
      celda_eliminar.appendChild(boton_eliminar);

      let celda_deshabilitar = fila.insertCell();
         let boton_deshabilitar = document.createElement('a');
         boton_deshabilitar.innerHTML= '<i class="fas fa-eye-slash"></i>';
         boton_deshabilitar.dataset.id = contacto[i]['_id'];
         boton_deshabilitar.addEventListener('click', confirmar_deshabilitar);
         celda_deshabilitar.appendChild(boton_deshabilitar);

         let celda_habilitar = fila.insertCell();
         let boton_habilitar = document.createElement('a');
         boton_habilitar.innerHTML= '<i class="fas fa-eye"></i>';
         boton_habilitar.dataset.id =contacto[i]['_id'];
         boton_habilitar.addEventListener('click', confirmar_habilitar);
         celda_habilitar.appendChild(boton_habilitar);

    }else{
      if(contacto[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())&&contacto[i]['id_institucion'] == ins && contacto[i]['estado'] == "Activo"){
          let fila = tbl_contacto.insertRow();
        fila.insertCell().innerHTML = contacto[i]['nombre'];
        fila.insertCell().innerHTML = contacto[i]['departamento'];
        fila.insertCell().innerHTML = contacto[i]['telefono'];
        fila.insertCell().innerHTML = contacto[i]['correo'];
        fila.insertCell().innerHTML = contacto[i]['extension'];
        let imagen = document.createElement('img');
        imagen.classList.add('imagentbl_contacto');
        if(contacto[i]['imagen']){
          imagen.src = contacto[i]['imagen'];
        }else{
          imagen.src = './imgs/imgph.jpg';
        }
        fila.insertCell().appendChild(imagen);
      }
    }
  }
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
      borrar_contacto(id);
       contacto = listar_contacto();
       mostrar_datos();
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
   deshabilitar_contacto(id);
    contacto = listar_contacto();
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
   habilitar_contacto(id);
    contacto = listar_contacto();
    mostrar_datos();
    Swal.fire({
      title:'¡Habilitada con éxito!',
      type:'success'
    })
  }
})
};
mostrar_datos();
