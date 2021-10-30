export class Veiculo{

    private placa:string;
    private modelo:string;
    private ano:number;
    private estado:boolean;

    constructor(placa?:string,
        modelo?:string,
        ano?:number,
        estado?:boolean
    ){
        this.placa = placa!;
        this.modelo = modelo!;
        this.ano = ano!;
        this.estado = estado!;
    }

    public setPlaca(placa:string): void{
        this.placa = placa;
    }

    public getPlaca():string{
        return this.placa != ''? this.placa:'Placa não definida';
    }

    public setModelo(modelo:string):void{
        this.modelo = modelo;
    }

    public getModelo():string{
        return this.modelo;
    }

    public setAno(ano:number):void{
        this.ano = ano;
    }

    public getAno():number{
        return this.ano;
    }

    public setEstado(estado:boolean):void{
        this.estado = estado;
    }

    public getEstado():string{
        return this.estado? 'Disponível' : 'Manutenção';
    }
    
}