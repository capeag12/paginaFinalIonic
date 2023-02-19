import { types } from "util";

export type Peticion={
    token:string,
    usuario:UsuarioPeticion
}

export type JuegoPeticion={
       _id: string,
        nombre: string,
        precio: number,
        seller: string
    }

export type UsuarioPeticion={
    email:string
        nombre:string
        _v:string
        _id:string
}