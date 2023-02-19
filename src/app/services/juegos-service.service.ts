import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Juego } from '../models/juego';
import { JuegoPeticion } from '../types';

@Injectable({
  providedIn: 'root'
})
export class JuegosServiceService {
  private urlbase = "http://localhost:3000";
  constructor(private http:HttpClient) { }

  getJuegos(){
    return this.http.get<JuegoPeticion[]>(`${this.urlbase}/obtenerJuegos`)
  }

  getJuegosUsuario(){
    return this.http.get<JuegoPeticion[]>(`${this.urlbase}/obtenerJuegosUsuario`)
  }

  addJuego(juego:Juego){
    let newGame = {
      nombre:juego.Nombre,
      precio:juego.Precio

    }
    return this.http.post<JuegoPeticion>(`${this.urlbase}/addJuego`,newGame)
  }

}
