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

  async getTokenLocal():Promise<string | undefined>{
    const token = await (await Preferences.get({key:'tokenTienda'})).value
    let tokenReturn:string|undefined
    if (token == null) {
      tokenReturn = undefined
    }
    else{
      tokenReturn = ""+token
    }
    return tokenReturn
    
  }

  async saveToken(token:string){
    await Preferences.set({key:'tokenTienda', value:token})
    this.token = token
  }

  async eliminarToken(){
      await Preferences.remove({key:'tokenTienda'})
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

  async logToken(){
    let tokenLoc = await this.getTokenLocal
    if (tokenLoc == null) {
      
    }
    else{
      this.token = ""+tokenLoc
    }
    console.log(tokenLoc)
    const options = {headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}};
    return this.http.post<Peticion>(`${this.urlbase}/loginUsuarioToken`, "" ,options)
  }

  desloguearme(){
    this.http.post(`${this.urlbase}/logout`,"")
    this.eliminarToken()

  }


}
