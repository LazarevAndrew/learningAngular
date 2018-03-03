import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {

  private headers: Headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  constructor(private http: Http) { }

  get(path: string): Observable<any> {
    return this.http.get(`https://conduit.productionready.io/api/${path}`,
      { headers: this.headers})
      .pipe(map((res: Response) => res.json()));
  }

}
