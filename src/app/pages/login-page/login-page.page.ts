import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  @ViewChild(IonModal) modal!:IonModal;
  formRegistrarme:FormGroup;

  //Controles registrarme
  nameRegistrarme:FormControl
  
  constructor() { 
    this.formRegistrarme = new FormGroup([])
    this.nameRegistrarme = new FormControl("",[Validators.required])
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

}
