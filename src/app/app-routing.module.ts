import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './core/components/default-layout/default-layout.component';
import { LoginComponent } from './core/components/login/login.component';
import { Error404Component } from './core/components/error404/error404.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: '404',
    component: Error404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: 'module1',
    component: DefaultLayoutComponent,
    data: {
      title: 'HOME'
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/exam1/exam1.module').then(m => m.Exam1Module)
      },
    ]
  },
  
  { path: 'module2', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) }
  ,
  { path: '**', component: Error404Component }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
