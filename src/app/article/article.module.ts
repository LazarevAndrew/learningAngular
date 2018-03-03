import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ArticleComponent } from './article.component';
import { ArticleListComponent } from './article-helpers/article-list.component';
import { ArticlePreviewComponent } from './article-helpers/article-preview.component';
import { ArticleCommentsComponent } from './article-helpers/article-comments.component';
import { ArticleService } from './article.service';
import { ArticleResolverService } from './article-resolver.service';

export const articleRoutes: Routes = [
  { path: 'articles', component: ArticleListComponent},
  { path: 'articles/:slug', component: ArticleComponent, resolve: { article: ArticleResolverService}},
  { path: '', redirectTo: '/articles', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forChild(articleRoutes),
    CommonModule
  ],
  declarations: [ArticleComponent, ArticleListComponent, ArticlePreviewComponent, ArticleCommentsComponent],
  exports: [ArticleComponent, ArticleListComponent, ArticlePreviewComponent, ArticleCommentsComponent],
  providers: [ArticleService, ArticleResolverService]
})
export class ArticleModule { }
