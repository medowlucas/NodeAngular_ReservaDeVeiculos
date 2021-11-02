export class Veiculo{

    placa:string;
    modelo:string;
    ano:number;
    estado:boolean;

    constructor(placa:string,
        modelo:string,
        ano:number,
        estado:boolean
    ){
        this.placa = placa;
        this.modelo = modelo;
        this.ano = ano;
        this.estado = estado;
    }

}
