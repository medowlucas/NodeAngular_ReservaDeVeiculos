import {Veiculo} from '../BackEnd/model/veiculo';
import { EnumReserva } from './model/EnumReserva';

var veiculosArray:Array<object> = [ //EXEMPLO DE BANCO
  {placa:'a',modelo:'ferrari',ano:1,estado:true},
  {placa:'b',modelo:'mus',ano:2,estado:true}
];

var agendaArray:Array<Agenda> = [
  {inicioReserva:'',fimReserva: '', estadoReserva: EnumReserva[2],placaVeiculo:'a'}//EXEMPLO DE BANCO
]

import express from 'express';
import { Agenda } from './model/agenda';
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

app.get('/agenda', (req, res)=>{            
  return res.status(200).json(agendaArray);
})

//metodo post via dados no body
app.post('/veiculos', (req, res) => { 
  const { placa } = req.body; 
  const { modelo } = req.body; 
  const { ano } = req.body; 
  const { estado } = req.body;
  veiculosArray.push(new Veiculo(placa,modelo,ano,estado));
  return res.status(200); 
})

app.post('/agenda', (req, res) => { 
  const { inicioReserva } = req.body; 
  const { fimReserva } = req.body; 
  const { estadoReserva } = req.body; 
  const { placaVeiculo } = req.body;
  const agenda = (new Agenda(inicioReserva,fimReserva,estadoReserva,placaVeiculo));
  agendaArray.push(agenda);
  console.log(agendaArray);
  return res.status(200); 
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

