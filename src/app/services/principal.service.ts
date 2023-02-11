import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { ServicioLoginService } from './servicio-login.service';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  private usuariologeado?:Usuario
  subjectUsuario:Subject<Usuario>;
  constructor(private servicioLogin:ServicioLoginService) { 
    this.usuariologeado = undefined
    this.subjectUsuario = new Subject<Usuario>
  }

  
  public get UsuarioLogeado() : Usuario | undefined {
    return this.usuariologeado; 
  }

  
  public set UsuarioLogeado(v : Usuario|undefined) {
    this.usuariologeado = v;
  }
  
  

  hacerLogin(correo:string, pass:string){
    this.servicioLogin.logearme(correo,pass).subscribe((user) => {
      this.UsuarioLogeado = new Usuario(user.usuario.nombre, user.usuario.correo);
      this.subjectUsuario.next(this.usuariologeado)
    })
  }
}
