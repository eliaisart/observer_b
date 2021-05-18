import { Sujeto } from "./Sujeto.js";
export class Vehiculo extends Sujeto {
    getDescripcion() {
        return this.descripcion;
    }
    getPrecio() {
        return this.precio;
    }
    setDescripcion(desc) {
        desc = this.descripcion;
        this.aux.actualiza();
    }
    setPrecio(prec) {
        prec = this.precio;
        this.aux.actualiza();
    }
}
