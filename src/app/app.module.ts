import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ArticleModule } from './article/article.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article/article-helpers/article-list.component';
import { ArticleResolverService } from './article/article-resolver.service';


export const appRoutes: Routes = [
  { path: 'articles', component: ArticleListComponent},
  { path: 'articles/:slug', component: ArticleComponent, resolve: { article: ArticleResolverService}},
  { path: '', redirectTo: '/articles', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ArticleModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
