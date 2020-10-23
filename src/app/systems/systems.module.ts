import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SystemsComponent } from './systems.component';
import { SystemsRoutingModule } from './systems-routing.module';
import { StoreModule } from '@ngrx/store';
import { ModuleReducer } from '../../shared/store/reducers/module.reducer';
import { ConnectIQSharedModule } from '../../shared/modules/ConnectIQSharedModule.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddSystemModalComponent } from './components/add-system-modal/add-system-modal.component';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  declarations: [
    SystemsComponent,
    AddSystemModalComponent,
  ],
  imports: [
    CommonModule,
    SystemsRoutingModule,
    FlexLayoutModule,
    ConnectIQSharedModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forChild({
      types: [
       //  { name: 'custom-select', component: FormlySelectComponent, extends: 'select'}
      ],
      validationMessages: [
        { name: 'required', message: 'This field is required!' },
      ]
   }),
    NgbModule,
    StoreModule.forFeature('products', ModuleReducer),
 
  ],
  entryComponents: [AddSystemModalComponent],
                  
  providers: [ NgbActiveModal]
})
export class SystemsModule {}
