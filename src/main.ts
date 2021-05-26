import { Vehiculo } from "./Vehiculo.js";
import { VistaVehiculo } from "./VistaVehiculo.js";

let vehiculo = new Vehiculo ();
vehiculo.setDescripcion ("Vehiculo economico");
vehiculo.setPrecio (5000);

let vistaVehiculo = new VistaVehiculo (vehiculo);
vistaVehiculo.muestra ();
vehiculo.setPrecio (4500);

let vistaVehiculo2 = new VistaVehiculo (vehiculo);
vehiculo.setPrecio (5500);