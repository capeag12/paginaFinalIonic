export class Juego {
    private id:string;
    private nombre:string;
    private precio:number;
    private idVendedor:string;

    constructor(id:string, nombre:string,precio:number,idVendedor:string) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.idVendedor = idVendedor;
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
    public get IdVendedor() : string {
        return this.idVendedor
    }
    
    
    

     

}
