'use strict';

const tabla = document.querySelector('#tbl_preguntas tbody');
const inputFiltro = document.querySelector('#buscar_preguntas')
let id_institucion = sessionStorage.getItem('id_lugar');

mostrar_datos();

inputFiltro.addEventListener('keyup' , mostrar_datos);

function mostrar_datos () {
    let preguntas = listar_preguntas();
    let filtro = inputFiltro.value;
    tabla.innerHTML='';

    for(let i =0; i<preguntas.length; i++){
      if(id_institucion == preguntas[i]['id_institucion']){
        if(preguntas[i]['preguntas'].toLowerCase().includes(filtro.toLowerCase())){
                let fila = tabla.insertRow();
                fila.insertCell().innerHTML = preguntas[i]['preguntas'];
                fila.insertCell().innerHTML = preguntas[i]['respuestas'];
        }
      }


};

};

mostrar_datos();
