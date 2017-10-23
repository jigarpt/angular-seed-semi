import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

const tokenKey: string = 'ss-token';

@Injectable()
export class TokenService {

  private loadTokenSource = new Subject<any>();

  // --- Observable Streams ---
  private loadToken$ = this.loadTokenSource.asObservable();

  // --- Service Message Commands ---
  public setToken(token: string): void {
    localStorage.setItem(tokenKey, token);
    this.loadTokenSource.next(token);
  }

  // --- Public Methods ---
  public getToken(): string | null {
    return localStorage.getItem(tokenKey);
  }

  public clearToken(): void {
    localStorage.removeItem(tokenKey);
  }

  public isLoggedIn(): boolean {
    return !!this.getToken();
  }

  public login(isUpdate: boolean = false): any {
    let loginUrl = this.getLoginUrl();

    if (isUpdate) {
      window.open(loginUrl);
    } else {
      window.location.replace(loginUrl);
    }
  }

  public clearTokens(): void {
    // Clear tokens
    this.clearToken();
  }

  // --- Private Helpers ----
  private getLoginUrl(): string {
    // replace with your external login url
    let url = 'https://my-external-login-url';
    return url;
  }
}
