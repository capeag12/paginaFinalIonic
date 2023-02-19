import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonMenu } from '@ionic/angular';
import { Usuario } from './models/usuario';
import { ServicioLoginService } from './services/servicio-login.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonMenu) menu!:IonMenu
  usuario:Usuario
  constructor( private servicioLogin:ServicioLoginService,private router:Router) {
    this.usuario = servicioLogin.Usuario

    this.servicioLogin.getUsuarioObservable().subscribe(usu=>{
      this.usuario = usu
    })
  }

  cerrarSesion(){
    this.servicioLogin.hacerLogout().subscribe((msg)=>{
    })
    this.servicioLogin.Iniciada=false
    console.log("Deslogueado")
    localStorage.removeItem("tokenCarlos")
    this.router.navigate(["login-page"])
    this.menu.close()

    
  }

  verProductosUsuario(){
    this.router.navigate(["juegos-usuario"])
    this.menu.close()
  }


  

}
