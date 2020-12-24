import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDataRoutingModule } from './list-data-routing.module';
import { ListDataComponent } from './list-data.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AddNewDataComponent } from './components/add-edit-data-page/add-edit-data.component';
import { ContactComponent } from './components/contact-page/contact.component';
import { MainComponent } from './components/main-page/main.component';
import { formlyConfig } from '../core/utility/configs';




@NgModule({
  declarations: [
    ListDataComponent,
    ContactComponent,
    AddNewDataComponent,
    MainComponent,

   
  ],
  imports: [
    CommonModule,
    ListDataRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyModule.forRoot(formlyConfig),
    FormlyBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
  ]
})
export class ListDataModule { }
