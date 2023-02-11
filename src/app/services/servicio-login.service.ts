import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Peticion} from "../types"
@Injectable({
  providedIn: 'root'
})
export class ServicioLoginService {
  private urlbase:string;
  constructor(private http:HttpClient) { 
    this.urlbase = "";
  }

  logearme(correo:string, contraseña:string):Observable<Peticion>{
    let jsonObs:Object = new Object()
    const options = {headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}};
    let usuarioLog = {
      email:"correoelectronico@correo.com",
      passwd:"lolalelilu"
    }
    const texto = JSON.stringify(usuarioLog)
    
    
    return this.http.post<Peticion>('http://localhost:3000/loginUsuario', texto ,options)
  }


}
