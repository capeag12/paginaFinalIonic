import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable } from 'rxjs';
import {Peticion, UsuarioPeticion} from "../types"
import { Preferences } from '@capacitor/preferences';
@Injectable({
  providedIn: 'root'
})
export class ServicioLoginService {
  private urlbase:string;
  private token:string
  private iniciada:boolean = false
  private usuario:Usuario = new Usuario("","","")
  private usuarioSubject:BehaviorSubject<Usuario> = new BehaviorSubject<Usuario>(this.usuario)
  constructor(private http:HttpClient) { 
    this.urlbase = "http://localhost:3000";
    this.token = localStorage.getItem("tokenCarlos")||""

  }

  getToken(usuario:string, contraseña:string):Observable<Peticion>{
    let usu={
      email:usuario,
      passwd:contraseña
    }
    
    return this.http.post<Peticion>(this.urlbase+"/loginUsuario",usu)
  }

  login(){
    return this.http.post<UsuarioPeticion>(this.urlbase+"/loginUsuarioToken","")
  }

  hacerLogout(){
    return this.http.post(this.urlbase+"/logout","")
  }

  registrarme(nombre:string,mail:string,contraseña:string){
    let usuarioNuevo = {
      nombre:nombre,
      email:mail,
      passwd:contraseña
    }
    return this.http.post<Peticion>(this.urlbase+"/registrarUsuario",usuarioNuevo)
  }

  
  public get Iniciada() : boolean {
    return this.iniciada
  }

  
  public set Iniciada(v : boolean) {
    this.iniciada = v;
  }

  
  public get Usuario() : Usuario {
    return this.usuario
  }
  
  public get UsuarioSubject() : BehaviorSubject<Usuario> {
    return this.usuarioSubject
  }

  getUsuarioObservable():Observable<Usuario>{
    return this.usuarioSubject.asObservable()
  }
  
  

  



  

  
    
  
}

