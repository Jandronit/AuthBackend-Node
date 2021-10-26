const express = require('express');
const cors = require('cors');


// Crear el servidor/aplicación de express
const app = express();

// CORS
app.use( cors() );

// Lectura y parseo del body
app.use( express.json() );

// Rutas
app.use('/api/auth', require('./routes/auth'));

app.listen(4000, () =>{
    console.log(`servidor corriendo en puerto ${ 4000 }`);
})
