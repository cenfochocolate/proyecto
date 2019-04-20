'use strict';

/**
 * Exportamos todas las dependencias necesarias para establecer la conexión
 */
const express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    mongoose = require('mongoose');

/**
 * Se definen las variables necesarias para la conexión con MongoDB
 */
let db = mongoose.connection,
    dburl = 'mongodb://Admin:chocolateadmin@proyecto-shard-00-00-bcf9m.mongodb.net:27017,proyecto-shard-00-01-bcf9m.mongodb.net:27017,proyecto-shard-00-02-bcf9m.mongodb.net:27017/test?ssl=true&replicaSet=Proyecto-shard-0&authSource=admin&retryWrites=true',
    //dburl = 'mongodb://kenaguilar7:perico@proyecto-shard-00-00-vm912.mongodb.net:27017,proyecto-shard-00-01-vm912.mongodb.net:27017,proyecto-shard-00-02-vm912.mongodb.net:27017/proyecto_individual?ssl=true&replicaSet=proyecto-shard-0&authSource=admin&retryWrites=true',
    // dburl = 'mongodb://pabs:1biblioteca9@ds163680.mlab.com:63680/bd_biblioteca',
    port = 4000;

/**
 * Se le indica que cree un servidor extra dentro del puerto 4000 y escuche los cambios que se le hagan a esos archivos
 */
let server = app.listen(port, _server());

/**
 * Se define la conexión con Mongoose, enviándole como parámetro la url de la base de datos
 */
mongoose.connect(dburl, { useNewUrlParser: true });

/**mongodb+srv://trickered:<password>@proyecto-jts49.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
 * Si la conexión falla, imprime en consola el error
 */
db.on('error', console.error.bind(console, 'Error de conexión con la base de datos: '));

/**
 * Si la conexión es exitosa nos imprime en la consola que se ha establecido conexión con Mongo
 */
db.once('open', function () {
    console.log('Base de datos conectada correctamente');
});

/**
 * Le indicamos a express que envíe las respuestas a la carpeta "public"
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Le indicamos a la aplicación que el formato de los datos va a ser JSON
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


const utiles_institucion = require('./componentes/utiles_institucion/utiles_institucion.route');
const cita = require('./componentes/cita/cita.route');
const pcomercial = require('./componentes/pagina_comercial/pcomercial.route');
const idiomas = require('./componentes/idiomas/idiomas_route');
const precio = require('./componentes/precio/precio.route');
const requisito = require('./componentes/requisitos/requisito.route');
const utiles_mep = require('./componentes/utiles_mep/utiles_mep.route');
const redes_sociales = require('./componentes/redes_sociales/redes_sociales.route');
const noticias = require('./componentes/noticia/noticia.route');
const sadicional = require('./componentes/servicios_adicionales/sadicional.route');
const preguntas = require('./componentes/preguntas/preguntas.route');
const contacto = require('./componentes/contacto/contacto.route');
const material = require('./componentes/material_informativo/material_informativo.route');
const mensualidad = require('./componentes/mensualidad/mensualidad.route');
const pref_utiles = require('./componentes/seleccion_lista_utiles/seleccion_lista.route');
const peticiones_registro = require('./componentes/peticiones_registro/peticiones_registro.route');
const usuario = require('./componentes/usuarios/usuarios.route');
const evaluacion = require('./componentes/evaluacion/evaluacion.route');
const comentarios = require('./componentes/comentarios/comentarios.route');




app.use('/api', comentarios);
app.use('/api', pref_utiles);
app.use('/api', redes_sociales);
app.use('/api', utiles_mep);
app.use('/api', idiomas);
app.use('/api', precio);
app.use('/api', requisito);
app.use('/api', pcomercial);
app.use('/api', cita);
app.use('/api', utiles_institucion);
app.use('/api', noticias);
app.use('/api', sadicional);
app.use('/api', preguntas);
app.use('/api', contacto);
app.use('/api', material);
app.use('/api', mensualidad);
app.use('/api', peticiones_registro);
app.use('/api', usuario);
app.use('/api', evaluacion);



// Se guarda todo lo que se ha realizado
module.exports = app;

function _server() {
    console.log('Back-end corriendo en el puerto ' + port);
};
