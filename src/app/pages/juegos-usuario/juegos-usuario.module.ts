import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuegosUsuarioPageRoutingModule } from './juegos-usuario-routing.module';

import { JuegosUsuarioPage } from './juegos-usuario.page';
import { ProductoComponent } from 'src/app/components/producto/producto.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuegosUsuarioPageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ProductoComponent
  ],
  declarations: [JuegosUsuarioPage]
})
export class JuegosUsuarioPageModule {}
