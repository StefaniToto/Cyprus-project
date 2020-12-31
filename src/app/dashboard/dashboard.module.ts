import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnectSharedModule } from 'src/shared/modules/ConnectSharedModule.module';
import { MarkerService } from './services/markers/marker.service';
import { HttpClientModule } from '@angular/common/http';
import { PopupService } from './services/popup/popup.service';
import { StoreModule } from '@ngrx/store';
import { ProjectReducer } from './store/reducers/project.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProjectEffect } from './store/effects/project.effects';
import { ProjectService } from './services/project.service';
import { SocketService } from './services/socket/socket.service';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { GuideComponent } from './components/guide/guide.component';
import { TestCompComponent } from './test-comp/test-comp.component';
const config: SocketIoConfig = { url: 'http://localhost:3080', options: {} };

@NgModule({
  declarations: [
    DashboardComponent,
    GuideComponent,
    TestCompComponent

  ],
  imports: [
    HttpClientModule,

    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    ConnectSharedModule,
    StoreModule.forFeature('projectState', ProjectReducer),
    EffectsModule.forFeature([ProjectEffect]),
    SocketIoModule.forRoot(config),

  ],
  exports: [
    MatCardModule,
  ],
  entryComponents: [
    GuideComponent,
    TestCompComponent,
    
  ],
  providers: [
    NgbActiveModal,
    MarkerService,
    PopupService,
    ProjectService,
    SocketService

  ],
})
export class DashboardModule { }
