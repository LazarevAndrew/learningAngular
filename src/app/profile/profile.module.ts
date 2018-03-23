import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { SharedModule } from '../shared/shared.module';

export const profileRoutes: Routes = [
  { path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
