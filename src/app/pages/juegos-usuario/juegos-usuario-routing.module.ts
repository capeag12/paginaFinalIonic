import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuegosUsuarioPage } from './juegos-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: JuegosUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuegosUsuarioPageRoutingModule {}
