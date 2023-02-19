import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { Juego } from 'src/app/models/juego';

@Component({
  standalone:true,
  selector: 'productoLista',
  templateUrl: './producto-lista.component.html',
  styleUrls: ['./producto-lista.component.scss'],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductoListaComponent implements OnInit {
  @Input() juego!: Juego;
  
  constructor() { }

  ngOnInit() {}

}
