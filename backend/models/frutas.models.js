import {Schema, model} from "mongoose";

const EsquemaFrutas = new Schema ({
    name:String,
    color:String,
    numero:Number,
})

export const ModeloFrutas = new model("Tabla de Frutas", EsquemaFrutas)






