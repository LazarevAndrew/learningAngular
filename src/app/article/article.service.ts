import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Article } from './models/article';
import * as _ from  'lodash';


@Injectable()
export class ArticleService {

  private headers: Headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  constructor(private http: Http) { }


  getArticles(): Observable<{articles: Article[]}> {
    return this.http.get('https://conduit.productionready.io/api/articles',
      { headers: this.headers})
      .pipe(map((res: Response) => <{ articles: Article[]}>res.json()));
  }

  getArticle(slug: string): Observable<Article> {
    return this.http.get(`https://conduit.productionready.io/api/articles/${slug}`,
      { headers: this.headers})
      .pipe(map((res: Response) => <Article>res.json().article));
  }

}
