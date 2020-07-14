const express = require('express');
const UsuarioControl = require('../control/usuarioControl');


var api = express.Router();


// Ruta agregar Usuarios
api.post('/', UsuarioControl.crearUsuario);
// Ruta Consultar Usuarios
api.get('/', UsuarioControl.obtenerUsuario);
// Ruta Actualizar Usuarios
api.put('/:id', UsuarioControl.actualizarUsuario);
// Ruta Eliminar Usuarios
api.delete('/:id', UsuarioControl.eliminarUsuario);

module.exports = api;