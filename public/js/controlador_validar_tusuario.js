let input_tipo = sessionStorage.getItem('tipo_usuario');
let paneldec = document.querySelector('#panel');
let perf = document.querySelector('#perfil');
let id = sessionStorage.getItem('idu');
let idi = sessionStorage.getItem('id_lugar');

function validarhref(){
  if(input_tipo == 'institucion'){
    sessionStorage.setItem('id_lugar', id);
    perf.href="perfil_institucion.html";

  }else{
    sessionStorage.setItem('id_lugar', id);
    perf.href="perfil_padre.html";

  }


};

function validarInicio() {
  if(input_tipo == 'admin'){
    paneldec.classList.remove('hideInput');
  }else{
    paneldec.classList.add('hideInput');
  }
};


validarInicio();
perf.addEventListener('click', validarhref);
