import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { Error404Component } from './errors/error-404.component';
import { ErrorAlertsComponent } from './errors/error-alerts.component';

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
    Error404Component,
    ErrorAlertsComponent
  ],
  exports: [
    Error404Component,
    ErrorAlertsComponent
  ]
})
export class SharedModule { }
