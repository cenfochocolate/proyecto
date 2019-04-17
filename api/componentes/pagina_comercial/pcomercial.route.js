'use strict';

const express = require('express');
const router = express.Router(); 
const api_pcomercial = require('./pcomercial.api'); 
 
router.param('id_pagina', function(req, res, next, id_pagina){ 
 
  req.body.id_pagina = id_pagina; 
  next(); 
 
}); 
 
router.route('/registrar_pcomercial') 
  .post( 
    function(req, res){ 
      api_pcomercial.registrar(req, res) 
    } 
  ); 
 
  router.route('/actualizar_pagina') 
    .post( 
      function(req, res){ 
        api_pcomercial.actualizar_pagina(req, res); 
      } 
    ); 
 
  router.route('/listar_pcomercial') 
    .get( 
      function(req, res){ 
        api_pcomercial.listar_todos(req, res) 
      } 
    ); 
 
  router.route('/buscar_pagina/:id_pagina') 
      .get( 
        function(req, res){ 
          api_pcomercial.buscar_por_id(req, res); 
        } 
      ); 
       
module.exports = router; 