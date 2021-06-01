import { Sujeto } from "./Sujeto.js";
export class Vehiculo extends Sujeto {
    getDescripcion() {
        return this.descripcion;
    }
    getPrecio() {
        return this.precio;
    }
    setDescripcion(desc) {
        this.descripcion = desc;
        this.notifica();
    }
    setPrecio(prec) {
        this.precio = prec;
        this.notifica();
    }
}
