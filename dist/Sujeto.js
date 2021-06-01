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
        //this.aux.actualiza();
        for (let i = 0; i < this.array.length; i++) {
            this.array[i].actualiza();
        }
    }
}
