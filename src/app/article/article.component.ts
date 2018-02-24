import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { ArticleService } from './article.service';
import { Article } from './models/article';

@Component({
  selector: 'art-article',
  templateUrl: './article.component.html',
  styles: []
})
export class ArticleComponent implements OnInit {
  private article: Article;

  constructor(private articleService: ArticleService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.article = this.route.snapshot.data['article'];
    // this.article = this.articleService.getArticle(this.route.snapshot.params['slug']);
  }

  goBack(): void {
    this.location.back();
  }

  goBackToArticleList(): void {
    this.router.navigate(['articles']);
  }

}
