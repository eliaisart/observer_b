import { Sujeto } from "./Sujeto.js";
import { VistaVehiculo } from "./VistaVehiculo.js";

export class Vehiculo extends Sujeto{
    protected descripcion: string;
    protected precio: number;

    protected aux: VistaVehiculo;

    getDescripcion(){
        return this.descripcion;
    }

    getPrecio(){
        return this.precio;
    }

    setDescripcion(desc: string){
        this.descripcion = desc;
        this.notifica();
    }

    setPrecio(prec: number){
        this.precio = prec;
        this.notifica();
    }
}