import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

import { ArticleService } from './article.service';
import { Article } from './models/article';

@Injectable()
export class ArticleResolverService implements Resolve<Article> {

  constructor( private articlesService: ArticleService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.articlesService.getArticle(route.params['slug'])
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.router.navigateByUrl('/404');
          return new ErrorObservable(error);
        })
      );
  }

}
