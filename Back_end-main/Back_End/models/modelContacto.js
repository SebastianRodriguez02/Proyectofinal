const mongoose = require('mongoose');

const ContactoShema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    correo:{
        type: String,
        required: true
    },
    numero:{
        type: String,
        required: true
    },
    mensaje:{
        type: String,
        required: true
    },
     fec_cre:{
        type: Date,
        default: Date.now()
     }

})

module.exports = mongoose.model('Contacto',ContactoShema );