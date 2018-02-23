import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../article.service';
import {Article} from '../models/article';

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
      .subscribe(data => this.articles = data);
  }

  getArticleClass(article: Article, isOdd: boolean): string {
    if (!isOdd && article.image) return '';
    let classes = 'text-right';
    classes += !article.image ? ' bg-light border-info' : '';
    return classes;
  }
}
