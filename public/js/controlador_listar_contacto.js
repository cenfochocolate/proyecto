'use strict';

const tabla = document.querySelector('#tbl_contacto tbody');
const inputFiltro = document.querySelector('#buscar_contacto');


let contacto = listar_contacto();

mostrar_datos();

inputFiltro.addEventListener('keyup' , mostrar_datos);

function mostrar_datos(){
  let contacto = listar_contacto();
  let filtro = inputFiltro.value;
  tabla.innerHTML='';

  for(let i = 0; i <contacto.length; i++){
    if(contacto[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())){
    let fila = tabla.insertRow();

      fila.insertCell().innerHTML = contacto[i]['nombre'];
      fila.insertCell().innerHTML = contacto[i]['id'];
      fila.insertCell().innerHTML = contacto[i]['departamento'];
      fila.insertCell().innerHTML = contacto[i]['telefono'];
      fila.insertCell().innerHTML = contacto[i]['correo'];
      fila.insertCell().innerHTML = contacto[i]['extension'];
      let imagen = document.createElement('img');
      imagen.classList.add('imagenTabla');
      if(contacto[i]['imagen']){
        imagen.src = contacto[i]['imagen'];
      }else{
        imagen.src = './imgs/imgph.jpg';
      }
      fila.insertCell().appendChild(imagen);
  
      }
  
    };
  };
  
  mostrar_datos();
  