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
    console.log(tokenReturn)
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

  obtenerTokenLogin(email:string, passwd:string):Observable<Peticion>{
    let url = this.urlbase+"/loginUsuario";
    let body = {email:email, passwd:passwd}
    const texto = JSON.stringify(body)
    const options = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return this.http.post<Peticion>(url,texto,options)
    
  }

  login():Observable<Peticion>{
    const options = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return this.http.post<Peticion>(this.urlbase+"/loginUsuarioToken","",options)
  }

  deslogearme():Observable<Object>{
    const options = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return this.http.post<Object>(this.urlbase+"/logout","",options)
  }
  
    
  
}

