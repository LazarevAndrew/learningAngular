import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {Article} from './models/article';
import {ARTICLES} from './mock-artciles';
import * as _ from  'lodash';

@Injectable()
export class ArticleService {

  constructor() { }

  getArticles(): Observable<Article[]> {
    return of(ARTICLES);
  }

  getArticle(slug: string): Article {
    return _.find(ARTICLES, article => article.slug === slug);
  }

}
