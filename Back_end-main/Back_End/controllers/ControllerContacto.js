const Contacto = require('../models/modelContacto')

exports.crearContato = async (req, res) => {
   try {
    let contato = new Contacto(req.body)
    await contato.save()
    res.json(contato)
   } catch (error) {
    console.log(error)
    res.status(500).send('Ups... El contato No se pudo crear')
   }

}

exports.obtenerContatos = async (req, res) => {
    try {
        let contacto = await Contacto.find();
        res.json(contacto)
        console.log(contacto)
    } catch (error) {
        console.log(error)
        res.status(500).send('Ups... no hay contactos en la base')
    }
}

exports.obtenerContacto = async (req, res) => {
    try {
        let contacto = await Contacto.findById(req.params.id)
        if(!contacto){
            res.status(400).send('Contacto no encontrado')
        }
        res.json(contacto)
        console.log(contacto)
    } catch (error) {
        console.log(error)
        res.status(500).send('Ups... Algo salio mal')
    }
}

exports.actualizarProducto = async (req, res) => {
    try {
        let { nombre, correo, numero, mensaje} = req.body
        let contacto = await  Contacto.findById(req.params.id)
        if(!contacto){
            res.status(400).json({msg: 'Producto no encontrado'})
        }
        contacto.nombre = nombre
        contacto.correo = correo
        contacto.numero = numero
        contacto.mensaje = mensaje
        contacto = await Contacto.findOneAndUpdate({_id: req.params.id}, contacto, {new: true})
        res.send(contacto)
        console.log(contacto)

    } catch (error) {
        console.log(error)
        res.status(500).send('Ups... algo pasa al modificar el contacto')

    }
}

exports.eliminarContacto = async (req, res) => {
    try {
        let contacto = await Contacto.find({_id: req.params.id})
        if(!contacto){
            res.status(400).send('Contato no encontrado')
        }
        await Contacto.findOneAndRemove({_id: req.params.id})
        res.send('El contacto fue eliminado')
        console.log(contacto)

    } catch (error) {
        console.log(error)
        res.status(500).send('Ups... algo pasa al elimianr el contacto')
    }
}