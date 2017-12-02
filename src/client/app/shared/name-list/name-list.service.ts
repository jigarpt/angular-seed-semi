import { HttpClient, HttpRequest } from '@angular/common/http';
import { ResponseModel } from './../http/response.model';
import { HttpService } from './../http/http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/do';  // for debugging

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class NameListService {

  /**
   * Creates a new NameListService with the injected HttpClient.
   * @param {HttpClient} http - The injected HttpClient.
   * @constructor
   */
  constructor(private httpService: HttpService) {}

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {ResponseModel} The Observable for the HTTP request.
   */
  get(): Observable<ResponseModel> {
    return this.httpService.get('assets/data/data.json');
  }

}

