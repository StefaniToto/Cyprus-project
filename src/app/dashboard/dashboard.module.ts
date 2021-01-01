import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PopupService } from './services/popup/popup.service';
import { StoreModule } from '@ngrx/store';
import { ProjectReducer } from './store/reducers/project.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProjectEffect } from './store/effects/project.effects';
import { ProjectService } from './services/project.service';
import { SocketService } from './services/socket/socket.service';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { DashboardComponent } from './dashboard.component';
import { GuideComponent } from './components/guide/guide.component';
const config: SocketIoConfig = { url: 'http://localhost:3080', options: {} };

@NgModule({
  declarations: [
    DashboardComponent,
    GuideComponent, 

  ],
  imports: [
    HttpClientModule,
    CommonModule,
    DashboardRoutingModule,    
    StoreModule.forFeature('projectState', ProjectReducer),
    EffectsModule.forFeature([ProjectEffect]),
    SocketIoModule.forRoot(config),
 

  ],
  exports: [
 
  ],
  entryComponents: [

    
  ],
  providers: [
    PopupService,
    ProjectService,
    SocketService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}

  ],
})
export class DashboardModule { }
