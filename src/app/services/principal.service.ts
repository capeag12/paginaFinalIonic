import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { ServicioLoginService } from './servicio-login.service';
import { HttpClient } from '@angular/common/http';
import { catchError, mergeMap, Observable, of, Subject, throwError } from 'rxjs';
import { Peticion } from '../types';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  private usuariologeado?:Usuario
  subjectUsuario:Subject<Usuario|undefined>;
  constructor(private servicioLogin:ServicioLoginService) { 
    this.usuariologeado = undefined
    this.subjectUsuario = new Subject<Usuario|undefined>
  }

  
  public get UsuarioLogeado() : Usuario | undefined {
    return this.usuariologeado; 
  }

  
  public set UsuarioLogeado(v : Usuario|undefined) {
    this.usuariologeado = v;
  }
  
  getLoginObservable():Observable<Usuario|undefined>{
    return this.subjectUsuario.asObservable();
  }

  hacerLoginSinToken(usuario:string, password:string){
    this.servicioLogin.obtenerTokenLogin(usuario, password).subscribe(peticion=>{
      console.log(peticion)
      this.servicioLogin.saveToken(peticion.token)
      this.usuariologeado = new Usuario(peticion.usuario._id, peticion.usuario.email, peticion.usuario.nombre)
      this.subjectUsuario.next(this.usuariologeado)

    }, err=>{
      this.subjectUsuario.next(undefined)
    })
  }

  hacerLoginConToken(){
    this.servicioLogin.login().subscribe(peticion=>{
      console.log(peticion)
      this.usuariologeado = new Usuario(peticion.usuario._id, peticion.usuario.email, peticion.usuario.nombre)
      this.subjectUsuario.next(this.usuariologeado)
    },err=>{
      this.subjectUsuario.next(undefined)
    })
  }

  hacerLogout(){
    this.servicioLogin.deslogearme().subscribe(peticion=>{
      this.subjectUsuario.next(undefined)
      this.servicioLogin.eliminarToken()
      console.log("Deslogueado")

    },err=>{
     
    })
  }

}
