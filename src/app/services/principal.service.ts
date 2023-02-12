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

  loginInicial(){
    this.servicioLogin.logToken().then(res=>{res.subscribe(user =>{
      console.log(user.usuario._id)
      
      this.UsuarioLogeado = new Usuario(user.usuario._id,user.usuario.correo, user.usuario.nombre);
      console.log(this.UsuarioLogeado)
      this.subjectUsuario.next(this.usuariologeado)
    }, err=>{
      this.subjectUsuario.next(undefined)
      console.log(err)

    })}).catch(err=>{console.log(err)})
    
    
    
    
  }

  hacerLogin(correo:string, pass:string){
    this.servicioLogin.logearme(correo,pass).subscribe((user) => {
      this.servicioLogin.saveToken(user.token)
      this.UsuarioLogeado = new Usuario(user.usuario._id,user.usuario.correo, user.usuario.nombre);
      this.subjectUsuario.next(this.usuariologeado)
   
    },err=>{
      this.subjectUsuario.next(undefined)
    })
   
  }

  hacerLogout(){
    this.servicioLogin.desloguearme()
  }
}
