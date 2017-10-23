import { Injectable } from '@angular/core';

@Injectable()
export class CsrfService {

  private token: string = 'csrf-token';

  // --- Service Constructor ---
  constructor() {
    this.pullTokenFromPage();
  }

  // --- Public Methods ---
  public getToken(): string | null {
    return localStorage.getItem(this.token);
  }

  public clearToken(): void {
    localStorage.removeItem(this.token);
  }

  // --- Private Helpers ---
  private pullTokenFromPage(): any {
    let cookie: any = document.cookie;
    let token: string = cookie.replace('_csrf=', '');

    this.setToken(token);
  }

  private setToken(token: string): void {
    localStorage.setItem(this.token, token);
  }

}
