import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

import { ArticleService} from '../article.service';
import { Article } from '../models/article';
import { ErrorsService } from '../../core/services/errors.service';

@Component({
  selector: 'art-article-list',
  templateUrl: './article-list.component.html',
  styles: []
})
export class ArticleListComponent implements OnInit {
  articles: Article[];

  constructor(private articleService: ArticleService,
              private errorsService: ErrorsService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.articleService.getArticles()
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.errorsService.pushError(error);
          return new ErrorObservable(error);
        })
      )
      .subscribe(data => this.articles = data.articles);
  }

  getArticleClass(article: Article, isOdd: boolean): string {
    if (!isOdd && article.image) { return ''; }
    let classes = 'text-right';
    classes += !article.image ? ' bg-light border-info' : '';
    return classes;
  }
}
