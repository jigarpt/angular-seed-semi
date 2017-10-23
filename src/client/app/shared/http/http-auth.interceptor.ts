import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

import { TokenService } from './token.service';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({setHeaders: {
      'Authorization': 'Bearer ' +  this.tokenService.getToken(),
      'Content-Type': 'application/json'
    }});

    return next.handle(authReq);
  }
}
