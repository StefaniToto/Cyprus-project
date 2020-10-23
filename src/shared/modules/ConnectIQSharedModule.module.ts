import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgbModule,
  NgbModal,
  NgbActiveModal,
} from '@ng-bootstrap/ng-bootstrap';
import { CodeEditorModule } from '@ngstack/code-editor';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import {
  GridModule,
  ExcelModule,
  PDFModule,
} from '@progress/kendo-angular-grid';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { ChartsModule } from 'ng2-charts';
import { AddSystemModalComponent } from 'src/app/systems/components/add-system-modal/add-system-modal.component';
import { GenericModalComponent } from '../components/generic-modal/generic-modal.component';
import { ProjectReducer } from 'src/app/systems/store/reducers/project.reducer';


export let ModuleInjector;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormlyBootstrapModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    LayoutModule,
    CodeEditorModule.forRoot({
      typingsWorkerUrl: 'assets/workers/typings-worker.js',
      baseUrl: 'assets/monaco',
    }),

    LayoutModule,
    DropDownsModule,
    GridModule,
    PDFModule,
    ExcelModule,
    TooltipModule,
    ChartsModule,

    StoreModule.forFeature('projectState', ProjectReducer),
  ],
  declarations: [
    GenericModalComponent

  ],
  exports: [
 
    NgbModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
    GridModule,
    PDFModule,
    ExcelModule,
    DropDownsModule,
    TreeViewModule,
    TooltipModule,
    ChartsModule,
    GenericModalComponent
  ],
  providers: [
    NgbModal,
    NgbActiveModal
  ],
  entryComponents: [
    AddSystemModalComponent

  ],
})
export class ConnectIQSharedModule {
  constructor(private moduleInjector: NgbModal) {
    ModuleInjector = this.moduleInjector;
  }
}
