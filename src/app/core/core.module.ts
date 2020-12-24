import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreBaseComponent } from './core.component';
import { CoreRoutingModule } from './core-routing.module';
import { StoreModule } from '@ngrx/store';
import { ModuleReducer } from 'src/shared/store/reducers/module.reducer';
import { ConnectSharedModule } from 'src/shared/modules/ConnectSharedModule.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatNativeDateModule } from '@angular/material/core';
import { DemoMaterialModule } from './components/navbar/navbar-module';


@NgModule({
  declarations: [CoreBaseComponent,   
    NavbarComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ConnectSharedModule,
    MatNativeDateModule,
    DemoMaterialModule,
    StoreModule.forFeature('modules', ModuleReducer),
  ],
  providers: [

  ],
  entryComponents : [

  ]
})
export class CoreModule {}
