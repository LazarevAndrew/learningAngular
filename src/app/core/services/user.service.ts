import { Injectable } from '@angular/core';

import { catchError, distinctUntilChanged, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ApiService } from './api.service';
import { User } from '../models/user';
import { TokenService } from './token.service';

@Injectable()
export class UserService {
  public currentUserSubject: BehaviorSubject<User> = new BehaviorSubject<User>({} as User);
  public currentUser: Observable<User> = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(private apiService: ApiService, private tokenService: TokenService) { }

  public registration(data) {
    return this.apiService.post('users', { user: data })
      .pipe(
        tap(data => this.setAuth(data.user))
      );
  }

  public login(data) {
    return this.apiService.post('users/login', { user: data })
      .pipe(
        tap(data => this.setAuth(data.user))
      );
  }

  public populate() {
    const token = this.tokenService.getToken('userToken');
    if (token) {
      this.apiService.get('user')
        .subscribe(
          data => this.setAuth(data.user),
          err => this.destroyAuth()
        );
    } else {
      this.destroyAuth();
    }
  }

  public getUserData(): Observable<any> {
    return this.apiService.get('user')
      .pipe(
        tap(data => this.setAuth(data.user)),
        catchError(err => {
          this.destroyAuth();
          return of(false);
        })
      )
  }

  public destroyAuth() {
    this.tokenService.destroyToken('userToken');
    this.currentUserSubject.next({} as User);
    this.isAuthenticatedSubject.next(false);
  }

  public updateUser(user: User): Observable<User> {
    return this.apiService
      .put('user', { user })
      .pipe(
        tap(data => this.setAuth(data.user))
      );
  }

  private setAuth(user: User) {
    this.tokenService.saveToken('userToken', user.token);
    this.currentUserSubject.next(user);
    if (!this.isAuthenticatedSubject.value) this.isAuthenticatedSubject.next(true);
  }
}
