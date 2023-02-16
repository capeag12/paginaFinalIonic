import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonModal } from '@ionic/angular';
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
  
  constructor(private servicio:PrincipalService, private route:Router, private alertcontroller:AlertController) { 
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
    this.servicio.hacerLoginNoToken(this.mailLogin.value,this.psswdLogin.value)
    this.servicio.getUsuarioObservable().subscribe( async(usuario)=>{
      console.log("Usuario: ",usuario)
      if(usuario==undefined){
        await this.presentAlert();
      } else{
        this.route.navigate(["nav-page/catalogo"])
      }
    })
    this.formLogearme.reset()
    
  }

  async presentAlert() {
    const alert = await this.alertcontroller.create({
      header: 'Alerta',
      message: 'El correo o la contraseña no son validos',
      buttons: ['OK'],
    });

    await alert.present();
    
  }

  
  

}
