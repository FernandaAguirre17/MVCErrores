import { ModeloFrutas } from "../models/frutas.models.js";

ModeloFrutas.create({
    name:"Platano",
    color:"Amarillo",
    numero:1
})

export const test = () => {
    console.log("Funciona el controlador")
}