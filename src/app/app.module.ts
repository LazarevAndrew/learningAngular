import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ArticleModule, articleRoutes } from './article/article.module';
import { ApiService } from './core/services/api.service';
import { ErrorsService } from './core/services/errors.service';
import { httpInterceptorProviders } from './core/interceptors/index';
import { AuthModule, authRoutes } from './auth/auth.module';
import { UserService } from './core/services/user.service';
import { TokenService } from './core/services/token.service';
import { UserDataResolver } from './resolvers/user-data.resolver';
import { ContentComponent } from './content.component';
import { ProfileModule, profileRoutes } from './profile/profile.module';

export const appRoutes: Routes = [
  {
    path: '',
    component: ContentComponent,
    resolve: { user: UserDataResolver },
    children: [ ...articleRoutes, ...authRoutes, ...profileRoutes]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ArticleModule,
    CoreModule,
    AuthModule,
    SharedModule,
    ProfileModule
  ],
  providers: [
    ApiService,
    UserService,
    ErrorsService,
    httpInterceptorProviders,
    TokenService,
    UserDataResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
