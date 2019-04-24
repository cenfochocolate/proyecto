'use strict';
const peticion_registro = require('../peticiones_registro/peticiones_registro.model');
const nodeMailer = require("nodemailer");
const usuarioModel = require('./usuarios.model');
const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'cenfochocolate@gmail.com',
        pass: 'grupochocolate1'
    }
});


module.exports.registrar = function (req, res) {
    let nuevoUsuario = new usuarioModel(
        {
            tipo: req.body.tipo,
            identificacion: req.body.identificacion,
            nombre: req.body.nombre,
            primer_apellido: req.body.primer_apellido,
            segundo_apellido: req.body.segundo_apellido,
            nacionalidad: req.body.nacionalidad,
            nombre_comercial: req.body.nombre_comercial,
            cantidad_de_hijos: req.body.cantidad_de_hijos,
            anio_fundacion: req.body.anio_fundacion,
            grado: req.body.grado,
            clase: req.body.clase,
            genero: req.body.clase,
            esecialidad: req.body.especialidad,
            refencia_historica: req.body.refencia_historica,
            provincia: req.body.provincia,
            canton: req.body.canton,
            distrito: req.body.distrito,
            direccion: req.body.direccion,
            longitud: req.body.longitud,
            latitud: req.body.latitud,
            correo: req.body.correo,
            telefono: req.body.telefono,
            extencion_telefono: req.body.extencion_telefono,
            fax: req.body.fax,
            web: req.body.web,
            url_archivo: req.body.url_archivo,
            url_foto: req.body.url_foto,
            aprobada: req.body.aprobada,
            estado: "Activo",
            contrasenna: req.body.contrasenna
        }
    );

    usuarioModel.findOne(
        {
            identificacion: req.body.identificacion
        }
    ).then(
        function (usuarios) {
            if (usuarios) {
                res.json({
                    success: false,
                    msj: 'La cédula ya se encuentra registrada'
                });
            } else {
                const codigo_registro = Math.trunc(Math.random() * (0, 999999));
                nuevoUsuario.save(function (error) {

                    if (error) {
                        res.json({
                            success: false,
                            msj: 'El usuario no pudo ser registrado: ' + error
                        });
                    } else {
                        let nuevaPeticion = new peticion_registro({
                            cedula_compania: req.body.identificacion,
                            codigo: codigo_registro
                        });
                        nuevaPeticion.save(function (error) {
                            if (error) {
                                res.json({
                                    success: false,
                                    msj: 'No se pudo enviar el código ' + error
                                });
                            } else {
                                let mailOptions = {
                                    from: 'cenfochocolate@gmail.com',
                                    to: nuevoUsuario.correo,
                                    subject: 'confirmación de Registro',
                                    html: `<html>
                                         <span>el codigo de confirmacion es el ${codigo_registro}</span>
                                         </html>`
                                };
                                transporter.sendMail(mailOptions, function (error, info) {
                                    if (error) {
                                        console.log(error);
                                    } else {
                                        console.log('correo enviado correctamente' + nuevoUsuario.correo);
                                    }
                                });
                            }
                        });
                        res.json({
                            success: true,
                            msj: 'El usuario ha sido registrada de forma exitosa'
                        });
                    }
                });
            }
        }
    )
};



/**
 * Funcion para listar datos
 * @param {any} req
 * @param {any} res
 */
module.exports.listar_usuarios = function (req, res) {
    /**
     * Funcion de mongo que busca todos los modelos institucion
     */
    usuarioModel.find().then(
        /**
         * Si encuentra instituciones las vuelve
         * sino devuelve mensaje indicando que no
         * @param {any} usuarios
         */
        function (usuarios) {
            if (usuarios.length > 0) {

                res.json({
                    success: true,
                    usuarios: usuarios
                })

            } else {
                res.json({
                    success: false,
                    usuarios: 'No se encontraron usuarios'
                })
            }
        }
    )
};

module.exports.validar = function (req, res) {


    console.log(req.body.correo);
    console.log(req.body.contrasenna);

    usuarioModel.findOne({ correo: req.body.correo }).then(

        function (usuario) {


            if ((usuario) && (usuario.contrasenna == req.body.contrasenna) && (usuario.aprobada == true) && (usuario.estado == "Activo")) {

                res.json({
                    success: true,
                    tipo: usuario.tipo,
                    _id: usuario._id,
                    distrito: usuario.distrito

                });
            } else {
                res.json({
                    success: false

                });

            }


        }
    )
};
//getCentrosPorAporbar



//module.exports.getCentrosPorAporbar = function (req, res) {



//    usuarioModel.find({ tipo: 'institucion', aprobada: false}).then(
        /**
         * Si encuentra instituciones las vuelve
         * sino devuelve mensaje indicando que no
         // @param {any} usuarios
         */
//        function (instituciones) {
//            if (instituciones.length > 0) {
//
//                res.json({
//                    success: true,
//                    instituciones: instituciones
//                })

//          } else {
//                res.json({
//                    success: false,
//                    instituciones: 'No se encontraron usuarios'
//                })
//            }
//        }
//    )

//};


module.exports.buscar_institucion = function (req, res) {


    usuarioModel.findOne({ _id: req.body.id }).then(

        function (usuario) {


            if (usuario) {

                res.json({
                    success: true,
                    institucion: usuario

                });

            } else {
                res.json({
                    success: false,
                });
            }


        }
    )
};

module.exports.buscar_por_id =(req,res)=>{
  usuarioModel.find({_id : req.body.id_perfil}).then(
    function(usuarios){
      if (usuarios) {
        res.json(
          {
            success:true,
            usuarios:usuarios
          }
        )
      } else {
        res.json(
          {
            success:false,
            usuarios:'No se han encontrado usuarios'
          }
        )
      }
    }
  )
};

module.exports.actualizar_perfil = function(req,res){
  usuarioModel.findByIdAndUpdate(req.body.id,{$set:req.body},
    function (error){
      if (error) {
        res.json({
          success:false,
          msj:`No se puede actualizar este perfil`
        });
      } else {
        res.json({
          success:true,
          usuarios:`El perfil ha sido actualizado correctamente.`
        });
      }
    }
  );
};

module.exports.borrar = (req, res) =>{
    usuarioModel.findByIdAndDelete(req.body.id,
        function(error){
            if(error){
                res.json({ success : false, msg: 'No se pudo denegar la institucion.'});

            }else{
                res.json({ success : true, msg: 'institucion denegada.'});
            }
        }
    )
};
