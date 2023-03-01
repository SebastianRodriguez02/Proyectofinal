const Producto = require("../models/Producto")

exports.obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        console.log(productos);
        res.status(500).send('Ups... hubo un error')
    }


}

exports.obtenerProducto = async(req, res) => {
    try {
        let producto
        producto = await Producto.findById(req.params.id)
        if(!producto){
            res.status(400).json({msg: 'Producto no encontrado'})
        }
        res.json(producto)
    } catch (error) {
        console.log(error)
        res.status(500).send('El producto no se encontro')
        
    }
}

exports.crearProducto = async (req, res) => {
    console.log(req.body);
    try {
        let producto;
        producto = new Producto(req.body);
        await producto.save();
        res.send(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... hubo un error')
    }
}
exports.actualizarProducto = async (req, res) => {
   try {
    let {nombreProducto,categoria,precio,url} = req.body
    let producto = await Producto.findById(req.params.id)
    if(!producto){
        res.status(400).json({msg: 'Producto no encontrado'})
    }
    producto.nombreProducto = nombreProducto
    producto.categoria= categoria
    producto.precio = precio
    producto.url= url
    producto= await Producto.findOneAndUpdate({_id: req.params.id}, producto,{new: true})
    res.json(producto)
   } catch (error) {
    console.log(error);
    res.status(500).send('Ups... algo pasa al modificar el producto')
    
   }
}

exports.eliminarProducto = async (req, res) => {
    try {
        let producto
        producto = await Producto.find({_id: req.params.id})
        if(!producto){
            res.status(400).json({msg: 'Producto no eliminado'})
        }
        await Producto.findOneAndRemove({_id: req.params.id})
        res.json({msg: 'Producto eliminado '})
    } catch (error) {
        console.log(error)
        res.status(500).send('El producto no se pudo eliminar')
        
    }
}