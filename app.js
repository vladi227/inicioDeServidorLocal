const express = require('express');
const app = express();
const port = 3030;
const path = require('path');

app.get('/',(req,res)=> res.sendFile(path.join(__dirname,'views','home.html')));
app.get('/contacto',(req,res)=>res.send('CONTACTO'));

app.listen(3030, ()=> console.log('Servidor corriendo en el puerto ' + port));