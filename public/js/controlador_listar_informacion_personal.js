'use strict';

const tabla = document.querySelector('#tbl_informacion_personal tbody');
const inputFiltro = document.querySelector('#buscar_informacion');


let informacion_personal = listar_informacion_personal();

mostrar_datos();

inputFiltro.addEventListener('keyup' , mostrar_datos);
 
function mostrar_datos(){
  let informacion_personal = listar_informacion_personal();
  let filtro = inputFiltro.value;
  tabla.innerHTML='';

  for(let i = 0; i <informacion_personal.length; i++){
    if(informacion_personal[i]['nombres'].toLowerCase().includes(filtro.toLowerCase())){
    let fila = tabla.insertRow();

      fila.insertCell().innerHTML = informacion_personal[i]['nombres'];
      fila.insertCell().innerHTML = informacion_personal[i]['apellidos'];
      fila.insertCell().innerHTML = informacion_personal[i]['fecha_nacimiento'];
      fila.insertCell().innerHTML = informacion_personal[i]['id'];
      fila.insertCell().innerHTML = informacion_personal[i]['cantidad_hijos'];
      fila.insertCell().innerHTML = informacion_personal[i]['direccion'];
    

      let imagen = document.createElement('img');
      imagen.classList.add('imagenTabla');
      if(informacion_personal[i]['imagen']){
        imagen.src = informacion_personal[i]['imagen'];
      }else{
        imagen.src = './imgs/imgph.jpg';
      }
      fila.insertCell().appendChild(imagen);
  
      }
  
    };
  };
  
  mostrar_datos();
   
  