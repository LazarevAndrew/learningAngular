import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArticleComponent } from './article.component';
import { ArticleListComponent } from './article-helpers/article-list.component';
import { ArticlePreviewComponent } from './article-helpers/article-preview.component';
import { ArticleCommentsComponent } from './article-helpers/article-comments.component';
import { ArticleService } from './article.service';
import { ArticleResolverService } from './article-resolver.service';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [ArticleComponent, ArticleListComponent, ArticlePreviewComponent, ArticleCommentsComponent],
  exports: [ArticleComponent, ArticleListComponent, ArticlePreviewComponent, ArticleCommentsComponent],
  providers: [ArticleService, ArticleResolverService]
})
export class ArticleModule { }
