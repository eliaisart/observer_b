import { Observador } from "./Observador.js";
import { Vehiculo } from "./Vehiculo.js";

export class VistaVehiculo implements Observador{
    //PROPIEDADES
    protected vehic: Vehiculo;
    protected desc_text: string;    //mostrara descripcion y precio
    
    protected array = Array<Observador>();

    constructor(vehiculo: Vehiculo){
        
        //asignara un vehiculo a la propiedad de vehiculo de la clase
        this.vehic = vehiculo;

        //agrega el contenido de la clase al array de observadores 
        this.vehic.agrega(this);

        //llamara al metodo actualizaTexto() definido en VistaVehiculo
        this.actualizaTexto();


        //PREGUNTAR
    }

    actualizaTexto(){
        //actualiza propiedad texto (desc_text) de la clase para asignar descripcion y precio del vehiculo
        
        let new_desc = this.vehic.getDescripcion();
        let new_precio = this.vehic.getPrecio();
        this.desc_text = "Descripcion" + new_desc + "Precio" + new_precio;
        return this.desc_text;
        
        //PREGUNTAR 
    }

    actualiza(){
        //llama al metodo actualizaTexto() y al metodo muestra() 
        this.actualizaTexto();
        this.muestra();
    }

    muestra(){
        //imprime por pantalla la propiedad texto
        console.log("Descripcion: " + this.desc_text);
    }
}