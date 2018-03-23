import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { UserService } from '../core/services/user.service';
import { TokenService } from '../core/services/token.service';

@Injectable()
export class UserDataResolver implements Resolve<any> {
  constructor(private userService: UserService, private tokenService: TokenService) {
  }

  public resolve(): Observable<any> {
    const token = this.tokenService.getToken('userToken');
    return token ? this.userService.getUserData() : of({});
  }
}
