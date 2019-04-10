'use strict'
const modelo_contacto= require('./contacto.model');

module.exports.registrar = (req, res) => {
    let nuevo_contacto = new modelo_contacto(
        {
          id_institucion : req.body.id_institucion,
          nombre: req.body.nombre,
          id: req.body.id,
          departamento: req.body.departamento,
          telefono: req.body.telefono,
          correo: req.body.correo,
          extension: req.body.extension,
          imagen:req.body.imagen
        }
    );

    nuevo_contacto.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `No se pudo registrar el contacto, ocurrió el siguiente error ${error}`
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg: `Se registró el contacto`
                }
            );

        }

    });

};
module.exports.listar_todos = (req, res) => {
    modelo_contacto.find().then(
        function (contacto) {
            if (contacto.length > 0) {
                res.json(
                    {
                        success: true,
                        contacto: contacto
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        contacto: 'No se encontraron contactos'
                    }
                )
            }
        }
    )
};