import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtcileComponent } from './artcile.component';
import { ArticleListComponent } from './article-helpers/article-list.component';
import { ArticlePreviewComponent } from './article-helpers/article-preview.component';
import { ArticleCommentsComponent } from './article-helpers/article-comments.component';
import { ArticleService } from './article.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ArtcileComponent, ArticleListComponent, ArticlePreviewComponent, ArticleCommentsComponent],
  exports: [ArtcileComponent, ArticleListComponent, ArticlePreviewComponent, ArticleCommentsComponent],
  providers: [ArticleService]
})
export class ArticleModule { }
