const express = require('express');
const cors = require('cors');
const app = express();

// declarar las rutas de la api 
const usuarioRutas = require('../rutas/usuarioRuta')

// MIDDLEWARES
app.use(express.json());
app.use(cors()); 

// Cosnumo de las rutas 
app.use('/api', usuarioRutas)

module.exports = app