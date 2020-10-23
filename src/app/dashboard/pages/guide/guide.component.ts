import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Module } from '../../../../shared/store/models/module.model';
import { Store } from '@ngrx/store';
import { takeWhileAlive, AutoUnsubscribe } from 'take-while-alive';
import { RulesLayoutComponent } from 'src/app/core/transformations/rules-layout/rules-layout.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { SelectOption } from '../../models/select-option';
import { Project } from '../../models/project.model';
import { State, process } from '@progress/kendo-data-query';
import { Observable } from 'rxjs';
import { Order } from 'src/app/systems/models/order';
import { AppState } from 'src/shared/store/models/app-state.model';
import { LoadProjectsAction } from 'src/app/systems/store/actions/project.action';



@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})

@AutoUnsubscribe()
export class GuideComponent implements OnInit {


  selectedProject: Project;

  orders$: Observable<Order[]>;


  constructor(
    private store$: Store<AppState>,
    private router: Router,
    private _modalService: NgbModal,
  ) {
  
  }

  ngOnInit() {


     this.store$.dispatch(new LoadProjectsAction("", 1));
     this.store$.select('projectState').subscribe((state => console.log('state here', state)))


  }






}
