import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardLoginGuard } from 'src/app/guards/guard-login.guard';
import { BuscarPage } from '../buscar/buscar.page';
import { CatalogoPage } from '../catalogo/catalogo.page';

import { NavPagePage } from './nav-page.page';

const routes: Routes = [
  {
    path: '',
    component: NavPagePage,
    
    children:[
      {
        path:'',
        redirectTo:'catalogo',
        pathMatch:'full'
      }
      ,
      {
        path:'catalogo',
        component:CatalogoPage
      },
      {
        path:'buscar',
        component:BuscarPage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavPagePageRoutingModule {}
