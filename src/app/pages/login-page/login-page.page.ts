import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { PrincipalService } from 'src/app/services/principal.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  @ViewChild(IonModal) modal!:IonModal;
  formRegistrarme:FormGroup;
  formLogearme:FormGroup

  //Controles registrarme
  nameRegistrarme:FormControl
  mailRegistrarme:FormControl
  psswrdRegistrarme:FormControl

  //controles login
  mailLogin:FormControl
  psswdLogin:FormControl
  
  constructor(private servicio:PrincipalService) { 
    this.nameRegistrarme = new FormControl("",[Validators.required])
    this.mailRegistrarme = new FormControl("", [Validators.required, Validators.email])
    this.psswrdRegistrarme = new FormControl("",[Validators.required])
    this.formRegistrarme = new FormGroup({
      nombre:this.nameRegistrarme,
      mail:this.mailRegistrarme,
      password:this.psswrdRegistrarme
    })

    this.mailLogin = new FormControl("", [Validators.required, Validators.email])
    this.psswdLogin = new FormControl("",[Validators.required])

    this.formLogearme = new FormGroup({
      mail:this.mailLogin,
      password:this.psswdLogin
    })
  }

  

  ngOnInit() {
  }

  cancelar(){
    console.log("Cancelado")
    this.modal.dismiss(null,"cancelar")
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    
  }

  iniciarSesion(){
    this.servicio.hacerLogin(this.mailLogin.value, this.psswdLogin.value)
  }

}
