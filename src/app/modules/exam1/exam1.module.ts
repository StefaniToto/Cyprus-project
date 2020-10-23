import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exam1RoutingModule } from './exam1-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { AddNewDataComponent } from './components/add-edit-data-page/add-edit-data.component';
import { MainComponent } from './components/main-page/main.component';
import { ContactComponent } from './components/contact-page/contact.component';
@NgModule({
  declarations: [
  
    MainComponent,
    ContactComponent,
    AddNewDataComponent
  ],
  imports: [
    CommonModule,
    Exam1RoutingModule,   
    ReactiveFormsModule,
    FormsModule,
    FormlyModule,
    FormlyBootstrapModule,
    FormsModule,
    ReactiveFormsModule,  
    
  ]
})
export class Exam1Module { }
