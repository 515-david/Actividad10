const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    nombreUsuario: String,
    apellidoUsuario: String,
    celularUsuario: Number,
    emailUsuario: String,
    direccionUsuario: String,
    usuarioUsuario: String,
    contraseñaUsuario: String,
})

module.exports = mongoose.model('Usuario', UsuarioSchema)