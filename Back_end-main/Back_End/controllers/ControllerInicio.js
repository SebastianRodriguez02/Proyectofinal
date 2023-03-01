const inicioSesion = require('../controllers/controllerRegistro')

exports.obternerInicio = async (req, res) => {
    try {
        let inicio = await inicioSesion.find({correo:req.body.correo, contrasena:req.body.contrasena})
        if (!inicio) {
            res.status(404).send('Usuario no emncontrado')
        }
        res.send(inicio)
    } catch (error) {
        console.log(error)
        res.status(500).send('Ups... Algo salio mal')
    }
}