import { TokenService } from './token.service';
import { CsrfService } from './csrf.service';
import { HttpErrorHandlerService } from './http-error-handler.service';
import { ResponseModel } from './response.model';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable, EventEmitter } from '@angular/core';
import {
  RequestOptions,
  RequestOptionsArgs,
  RequestMethod
} from '@angular/http';

@Injectable()
export class HttpService {
  process: EventEmitter<any> = new EventEmitter<any>();
  authFailed: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private _http: HttpClient
    , private httpErrorHandlerService: HttpErrorHandlerService
    , private csrfService: CsrfService
    , private tokenService: TokenService
  ) {}

  public get(url: string, options?: RequestOptionsArgs): Observable<ResponseModel> {
    return this._request(RequestMethod.Get, url, null, options);
  }

  public post(
    url: string,
    body: string,
    options?: RequestOptionsArgs
  ): Observable<ResponseModel> {
    return this._request(RequestMethod.Post, url, body, options);
  }

  public put(
    url: string,
    body: string,
    options?: RequestOptionsArgs
  ): Observable<ResponseModel> {
    return this._request(RequestMethod.Put, url, body, options);
  }

  public delete(
    url: string,
    options?: RequestOptionsArgs
  ): Observable<ResponseModel> {
    return this._request(RequestMethod.Delete, url, null, options);
  }

  public patch(
    url: string,
    body: string,
    options?: RequestOptionsArgs
  ): Observable<ResponseModel> {
    return this._request(RequestMethod.Patch, url, body, options);
  }

  public head(url: string, options?: RequestOptionsArgs): Observable<ResponseModel> {
    return this._request(RequestMethod.Head, url, null, options);
  }

  private _request(
    method: RequestMethod,
    url: string,
    body?: string,
    options?: RequestOptionsArgs
  ): Observable<ResponseModel> {

    return Observable.create((observer: any) => {
      this._http.request<ResponseModel>(
        RequestMethod[method]
        , url
        , Object.assign(
          {
            body: body,
            withCredentials: true
          },
          options
        )).subscribe(
        response => {
          observer.next(response);
          observer.complete();
        },
        error => {
          switch (error.status) {
            case 403:
              this.httpErrorHandlerService.handle403();
              observer.complete();
              break;
            case 401:
              this.httpErrorHandlerService.handle401();
              observer.error(error);
              break;
            default:
              observer.error(error);
              break;
          }
        }
      );
    });
  }
}
