import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatSelectModule } from '@angular/material/select';

import {  NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ArchwizardModule } from 'angular-archwizard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { FormlyModule } from '@ngx-formly/core';
import { GuideComponent } from './pages/guide/guide.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { StoreModule } from '@ngrx/store';
import { ModuleReducer } from 'src/shared/store/reducers/module.reducer';
import { ConnectIQSharedModule } from 'src/shared/modules/ConnectIQSharedModule.module';
import { RulesLayoutComponent } from '../core/transformations/rules-layout/rules-layout.component';
import { FormlySelectComponent } from './components/formly-select/formly-select.component';
import { EffectsModule } from '@ngrx/effects';
import { ProjectEffect } from '../systems/store/effects/project.effects';
import { ProjectService } from '../systems/services/project.service';
import { ProjectReducer } from '../systems/store/reducers/project.reducer';
import { counterReducer } from '../systems/store/reducers/simple.reducers';
import { ordersReducer } from '../systems/store/app.store';
import { AppEffects } from '../systems/store/effects/simple.effects';
import { OrdersService } from '../systems/services/orders.service';


@NgModule({
  declarations: [
    DashboardComponent,
    GuideComponent,
    ProductCardComponent,

  ],
  imports: [

    EffectsModule.forFeature([ ProjectEffect ]),

    StoreModule.forFeature( 'orders', ordersReducer ),
    EffectsModule.forFeature([AppEffects]),


    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    ConnectIQSharedModule,
    StoreModule.forFeature('projectState', ProjectReducer),
    StoreModule.forFeature('modules', ModuleReducer), // important for dhasboard

    StoreModule.forFeature( 'count' , counterReducer ),


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

    ArchwizardModule,
    ChartsModule,
  ],
  exports: [MatCardModule],
  entryComponents: [
    RulesLayoutComponent
  ],
  providers: [
    NgbActiveModal,
    ProjectService,
    OrdersService
  ],
})
export class DashboardModule {}
