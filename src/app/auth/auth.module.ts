import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { SignUpComponent } from './sign-up.component';
import { SignInComponent } from './sign-in.component';

export const authRoutes: Routes = [
  { path: 'register', component: SignUpComponent },
  { path: 'login', component: SignInComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  declarations: [SignUpComponent, SignInComponent],
  exports: [SignUpComponent]
})
export class AuthModule { }
