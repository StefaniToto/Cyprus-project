import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuideComponent } from './components/guide/guide.component';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent,

    children: [
      { path: 'map', component: GuideComponent },    
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}

