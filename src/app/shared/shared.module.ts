import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { Error404Component } from './errors/error-404.component';
import { ErrorAlertsComponent } from './errors/error-alerts.component';

export const sharedRoutes: Routes = [
  { path: '404', component: Error404Component }
];


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(sharedRoutes)
  ],
  declarations: [
    Error404Component,
    ErrorAlertsComponent
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    Error404Component,
    ErrorAlertsComponent
  ]
})
export class SharedModule { }
