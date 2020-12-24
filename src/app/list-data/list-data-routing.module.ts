import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewDataComponent } from './components/add-edit-data-page/add-edit-data.component';
import { ContactComponent } from './components/contact-page/contact.component';
import { MainComponent } from './components/main-page/main.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: MainComponent,
        data: {
          title: 'Main Page'
        },
      },
      {
        path: 'contact',
        component: ContactComponent,
        data: {
          title: 'Contact Page'
        },
      },
      {
        path: 'add',
        component: AddNewDataComponent,
        data: {
          title: 'Main Page'
        },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListDataRoutingModule { }
