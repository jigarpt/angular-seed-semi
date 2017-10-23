import { Injectable }           from '@angular/core';
import { Router }               from '@angular/router';

import { TokenService }         from './token.service';

@Injectable()
export class HttpErrorHandlerService {

  // --- Service Constructor ---
  constructor(private router: Router,
              private tokenService: TokenService) {}

  // --- Error Handling ---
  // User does not have permissions
  public handle403(isUpdate: boolean = false): any {
    this.handle(isUpdate);
  }

  // User is not logged in
  public handle401(isUpdate: boolean = false): any {
    this.handle(isUpdate);
  }

  public handle(isUpdate: boolean = false) {
    // Set current state for redirection after login
    let currentParams = this.router.url;
    sessionStorage.setItem('lastState', currentParams);

    // Clear token and redirect to pink admin login
    this.tokenService.clearToken();
    this.tokenService.login(isUpdate);
  }
}
