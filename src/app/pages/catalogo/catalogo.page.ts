import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrincipalService } from 'src/app/services/principal.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {

  constructor(private servicio:PrincipalService, private router:Router) { 
    this.servicio.getLoginObservable().subscribe(usuario =>{
      console.log("awafw")
      if (usuario==undefined) {
        
        this.router.navigate(["../login-page"])
      }

      

    })

    this.servicio.loginInicial()
  }

  ngOnInit() {
    
  }

}
