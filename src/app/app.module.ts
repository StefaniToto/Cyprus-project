import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';


import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToasterModule } from 'angular2-toaster';
import { ServiceWorkerModule } from '@angular/service-worker';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent, 
    

  ],
  imports: [
 
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    FormlyBootstrapModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxDatatableModule,
    BrowserAnimationsModule, // required animations module
    ToasterModule.forRoot(), 
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
   
  
 
  ],
  exports : [
    FormsModule,
    FormlyBootstrapModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToasterModule

  ],
  providers: [



  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
