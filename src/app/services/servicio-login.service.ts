import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import {Peticion} from "../types"
import { Preferences } from '@capacitor/preferences';
@Injectable({
  providedIn: 'root'
})
export class ServicioLoginService {
  private urlbase:string;
  private token:string|undefined
  constructor(private http:HttpClient) { 
    this.urlbase = "http://localhost:3000";
    this.token = undefined

  }

  getTokenLocal():string | undefined{
    let token = localStorage.getItem('tokenTienda');
    let tokenReturn:string|undefined
    if (token == null) {
      tokenReturn = undefined;
    }
    else{
      tokenReturn = token;
    }

    return tokenReturn;
    
  }

  async saveToken(token:string){
    localStorage.setItem('tokenTienda',token)
    this.token = token
  }

  eliminarToken(){
    localStorage.removeItem('tokenTienda');
  }

  
  public get Token() : string|undefined {
    return this.token
  }
  

  logearme(correo:string, contraseña:string):Observable<Peticion>{
    let jsonObs:Object = new Object()
    const options = {headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}};
    let usuarioLog = {
      email:correo,
      passwd:contraseña
    }
    const texto = JSON.stringify(usuarioLog)
    
    
    return this.http.post<Peticion>(`${this.urlbase}/loginUsuario`, texto ,options)
  }

  logToken():Observable<Peticion>{
    let tokenLoc = this.getTokenLocal()
    
    const options = {headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}};
    return this.http.post<Peticion>(`${this.urlbase}/loginUsuarioToken`, "" ,options)
  }

  desloguearme(){
    this.eliminarToken()
    this.http.post(`${this.urlbase}/logout`,"").subscribe((res)=>{
      console.log(res)
  })
    
  
}

}