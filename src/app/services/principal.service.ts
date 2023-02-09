import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { ServicioLoginService } from './servicio-login.service';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  private usuariologeado?:Usuario
  constructor(private servicioLogin:ServicioLoginService) { 
    this.usuariologeado = undefined
  }

  
  public get UsuarioLogeado() : Usuario | undefined {
    return this.usuariologeado; 
  }
  

  hacerLogin(correo:string, pass:string){
    this.usuariologeado = this.servicioLogin.logearme(correo,pass)
  }
}
