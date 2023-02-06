import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';

@Component({
  standalone:true,
  selector: 'producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductoComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
