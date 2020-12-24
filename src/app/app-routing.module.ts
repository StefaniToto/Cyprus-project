import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './core/components/default-layout/default-layout.component';
import { LoginComponent } from './core/components/login/login.component';
import { Error404Component } from './core/components/error404/error404.component';
import { AuthGuard } from './core/helpers';


const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '404',
    component: Error404Component
  },

  { path: '', 
  canActivate: [AuthGuard],  
  loadChildren: () => import('./core/core.module').then(m => m.CoreModule) }
  ,
  { path: '**', component: Error404Component }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
