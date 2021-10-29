import {Veiculo} from '../BackEnd/model/veiculo';

var veiculo = new Veiculo('ABC123');

import express from 'express';
const porta = 3000;
const app = express(); 
const PORT = 3000;
app.get('/', (req, res) => res.send(veiculo.getPlaca()));
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
  });

