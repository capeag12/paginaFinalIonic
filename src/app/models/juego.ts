export class Juego {
    private id:string;
    private nombre:string;
    private precio:number;
    private comprado:boolean;
    private rutaImg:string

    constructor(id:string, nombre:string,precio:number, comprado:boolean,rutaImg:string) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.comprado = comprado;
        this.rutaImg = rutaImg
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

    public get RutaImg() : string {
        return this.rutaImg
    }
    
    

     

}
