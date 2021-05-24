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


        //PREGUNTAR
    }

    actualizaTexto(){
        //actualiza propiedad texto (desc_text) de la clase para asignar descripcion y precio del vehiculo
        
        let new_desc = this.vehic.getDescripcion();
        let new_precio = this.vehic.getPrecio();
        this.desc_text = new_desc + new_precio;
        return this.desc_text;
        
        //PREGUNTAR 
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