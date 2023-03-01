const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

const app = express();

conectarDB();
app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/router'));

app.listen(4300, () => {
    console.log('El servidor se esta ejecutando')
})
