import {Component, Input, OnInit} from '@angular/core';

import {Article} from '../models/article';

@Component({
  selector: 'art-article-preview',
  templateUrl: './article-preview.component.html',
  styles: []
})
export class ArticlePreviewComponent implements OnInit {
  @Input() article: Article;

  constructor() { }

  ngOnInit() {
  }

}
