'use strict';
const precio_model = require ('./precio.model');

module.exports.registrar = (req,res) =>{
    let nuevo_precio = new precio_model(
        {
            numero : req.body.numero,
            formato : req.body.formato,
            precio : req.body.precio,
            pago : req.body.pago
        }
    );
    nuevo_precio.save(function(error){
        if(error){
            res.json(
                {
                    success: false,
                    msg : `No se pudo registrar el precio, ocurrió el siguiente error ${error}`
                }
            );
        }else{
            res.json(
                {
                    success : true,
                    msg : `Se envió correctamente el registro`
                }
            )
        }
    });
};

module.exports.listar_todos = (req, res) => {
    precio_model.find().then(
        function(precio){
            if (precio.length > 0) {
                res.json(
                    {
                        success: true,
                        precio: precio
                    }
                )
            }else{
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
