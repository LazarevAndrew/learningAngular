import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Error404Component } from './error-pages/error-404.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

export const sharedRoutes: Routes = [
  { path: '404', component: Error404Component},
  { path: '**', redirectTo: '/404'}
];


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(sharedRoutes)
  ],
  declarations: [
    Error404Component
  ],
  exports: [
    Error404Component
  ]
})
export class SharedModule { }
