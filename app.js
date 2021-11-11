const express = require('express');
const app = express();
app.use(express.static('public'));

//(etiqueta lo pisa la clase y la clase la pisa el id) 
app.listen(3000, ()=>{
    console.log('Servidor funcionando estilos');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});