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
        path: 'list',
        children: [
          {
            path: '',
            loadChildren: () => import('../list-data/list-data.module').then(m => m.ListDataModule)
          },
        ]
      },



      { path: '**', redirectTo: 'login' }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule { }
