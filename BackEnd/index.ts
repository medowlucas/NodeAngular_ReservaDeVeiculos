import {Veiculo} from '../BackEnd/model/veiculo';

var veiculo = new Veiculo('aaa','Mustang',1990,true); //instancia no construtor

var veiculo2 = new Veiculo(); //instancia e seta depois 
veiculo2.setModelo('Ferrari');
veiculo2.setAno(2002);
veiculo2.setPlaca('QQQ2013K');

import express from 'express';
const porta = 3000;
const app = express(); 
const PORT = 3000;
app.get('/1', (req, res) => res.send(veiculo));
app.get('/2', (req, res) => res.send(veiculo2));

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
  });

