'use strict';
const tabla = document.querySelector('#tbl_pcomercial tbody');
const id_institucion = sessionStorage.getItem('id_lugar');

let mostrar_datos = () => {
  let pcomercial = listar_pcomercial();

  for(let i = 0; i < pcomercial.length; i++){
    let fila = tabla.insertRow();
    if(id_institucion == pcomercial[i]['id_institucion']){
      fila.insertCell().innerHTML = pcomercial[i]['pcomercial'];
    }


  };
};

mostrar_datos();
