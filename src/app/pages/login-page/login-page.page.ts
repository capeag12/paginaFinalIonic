import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { catchError, of } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { ServicioLoginService } from 'src/app/services/servicio-login.service';


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
  
  constructor( private servicioLogin:ServicioLoginService,private route:Router, private alertcontroller:AlertController) { 
    this.nameRegistrarme = new FormControl("",[Validators.required,Validators.minLength(3)])
    this.mailRegistrarme = new FormControl("", [Validators.required, Validators.email])
    this.psswrdRegistrarme = new FormControl("",[Validators.required, Validators.minLength(6)])
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

  login(){
    let subscripcion= this.servicioLogin.getToken(this.mailLogin.value,this.psswdLogin.value).subscribe((token)=>{
      localStorage.setItem("tokenCarlos",token.token)
      let subcription= this.servicioLogin.login().subscribe(usu=>{
        this.servicioLogin.Iniciada=true
        this.servicioLogin.UsuarioSubject.next(new Usuario(usu._id,usu.nombre,usu.email))
        this.route.navigate(["nav-page"])
        
      },
      async err=>{
          this.servicioLogin.Iniciada=false
          await this.presentAlert()
        })
        
    },async err=>{
      await this.presentAlert()
    })

    this.formLogearme.reset()
    
  }

  registrarme(){
    this.servicioLogin.registrarme(this.nameRegistrarme.value,this.mailRegistrarme.value,this.psswrdRegistrarme.value).subscribe((registro)=>{
      localStorage.setItem("tokenCarlos",registro.token)
      this.servicioLogin.login().subscribe(usuario=>{
        this.servicioLogin.Iniciada=true
        this.servicioLogin.UsuarioSubject.next(new Usuario(usuario._id,usuario.email,usuario.nombre))
        this.modal.dismiss()
        this.route.navigate(["nav-page"])
      },async err=>{
        this.servicioLogin.Iniciada=false
        await this.presentAlert()
      })
    },
    async err=>{
      await this.presentAlert()
    })
    this.formRegistrarme.reset()
  }

  cancelar(){
    this.modal.dismiss()
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
