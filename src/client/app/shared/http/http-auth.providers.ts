import { HttpClient, HttpHandler } from '@angular/common/http';
import {
  Http,
  XHRBackend,
  RequestOptions
}                                  from '@angular/http';

import { HttpService }                from './http.service';
import { CsrfService }             from './csrf.service';
import { HttpErrorHandlerService } from './http-error-handler.service';
import { TokenService }            from './token.service';

export function authHttpFactory(csrfService: CsrfService
  , httpErrorHandlerService: HttpErrorHandlerService
  , handler: HttpHandler
  , tokenService: TokenService
  , xhrBackend: XHRBackend) {

  let angularHttp = new HttpClient(handler);
  return new HttpService(angularHttp, httpErrorHandlerService, csrfService, tokenService);
}

export const AuthHttpProviders = [
  {
    provide: Http,
    useFactory: authHttpFactory,
    deps: [ CsrfService, HttpErrorHandlerService, RequestOptions, TokenService, XHRBackend ]
  }
];
