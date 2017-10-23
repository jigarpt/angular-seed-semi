import { HttpErrorHandlerService } from './http-error-handler.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  HttpInterceptor,
  HttpHandler,
  HttpEvent,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private httpErrorHandlerService: HttpErrorHandlerService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next
      .handle(req)
      .do((ev: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // do stuff with response if you want
        }
      })
      .catch(response => {
        if (response instanceof HttpErrorResponse) {
          if (response.status === 401 || response.status === 403) {
            this.httpErrorHandlerService.handle();
          }
        }
        return Observable.throw(response);
      });
  }
}
