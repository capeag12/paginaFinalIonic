import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardLoginGuard } from './guards/guard-login.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'nav-page',
    pathMatch: 'full'
  },
  {
    path: 'nav-page',
    loadChildren: () => import('./pages/nav-page/nav-page.module').then( m => m.NavPagePageModule),
  },
  {
    path: 'catalogo',
    loadChildren: () => import('./pages/catalogo/catalogo.module').then( m => m.CatalogoPageModule),
  },
  {
    path: 'buscar',
    loadChildren: () => import('./pages/buscar/buscar.module').then( m => m.BuscarPageModule)
  },
  {
    path: 'login-page',
    loadChildren: () => import('./pages/login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'detalles-usuario',
    loadChildren: () => import('./pages/detalles-usuario/detalles-usuario.module').then( m => m.DetallesUsuarioPageModule),
    canActivate:[GuardLoginGuard]
  },
  {
    path: 'juegos-usuario',
    loadChildren: () => import('./pages/juegos-usuario/juegos-usuario.module').then( m => m.JuegosUsuarioPageModule),
    canActivate:[GuardLoginGuard]
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
