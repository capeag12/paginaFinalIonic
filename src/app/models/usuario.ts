import { Juego } from "./juego"

export class Usuario {
    private correo:string
    private nombre:string
    private juegosSubidos:Juego[]
    private juegosPublicados:Juego[]

    constructor(correo:string, nombre:string, juegosSubidos:Juego[], juegosPublicados:Juego[]) {
        this.correo = correo
        this.nombre = nombre
        this.juegosSubidos = juegosSubidos
        this.juegosPublicados = juegosPublicados
    }

    
    public get Correo() : string {
        return this.correo
    }

    public get Nombre() : string {
        return this.nombre
    }
    
    public get JuegosSubidos() : Juego[] {
        return this.juegosSubidos
    }

    public get JuegosPublicados() : Juego[] {
        return this.juegosPublicados
    }
    

}
