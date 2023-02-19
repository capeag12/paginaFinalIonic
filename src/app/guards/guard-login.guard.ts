import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicioLoginService } from '../services/servicio-login.service';


@Injectable({
  providedIn: 'root'
})
export class GuardLoginGuard implements CanActivate {
  constructor( private loginService:ServicioLoginService,private router:Router) {
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(this.loginService.Iniciada)
      if(this.loginService.Iniciada==false){
        this.router.navigate(["login-page"])
        return false
      } 

      return true;
  }
  
}
