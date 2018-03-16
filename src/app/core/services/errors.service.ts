import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ErrorsService {

  private errorArray: HttpErrorResponse[] = [];
  private errors$: BehaviorSubject<HttpErrorResponse[]> = new BehaviorSubject<HttpErrorResponse[]>([]);

  constructor() { }

  public get errors(): Observable<HttpErrorResponse[]> {
    return this.errors$.asObservable();
  }

  pushError(error: HttpErrorResponse) {
    this.errorArray.push(error);
    this.errors$.next([...this.errorArray]);
  }

}
