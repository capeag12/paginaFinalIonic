import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Juego } from 'src/app/models/juego';
import { Usuario } from 'src/app/models/usuario';
import { JuegosServiceService } from 'src/app/services/juegos-service.service';
import { ServicioLoginService } from 'src/app/services/servicio-login.service';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {
  
  listaJuegos:Juego[] = []
  
  constructor(private servicioLogin:ServicioLoginService ,private servicioJuegos:JuegosServiceService, private router:Router) { 
    
  }

  ngOnInit() {
    this.servicioLogin.login().subscribe(usu=>{
      this.servicioLogin.Iniciada=true
      this.servicioLogin.UsuarioSubject.next(new Usuario(usu._id,usu.email,usu.nombre))
    },
      err=>{
        this.router.navigate(["login-page"])
      }
      )
     
  }

  ionViewWillEnter(){
    console.log("Cargando juegos")
    this.servicioJuegos.getJuegos().subscribe((juegos)=>{
      let lista:Juego[] = []
      juegos.forEach(juego => {
        lista.push(new Juego(juego._id,juego.nombre,juego.precio,juego.seller))
      });
      this.listaJuegos = lista
      console.log(this.listaJuegos)
    }
    )
  }

}
