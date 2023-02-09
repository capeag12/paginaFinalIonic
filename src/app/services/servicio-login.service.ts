import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicioLoginService {
  private urlbase:string;
  constructor() { 
    this.urlbase = "";
  }

  logearme(correo:string, contraseña:string):Usuario{
    return new Usuario("Correo1","Nombre1",[],[])

  }


}
