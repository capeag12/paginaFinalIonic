import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicioLoginService } from './servicio-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  token:string
  constructor(private servicioLogin:ServicioLoginService) { 
    this.token =""
    if (servicioLogin.Token != undefined) {
      this.token = ""+servicioLogin.Token
    }

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers:req.headers.append('Authorization',this.token)
    })

    return next.handle(authReq)
  }
}
