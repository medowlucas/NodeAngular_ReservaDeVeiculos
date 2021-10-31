import {Veiculo} from '../BackEnd/model/veiculo';

var veiculosArray:Array<object> = [
  {placa:'a',modelo:'ferrari',ano:1,estado:true},
  {placa:'b',modelo:'mus',ano:2,estado:true}
];

import express from 'express';
const app = express();
app.use(express.json()); 
const PORT = 3000;

// listar todos
app.get('/veiculos', (req, res)=>{            
  return res.status(200).json(veiculosArray);
})
// listar por index
app.get('/veiculos/:index', (req, res)=>{     
  const index =Number(req.params.index);
})
//metodo post via dados no body
app.post('/veiculos', (req, res) => { 
  const { placa } = req.body; 
  const { modelo } = req.body; 
  const { ano } = req.body; 
  const { estado } = req.body;
  veiculosArray.push(new Veiculo(placa,modelo,ano,estado));
  return res.status(200).json(veiculosArray[veiculosArray.length-1]); 
})
// inserir pelo index do array
app.put('/veiculos/:index', (req, res) => {
  const index = Number(req.params.index); 
  const body = req.body;
  veiculosArray[index] = new Veiculo(body.placa,body.modelo,body.ano,body.estado);
  return res.status(200).json(veiculosArray[index]);
})
//deletar por index
app.delete('/veiculos/:index', (req, res)=>{
  const index = Number(req.params.index);
  const deletado = veiculosArray[index];
  veiculosArray.splice(index,1);
  // return res.status(200).json(deletado);
  return res.send();
})


app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

