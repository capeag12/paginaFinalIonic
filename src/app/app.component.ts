import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonMenu } from '@ionic/angular';
import { Usuario } from './models/usuario';
import { PrincipalService } from './services/principal.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonMenu) menu!:IonMenu
  usuario:Usuario|undefined
  constructor(private servicio:PrincipalService, private router:Router) {
    servicio.getUsuarioObservable().subscribe((usuario)=>{
      this.usuario = usuario
      console.log("Usuario: ",usuario)
    })
  }


  desloguearme(){
    this.servicio.hacerLogout();
    this.router.navigate(["login-page"])
    this.menu.close()
  }

}
