const express = require('express');
const app = express();
const port = 3030;

app.get('/',(req,res)=> res.send('por fin estamos en el navegador XD'))
app.get('/contacto',(req,res)=>res.send('CONTACTO'))

app.listen(3030, ()=> console.log('Servidor corriendo en el puerto ' + port));