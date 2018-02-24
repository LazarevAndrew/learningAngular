import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import {ArticleService} from './article.service';
import {Article} from './models/article';

@Injectable()
export class ArticleResolverService implements Resolve<Article> {

  constructor( private articlesService: ArticleService ) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.articlesService.getArticle(route.params['slug'])
  }

}
