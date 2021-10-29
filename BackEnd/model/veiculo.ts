export class Veiculo{
    private placa;

    constructor(placa?:string){
        this.placa = placa;    
    }

    getPlaca(){
        return this.placa;
    }
}