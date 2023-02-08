export class Juego {
    private id:string;
    private nombre:string;
    private precio:number;
    private comprado:boolean;

    constructor(id:string, nombre:string,precio:number, comprado:boolean) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.comprado = comprado;
    }

    
    public get Id() : string {
        return this.id
    }
    public get Nombre() : string {
        return this.nombre
    }
    public get Precio() : number {
        return this.precio
    }
    public get Comprado() : boolean {
        return this.comprado
    }
    

     

}
