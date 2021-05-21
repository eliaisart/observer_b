import { Observador } from "./Observador.js";

export abstract class Sujeto{
    protected array = new Array<Observador>();
    protected aux: Observador;
    
    agrega(elementos: Observador){
        this.array.push(elementos)
    }

    suprime(){
        this.array.pop();
    }

    notifica(){
        this.aux.actualiza();
    }
}