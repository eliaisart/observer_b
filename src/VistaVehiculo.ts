import { Observador } from "./Observador.js";
import { Vehiculo } from "./Vehiculo.js";

export class VistaVehiculo implements Observador{
    //PROPIEDADES
    protected vehic: Vehiculo;
    protected desc_text: string;    //mostrara descripcion y precio
    
    constructor(){
        //asignara un vehiculo a la propiedad de vehiculo de la clase
        //agrega el contenido de la clase array de observadores 
        //llamara al metodo actualizaTexo() definido en VistaVehiculo
    }

    actualizaTexto(){
        //actualiza propiedad texto de la clase para asignar descripcion y precio del vehiculo
        let vehiculo = new Vehiculo();
    
        this.desc_text = Vehiculo.arguments;
        
        /*
        NO ESTA 
        */
    }

    actualiza(){
        //llama al metodo actualizaTexto() y al metodo muestra() 
        this.actualizaTexto;
        this.muestra;
    }

    muestra(){
        //imprime por pantalla la propiedad texto
        console.log("Descripcion: " + this.desc_text);
    }
}