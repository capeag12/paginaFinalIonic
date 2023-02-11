import { Juego } from "./juego"

export class Usuario {
    private id:string
    private correo:string
    private nombre:string
    

    constructor(id:string,correo:string, nombre:string) {
        this.id = id
        this.correo = correo
        this.nombre = nombre
       
    }
    
    public get Correo() : string {
        return this.correo
    }

    public get Nombre() : string {
        return this.nombre
    }
    
    

}
