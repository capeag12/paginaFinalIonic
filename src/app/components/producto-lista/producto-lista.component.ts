import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';

@Component({
  standalone:true,
  selector: 'productoLista',
  templateUrl: './producto-lista.component.html',
  styleUrls: ['./producto-lista.component.scss'],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductoListaComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
