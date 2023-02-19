import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonModal } from '@ionic/angular';
import { Juego } from 'src/app/models/juego';
import { Usuario } from 'src/app/models/usuario';
import { JuegosServiceService } from 'src/app/services/juegos-service.service';
import { ServicioLoginService } from 'src/app/services/servicio-login.service';

@Component({
  selector: 'app-juegos-usuario',
  templateUrl: './juegos-usuario.page.html',
  styleUrls: ['./juegos-usuario.page.scss'],
})
export class JuegosUsuarioPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  listaJuegos:Juego[]=[]
  usuario!:Usuario
  formAddGame:FormGroup
  nameInput:FormControl
  priceInput:FormControl

  constructor(private servicioLogin:ServicioLoginService,private servicioJuegos:JuegosServiceService, private alert:AlertController) { 
    this.nameInput = new FormControl("",[Validators.required])
    this.priceInput = new FormControl(0,[Validators.required,Validators.min(0),Validators.max(1000)])
    this.formAddGame = new FormGroup({
      name:this.nameInput,
      price:this.priceInput
    })
  }

  ngOnInit() {
    this.servicioLogin.getUsuarioObservable().subscribe(usu=>{
      this.usuario = usu
    })

    this.servicioJuegos.getJuegosUsuario().subscribe((juegos)=>{
      console.log(juegos)
      let listaJuegos:Juego[] = []
      juegos.forEach(element => {
        listaJuegos.push(new Juego(element._id,element.nombre,element.precio,element.seller))
      });
      this.listaJuegos = listaJuegos
    })
  }

  cancelar(){
    this.modal.dismiss()
  }

  addGame(){
    let juegoNuevo = new Juego("",this.nameInput.value,this.priceInput.value,"")
    this.servicioJuegos.addJuego(juegoNuevo).subscribe(async (juego)=>{
      this.modal.dismiss()
      this.listaJuegos.push(juegoNuevo)
      await this.presentAlert()
    })
  }

  async presentAlert() {
    const alert = await this.alert.create({
      header: 'Correcto',
      message: 'Todo ha salido correctamente',
      buttons: ['OK'],
    });

    await alert.present();
    
  }

}
