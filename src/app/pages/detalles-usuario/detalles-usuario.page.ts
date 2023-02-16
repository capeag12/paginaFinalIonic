import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { PrincipalService } from 'src/app/services/principal.service';

@Component({
  selector: 'app-detalles-usuario',
  templateUrl: './detalles-usuario.page.html',
  styleUrls: ['./detalles-usuario.page.scss'],
})
export class DetallesUsuarioPage implements OnInit {
  usuario:Usuario|undefined
  constructor(private servicio:PrincipalService) { 
    servicio.getUsuarioObservable().subscribe((usuario)=>{
      this.usuario = usuario
      console.log("Usuario: ",usuario)
    })
  }

  ngOnInit() {
  }

}
