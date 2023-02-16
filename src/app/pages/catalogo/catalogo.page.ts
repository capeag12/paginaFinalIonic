import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { PrincipalService } from 'src/app/services/principal.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {
  usuario:Usuario|undefined
  constructor(private servicio:PrincipalService, private router:Router) { 
    servicio.getUsuarioObservable().subscribe((usuario)=>{
      this.usuario = usuario
      if(usuario==undefined){
        this.router.navigate(["login-page"])
      }
      
      
    })
  }

  ngOnInit() {
    
  }

}
