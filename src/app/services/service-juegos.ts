import { Juego } from "../models/juego";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceJuegos {
    private listaJuegos:Juego[]
    private url:string = "";
    constructor(public http:HttpClient) {
      this.listaJuegos = []
    }

    recuperarJuegos(){
       return this.http.get('url');
    }
}
