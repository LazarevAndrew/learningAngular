import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import {distinctUntilChanged, tap} from 'rxjs/operators';
import {User} from '../models/user';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {
  private currentUserSubject: BehaviorSubject<User> = new BehaviorSubject<User>({} as User);
  public currentUser: Observable<User> = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(private apiService: ApiService) { }

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
    const token = window.localStorage['userToken'];
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

  setAuth(user: User) {
    window.localStorage['userToken'] = user.token;
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
    console.log(user);
  }

  destroyAuth() {
    window.localStorage.removeItem('userToken');
    this.currentUserSubject.next({} as User);
    this.isAuthenticatedSubject.next(false);
  }
}
