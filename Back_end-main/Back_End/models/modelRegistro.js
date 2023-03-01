const mongoose = require('mongoose');

const RegistroSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required:true
    },
    correo: {
        type: String,
        required:true
    },
    numero: {
        type: String,
        required:true
    },
    nombreMascota: {
        type: String,
        required:true
    },
    tipo: {
        type: String,
        required:true
    },
    contrasena: {
        type: String,
        required:true
    },
    retificacionContra: {
        type: String,
        required:true
    },
    fec_cre: {
        type: Date,
        default: Date.now()
    }
    })

    module.exports = mongoose.model('Registro', RegistroSchema );