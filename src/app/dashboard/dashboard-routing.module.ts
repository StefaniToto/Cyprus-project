import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuideComponent } from './components/guide/guide.component';
import { DashboardComponent } from './dashboard.component';
import { TestCompComponent } from './test-comp/test-comp.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent,

    children: [
      { path: 'map', component: GuideComponent },
      { path: 'test', component: TestCompComponent }
    ]    
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}

