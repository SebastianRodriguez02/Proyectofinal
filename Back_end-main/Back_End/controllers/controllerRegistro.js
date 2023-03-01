const Registro = require('../models/modelRegistro');


exports.crearRegistro = async (req, res) => {
    
    try {
        let registros;
        registros = new Registro(req.body);
        await registros.save();
        res.send(registros);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... hubo un error');
    }
}

exports.obtenerRegistros = async (req, res) =>{
    console.log(res.body)
    try {
        let registros = await Registro.find();
        res.json(registros);
    } catch (error) {
        console.log(error)
        res.status(500).send('Ups... hubo un error')
    }
}

exports.obtenerRegistro = async (req, res) =>{
   
    try {
        let registros = await Registro.findById(req.params.id)
        if (!registros){
            res.status(400).json({msg: 'Producto no encontrado'})
        }
        res.json(registros)
    } catch (error) {
        console.log(error)
        res.status(500).send('El producto no se encontro')
    }
}

exports.actualizarRegistro = async(req, res)=>{
    
    try {
        let {nombre, apellido, correo, numero, nombreMascota, tipo, contrasena, retificacionContra} = req.body
        let registro = await Registro.findById(req.params.id)
        if(!registro){
            res.status(400).json( 'Registro no encontrado')
        }
        registro.nombre = nombre
        registro.apellido = apellido
        registro.correo = correo
        registro.numero = numero
        registro.nombreMascota = nombreMascota
        registro.tipo = tipo
        registro.contrasena = contrasena
        registro.retificacionContra = retificacionContra
        registro = await  Registro.findOneAndUpdate({_id: req.params.id}, registro, {new:true})
        res.json(registro)
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... algo pasa al modificar el registro')
        
    }
}

exports.eliminarRegistro = async (req, res) => {
    
    try {
        let registro = await Registro.find({_id: req.params.id})
        if(!registro){
            res.status(400).send('Registro no eliminado')
        }
        await Registro.findOneAndRemove({_id: req.params.id})
        res.json('Registro eliminado')
    } catch (error) {
        console.log(error)
        res.estatus(500).send('Ups... el Registro no se pudo eliminar.')
    }
}
 