'use strict';
const modelo_pc = require('./pcomercial.model');

module.exports.registrar = (req, res) => {
  let nueva_pagina = new modelo_pc(
    {
      id_institucion: req.body.id_institucion,
      pcomercial: req.body.pcomercial,
      estado: 'Activo'

    }
  );
  nueva_pagina.save(function (error) {
    if (error) {
      res.json(
        {
          success: false,
          msj: `No se pudo registrar la página, ocurriò el siguiente error ${error}`
        }
      );
    } else {
      res.json(
        {
          success: true,
          msj: `Se registró  satisfactoriamente la página`
        }
      );
    }
  });
};
module.exports.listar_todos = (req, res) => {
  modelo_pc.find().then(
    function (pcomercial) {
      if (pcomercial.length > 0) {
        res.json(
          {
            success: true,
            pcomercial: pcomercial
          }
        )
      } else {
        res.json(
          {
            success: false,
            pcomercial: 'No hay página comercial registrada'
          }
        )
      }
    }
  )
};

module.exports.buscar_por_id = (req, res) => {
  modelo_pc.find({ _id: req.body.id_pagina }).then(
    function (pcomercial) {
      if (pcomercial) {
        res.json(
          {
            success: true,
            pcomercial: pcomercial
          }
        )
      } else {
        res.json(
          {
            success: false,
            pcomercial: 'No hay página comercial registrada'
          }
        )
      }
    }
  )
};

module.exports.actualizar_pagina = function (req, res) {
  modelo_pc.findByIdAndUpdate(req.body.id_pagina, { $set: req.body },
    function (error) {
      if (error) {
        res.json(
          {
            success: false,
            msg: `No se pudo actualizar la pregunta.`
          }
        );
      } else {
        res.json(
          {
            success: true,
            pcomercial: `Se actualizó correctamente la pregunta y repuesta.`
          }
        );
      }
    }

  );

}
