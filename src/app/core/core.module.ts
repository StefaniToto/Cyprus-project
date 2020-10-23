import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreBaseComponent } from './core.component';
import { CoreRoutingModule } from './core-routing.module';
import { StoreModule } from '@ngrx/store';
import { ModuleReducer } from 'src/shared/store/reducers/module.reducer';
import { ConnectIQSharedModule } from 'src/shared/modules/ConnectIQSharedModule.module';
import { RulesLayoutComponent } from './transformations/rules-layout/rules-layout.component';


@NgModule({
  declarations: [CoreBaseComponent,
    RulesLayoutComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ConnectIQSharedModule,
    StoreModule.forFeature('modules', ModuleReducer),
  ],
  providers: [

  ],
  entryComponents : [
    RulesLayoutComponent
  ]
})
export class CoreModule {}
