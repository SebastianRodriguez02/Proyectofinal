const express = require('express');
const Router = express.Router();
const registroController = require('../controllers/controllerRegistro');
const inicioController = require('../controllers/ControllerInicio');
const productoCotroller = require('../controllers/productoController');
const ContactoController = require('../controllers/ControllerContacto');

//  Productos

Router.get('/optener-productos', productoCotroller.obtenerProductos);
Router.get('/optener-producto/:id',productoCotroller.obtenerProducto);
Router.put('/actualizar-producto/:id', productoCotroller.actualizarProducto);
Router.post('/crear-producto', productoCotroller.crearProducto);
Router.delete('/eliminar-producto/:id', productoCotroller.eliminarProducto);


//Registro

Router.post('/crear-registro', registroController.crearRegistro);
Router.get('/obtener-registros', registroController.obtenerRegistros);
Router.get('/obtener-registro/:id', registroController.obtenerRegistro);
Router.put('/actualizar-registro/:id', registroController.actualizarRegistro);
Router.delete('/eliminar-registro/:id', registroController.eliminarRegistro);

// Inicio Sesion

Router.get('/obtener-inicio/:correo :contrasena', inicioController.obternerInicio);

//Contacto

Router.post('/crear-contacto', ContactoController.crearContato);
Router.get('/obtener-contactos', ContactoController.obtenerContatos);
Router.get('/obtener-contacto/:id', ContactoController.obtenerContacto);
Router.put('/actualizar-contacto/:id', ContactoController.actualizarProducto)
Router.delete('/eliminar-contacto/:id', ContactoController.eliminarContacto)


module.exports = Router;


