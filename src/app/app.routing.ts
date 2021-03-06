import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/components/login/login.component';
import { SignupComponent } from './login/components/signup/signup.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    children: [{
      path: 'login',
      loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    }],
  },
  {
    path: 'signup',
    component: SignupComponent,
    children: [{
      path: 'signup',
      loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    }],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
