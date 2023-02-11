import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonMenu } from '@ionic/angular';
import { PrincipalService } from './services/principal.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonMenu) menu!:IonMenu
  constructor(private servicioPrincipal:PrincipalService, private router:Router) {
    
  }


  desloguearme(){
    this.menu.close(true)
    this.servicioPrincipal.hacerLogout()
    this.router.navigate(["login-page"])
  }

}
