import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreBaseComponent } from './core.component';

const routes: Routes = [
  {
    path: '',
    component: CoreBaseComponent,
    children: [
      {
        path: 'dashboard',
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
      // {
      //   path: 'environment',
      //   loadChildren: () =>
      //     import('./../environment/environment.module').then((m) => m.EnvironmentModule),
      // },
      // {
      //   path: 'containers',
      //   loadChildren: () =>
      //     import('./../containers/containers.module').then(m => m.ContainersModule)
      // },
      // {
      //   path: 'transformation',
      //   loadChildren: () =>
      //     import('./../transformation/transformation.module').then(m => m.TransformationModule)
      // },
      // {
      //   path: 'data-manager',
      //   loadChildren: () =>
      //     import('./../data-manager/data-manager.module').then((m) => m.DataManagerModule),
      // },
      // {
      //   path: 'consolidation',
      //   loadChildren: () =>
      //     import('./../consolidation/consolidation.module').then((m) => m.ConsolidationModule),
      // },
      // {
      //   path: 'reports',
      //   loadChildren: () =>
      //     import('./../reports/reports.module').then((m) => m.ReportsModule),
      // },
      // {
      //   path: 'search-iq',
      //   loadChildren: () =>
      //     import('../search-iq/search-iq.module').then((m) => m.SearchIQModule),
      // },{
      //   path: 'execution-logs',
      //   loadChildren: () =>
      //     import('./../execution-logs/execution-logs.module').then(m => m.ExecutionLogsModule)

      // },
      { path: '**', redirectTo: 'dashboard/main' }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule { }
