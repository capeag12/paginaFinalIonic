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
    this.token =servicioLogin.getTokenLocal() || ""
    if (servicioLogin.Token != undefined) {
      this.token = "Bearer "+servicioLogin.Token
    }

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      setHeaders: {
        Authorization: this.token,
        'Access-Control-Allow-Origin': '*'
      }
    })

    return next.handle(authReq)
  }
}
