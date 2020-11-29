import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreBaseComponent } from './core.component';

const routes: Routes = [
  {
    path: '',
    component: CoreBaseComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'systems',
        loadChildren: () =>
          import('./../systems/systems.module').then((m) => m.SystemsModule),
      },
     
      { path: '**', redirectTo: 'dashboard/main' }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule { }
