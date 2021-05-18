import { Observador } from "./Observador.js";
import { Vehiculo } from "./Vehiculo.js";

export abstract class Sujeto{
    protected array = new Array<Observador>();

    agrega(elementos: Vehiculo){
        this.array.push(elementos)
    }

    suprime(){
        this.array.pop();
    }

    notifica(){

    }
}