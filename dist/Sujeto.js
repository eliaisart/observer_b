export class Sujeto {
    constructor() {
        this.array = new Array();
    }
    agrega(elementos) {
        this.array.push(elementos);
    }
    suprime() {
        this.array.pop();
    }
    notifica() {
    }
}
