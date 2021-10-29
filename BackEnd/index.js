const express = require('express');
const porta = 3000;
const app = express(); 
app.get('/', function(req, res) {
res.status(200).send('Seu servidor está correto!');
});
app.listen(porta);