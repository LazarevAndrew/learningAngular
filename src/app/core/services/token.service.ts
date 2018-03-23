import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

  getToken(key: string): string {
    return window.localStorage[key];
  }

  saveToken(key: string, token: string): void {
    window.localStorage[key] = token;
  }

  destroyToken(key: string): void {
    window.localStorage.removeItem(key);
  }

}
