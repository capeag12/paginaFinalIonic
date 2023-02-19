import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { Juego } from 'src/app/models/juego';


@Component({
  standalone:true,
  selector: 'producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductoComponent implements OnInit {
  @Input() juego!: Juego;
 
  
  constructor() { 
   
  }

  ngOnInit() {}

  

}
