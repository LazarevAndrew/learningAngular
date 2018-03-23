import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  public get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.apiUrl}${path}`, { params });
  }

  public post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(`${environment.apiUrl}${path}`, body);
  }

  public put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(`${environment.apiUrl}${path}`, body);
  }
}
