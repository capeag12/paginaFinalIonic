import { Component, OnInit } from '@angular/core';
import { Juego } from 'src/app/models/juego';
import { JuegosServiceService } from 'src/app/services/juegos-service.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {
  listaJuegos:Juego[]= [];
  constructor(private juegoService:JuegosServiceService) { }

  ngOnInit() {
    this.juegoService.getJuegos().subscribe((juegos)=>{
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
