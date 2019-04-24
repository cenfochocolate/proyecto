'use strict';
const precio_model = require('./precio.model');

module.exports.registrar = function (req, res) {
    let nuevo_precio = new precio_model(
        {
            id_institucion:req.body.id_institucion,
            numero: req.body.numero,
            formato: req.body.formato,
            precio: req.body.precio,
            pago: req.body.pago,
            estado: 'Activo'
        }
    );
    nuevo_precio.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `No se pudo registrar el precio, ocurrió el siguiente error ${error}`
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg:`¡Se registró correctamente!`
                }
            )
        }
    });
};

module.exports.listar_todos = function (req, res) {
    precio_model.find().then(
        function (precio) {
            if (precio.length > 0) {
                res.json(
                    {
                        success: true,
                        precio: precio
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        precio: 'No se encontraron resultados'
                    }
                )
            }
        }
    )
};
module.exports.buscar_por_id = function (req, res) {
    precio_model.find({ _id: req.body.id_precio }).then(
        function (precio) {
            if (precio) {
                res.json(
                    {
                        success: true,
                        precio: precio
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        precio: precio
                    }
                )
            }
        }
    )
};
module.exports.actualizar_precio = function (req, res) {
    precio_model.findByIdAndUpdate(req.body.id, { $set: req.body },
        function (error) {
            if (error) {
                res.json(
                    {
                        success: false,
                        msg: `No se pudo actualizar.` 
                    }
                );
            } else {
                res.json(
                    {
                        success: true,
                        msg:  `` 
                    }
                );
            }
        }

    );

}

module.exports.borrar = (req, res) => {
    precio_model.findByIdAndDelete(req.body.id,
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo eliminar' });

            } else {
                res.json({ success: true, msg: '¡Eliminado correctamente!' });
            }
        }
    )
};