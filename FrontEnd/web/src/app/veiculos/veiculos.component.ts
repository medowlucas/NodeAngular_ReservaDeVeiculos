import { Agenda } from './Agenda';
import { EnumReserva } from './EnumReserva';
import { ApiService } from './apiService';
import { Component, OnInit } from '@angular/core';
import { Veiculo } from './Veiculo';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {

  public todosVeiculos:Array<Veiculo>=[];
  public todaAgenda:Array<Agenda>=[];
  public _rows:Array<Veiculo>=[];
  public dataAtual = new Date();
  public dataInicio:any = this.converterData(this.dataAtual).toString().slice(0, 16);
  public dataFim:any = this.converterData(this.dataAtual).toString().slice(0, 16);
  public veiculoSelecionado:string = '';
  public agendar:Agenda = new Agenda('','',EnumReserva[1],'');
  public selectOptions:Array<Veiculo> = [];

  constructor(private _apiService: ApiService) {
  }
 
  ngOnInit():void{
    this.loadVeiculos();
    this.loadAgenda();
  }

  async loadVeiculos(){
    this.todosVeiculos = await this._apiService.getVeiculos();
  }

  async loadAgenda(){
    this.todaAgenda = await this._apiService.getAgenda();
  }

  filtrarDisponivel(a?:number){
    this.filtrarData();
    this.veiculoSelecionado = this.todosVeiculos[0].placa;
    this._rows = this.todosVeiculos;
    this._rows = this._rows.filter(disponivel=>disponivel.estado);
    if(a){
      console.log(EnumReserva[a]);
      this._rows.filter(agenda=>agenda.placa);//
    }
  }

  async gravarAgenda(agenda:Agenda){
    await this._apiService.postAgenda(agenda);
    window.location.reload()
  }

  converterData(d:any){
    let iso = d.getFullYear().toString() + "-";
    iso += (d.getMonth() + 1).toString().padStart(2, '0') + "-";
    iso += d.getDate().toString().padStart(2, '0') + "T";
    iso += d.getHours().toString().padStart(2, '0') + ":";
    iso += d.getMinutes().toString().padStart(2, '0') + ":";
    iso += d.getSeconds().toString().padStart(2, '0');
    return iso;
  }

  onSubmit(){
    this.agendar.inicioReserva = this.dataInicio;
    this.agendar.fimReserva = this.dataInicio;
    this.agendar.estadoReserva = EnumReserva[1];
    this.agendar.placaVeiculo = this.veiculoSelecionado;
    this.confirmacao(this.agendar);
  }

  formClean(){
    this.dataAtual = new Date();
    this.dataInicio = this.converterData(this.dataAtual).toString().slice(0, 16);
    this.dataFim = this.converterData(this.dataAtual).toString().slice(0, 16);
    window.location.reload();
  }

  confirmacao(obj:Agenda) {
    if(this.veiculoSelecionado != ''){
      if(confirm(`Confirma o período de reserva para este Veículo?`)) {
        this.gravarAgenda(obj);
        alert(`Veículo agendado com Sucesso!`);
      }
      this.formClean();
    }else{
      alert('Escolha um veículo disponível')
    }
  }

  recebeVeiculoOnChange(valor:any){
    this.veiculoSelecionado = valor;
  }

  filtrarData(){
    var veiculoDataFiltrado:Array<string> = [];
    this.selectOptions = [];
    this.todaAgenda.forEach((element:Agenda)=>{
      if((this.dataInicio < element.inicioReserva && this.dataFim < element.inicioReserva)||(this.dataInicio > element.fimReserva)){
        veiculoDataFiltrado.push(element.placaVeiculo);
      }
    });
    veiculoDataFiltrado.forEach((placa:string)=>{
      this._rows.forEach((veiculo=>{
        if(veiculo.placa == placa){
          this.selectOptions.push(veiculo);
        }
      }))
    }); 
    this._rows = new Array();
    this._rows = this.selectOptions;
  }

}
