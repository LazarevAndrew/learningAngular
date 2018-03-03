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
  public article: Article;

  constructor(private articleService: ArticleService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.route.data
      .subscribe((data: {article: Article}) => this.article = data.article);
  }

  goBack(): void {
    this.location.back();
  }

  goBackToArticleList(): void {
    this.router.navigate(['articles']);
  }

}
