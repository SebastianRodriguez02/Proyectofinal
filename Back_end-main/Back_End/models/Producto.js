const mongoose = require('mongoose');

const ProductoShema = mongoose.Schema({
    nombreProducto: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    fec_cre: {
        type: Date,
        default: Date.now()
    }
}
)


module.exports = mongoose.model('Producto', ProductoShema);