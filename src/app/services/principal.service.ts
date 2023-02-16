import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { ServicioLoginService } from './servicio-login.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, mergeMap, Observable, of, Subject, throwError } from 'rxjs';
import { Peticion } from '../types';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  private usuario:Usuario|undefined
  private token:string|undefined

  private usuarioSubject = new Subject<Usuario|undefined>()
  private tokenSubject = new Subject<string|undefined>()
  
  constructor(private servicioLogin:ServicioLoginService) { 
   this.usuario = undefined
   this.token = undefined

   this.hacerLoginToken()
  }

  public get Usuario() : Usuario|undefined {
    return this.usuario


  }


  public get Token() : string|undefined {
    return this.token
  }

  public getUsuarioObservable():Observable<Usuario|undefined>{
    return this.usuarioSubject.asObservable()
  }

  public getTokenObservable():Observable<string|undefined>{
    return this.tokenSubject.asObservable()
  }

  public hacerLoginNoToken(email:string, passwd:string):void{
    this.servicioLogin.obtenerTokenLogin(email, passwd).subscribe(
      (peticion:Peticion)=>{
        let usu = new Usuario(peticion.usuario._id,peticion.usuario.email,peticion.usuario.nombre)
        this.usuarioSubject.next(usu)
        this.tokenSubject.next(peticion.token)
        this.servicioLogin.saveToken(peticion.token)
      })
  }

  public hacerLoginToken():void{
    this.servicioLogin.login().subscribe(
      (peticion:Peticion)=>{
        console.log(peticion)
        let usu = new Usuario(peticion.usuario._id,peticion.usuario.email,peticion.usuario.nombre)
        this.usuarioSubject.next(usu)
        this.tokenSubject.next(peticion.token)
      },err=>{
        console.log(err)
      })
  }

  public hacerLogout():void{
    this.usuarioSubject.next(undefined)
    this.tokenSubject.next(undefined)
    this.servicioLogin.eliminarToken()
    this.servicioLogin.deslogearme()
  }
}
