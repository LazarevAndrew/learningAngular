import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { ApiService } from '../core/services/api.service';
import { Article } from './models/article';


@Injectable()
export class ArticleService {

  constructor(private apiService: ApiService) { }


  getArticles(): Observable<{articles: Article[]}> {
    return this.apiService.get('articles');
  }

  getArticle(slug: string): Observable<Article> {
    return this.apiService.get(`articles/${slug}`)
      .pipe(
        map(data => <Article>data.article)
      );
  }

}
