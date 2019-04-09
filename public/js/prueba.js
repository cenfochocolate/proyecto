


let institucion = buscar_institucion('5ca2356b2de61c511c24ee06');
let nombre = document.querySelector('#nombre');
let historia = document.querySelector('#historia');

nombre.innerHTML = institucion['nombre_comercial'];
historia.innerHTML = institucion['refencia_historica'];