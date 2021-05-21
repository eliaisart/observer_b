import { Observador } from "./Observador.js";
import { Vehiculo } from "./Vehiculo.js";

export class VistaVehiculo implements Observador{
    //PROPIEDADES
    protected vehic: Vehiculo;
    protected desc_text: string;    //mostrara descripcion y precio
    
    protected array = Array<Observador>();

    constructor(vehic: Vehiculo){
        
        //asignara un vehiculo a la propiedad de vehiculo de la clase
        vehic = new Vehiculo();

        //agrega el contenido de la clase al array de observadores 
        this.array.push(vehic);

        //llamara al metodo actualizaTexto() definido en VistaVehiculo
        this.actualizaTexto();
    }

    actualizaTexto(){
        //actualiza propiedad texto (desc_text) de la clase para asignar descripcion y precio del vehiculo
        
        this.desc_text  
        
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