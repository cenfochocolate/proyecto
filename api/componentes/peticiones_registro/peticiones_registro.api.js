'use strict';
const peticionRegisro = require('./peticiones_registro.model');

module.exports.registrar = function (req, res) {

    let nuevaPeticion = new peticionRegisro({
        cedula_compania: req.body.cedula_compania,
        codigo: req.body.codigo
    });

    nuevaPeticion.save(function (error) {

        if (error) {
            res.json({
                success: false,
                msj: 'No se pudo enviar el c\u00D3digo ' + error
            });
        } else {
            res.json({
                success: true,
                msj: 'C\u00D3digo enviado correctamente'
            });
        }

    });

};

module.exports.validar = function (req, res) {

    console.log('*********************************************************************************************' + req.body.cedula_compania);
    console.log('********************************************************************************' + req.body.codigo);

    peticionRegisro.findOne({ cedula_compania: req.body.cedula_compania }).then(

        function (peticiones_registro) {

            if ((peticiones_registro) && (peticiones_registro.codigo == req.body.codigo)) {

                //fecha de registro
                let d = new Date(peticiones_registro.fecha_peticion);

                let today = new Date();
                today.setHours(today.getHours() + 4);


                if (d.getTime() < today.getTime()) {

                    res.json({
                        success: true,
                        msg: 'Bienvenido'
                    })
                }

                else {

                    res.json({
                        success: false,
                        msg: 'Se acabo el tiempo'
                    })
                }

            } else {

                res.json({
                    success: false,
                    msg: 'No se encontro'
                })

            }

        }

    )


};