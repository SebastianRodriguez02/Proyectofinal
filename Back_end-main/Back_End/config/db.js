const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

require('dotenv').config({path: 'config.env'});

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('DB Conectado');
    } catch (error) {
        console.log(error);
        process.exit(1)
        }
}

module.exports = conectarDB;