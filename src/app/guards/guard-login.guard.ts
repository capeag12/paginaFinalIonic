import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PrincipalService } from '../services/principal.service';

@Injectable({
  providedIn: 'root'
})
export class GuardLoginGuard implements CanActivate {
  constructor(private servicio:PrincipalService, private router:Router) {
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if (this.servicio.UsuarioLogeado==undefined) {
      
    }
    
    return true;
  }
  
}
