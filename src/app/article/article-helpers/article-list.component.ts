import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../article.service';
import {Article} from '../models/article';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Component({
  selector: 'art-article-list',
  templateUrl: './article-list.component.html',
  styles: []
})
export class ArticleListComponent implements OnInit {
  articles: Article[];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.articleService.getArticles()
      .pipe(
        catchError(error => new ErrorObservable(error))
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
