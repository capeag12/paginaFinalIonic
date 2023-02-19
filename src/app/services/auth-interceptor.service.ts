import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicioLoginService } from './servicio-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  token:string =""
  constructor(private servicioLogin:ServicioLoginService) { 

  }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.token =localStorage.getItem("tokenCarlos")||""
    const authReq = req.clone({
      setHeaders: {
        Authorization: this.token,
        'Access-Control-Allow-Origin': '*',
        "Content-Type": "application/json"
      }
    })
    console.log(authReq)
    return next.handle(authReq)
  }
}
