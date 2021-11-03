import { EnumReserva } from './EnumReserva';

export class Agenda{

    inicioReserva:string;
    fimReserva:string;
    estadoReserva:string;
    placaVeiculo:string;

    constructor(inicioReserva: string,
        fimReserva: string,
        estadoReserva: string,
        placaVeiculo: string
    ){
        this.inicioReserva = inicioReserva;
        this.fimReserva = fimReserva;
        this.estadoReserva = estadoReserva;
        this.placaVeiculo = placaVeiculo;
    }

}
