import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoPage } from '../catalogo/catalogo.page';

import { NavPagePage } from './nav-page.page';

const routes: Routes = [
  {
    path: '',
    component: NavPagePage,
    children:[
      {
        path:'',
        component:CatalogoPage
      }
      ,{
        path:'catalogo',
        component:CatalogoPage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavPagePageRoutingModule {}
