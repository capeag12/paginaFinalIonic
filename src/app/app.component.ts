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
  constructor(private servicioPrincipal:PrincipalService, private router:Router) {
    console.log("Se ha iniciado el app.component")
    this.servicioPrincipal.getLoginObservable().subscribe(usu=>{this.usuario=usu 
      console.log(usu)})
  }


  desloguearme(){
    this.servicioPrincipal.hacerLogout()
  }

}
