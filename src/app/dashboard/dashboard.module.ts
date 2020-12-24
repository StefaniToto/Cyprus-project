import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatSelectModule } from '@angular/material/select';
import {  NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { GuideComponent } from './pages/guide/guide.component';
import { StoreModule } from '@ngrx/store';
import { ModuleReducer } from 'src/shared/store/reducers/module.reducer';
import { ConnectSharedModule } from 'src/shared/modules/ConnectSharedModule.module';
import { FormlySelectComponent } from './components/formly-select/formly-select.component';
import { EffectsModule } from '@ngrx/effects';
import { ProjectService } from '../list-data/services/project.service';
import { ProjectEffect } from '../list-data/store/effects/project.effects';
import { ProjectReducer } from '../list-data/store/reducers/project.reducer';




@NgModule({
  declarations: [
    DashboardComponent,
    GuideComponent

  ],
  imports: [

    EffectsModule.forFeature([ ProjectEffect ]),
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    ConnectSharedModule,
    StoreModule.forFeature('projectState', ProjectReducer),
    StoreModule.forFeature('modules', ModuleReducer), // important for dhasboard
  


    FormlyModule.forChild({
      types: [
        {
          name: 'custom-select',
          component: FormlySelectComponent,
          extends: 'select',
        },
      ],
      validationMessages: [
        { name: 'required', message: 'This field is required!' },
      ],
    }),

 
  ],
  exports: [MatCardModule],
  entryComponents: [

  ],
  providers: [
    NgbActiveModal,
    ProjectService,
 
  ],
})
export class DashboardModule {}
