import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ArticleModule } from './article/article.module';
import { ApiService } from './core/services/api.service';
import { ErrorsService } from './core/services/errors.service';
import { httpInterceptorProviders } from './core/interceptors/index';
import { AuthModule } from './auth/auth.module';
import { UserService } from './core/services/user.service';

export const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ArticleModule,
    CoreModule,
    AuthModule,
    SharedModule
  ],
  providers: [
    ApiService,
    UserService,
    ErrorsService,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
