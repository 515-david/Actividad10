const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    nombreUsuario: String,
    apellidoUsuario: String,
    celularUsuario: Number,
    emailUsuario: String,
    direccionUsuario: String,
    usserUsuario: String,
    passwordUsuario: String,
})

module.exports = mongoose.model('Usuario', UsuarioSchema)