import { Juego } from "./juego"

export class Usuario {
    private correo:string
    private nombre:string
    

    constructor(correo:string, nombre:string) {
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
