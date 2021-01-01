import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import {
  LoadProjectsAction,
  ProjectActionTypes,
  LoadProjectsSuccessAction,

} from '../actions/project.action';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Store } from '@ngrx/store';
import { AppState } from '../../models/app-state.model';
import { ProjectService } from '../../services/project.service';


@Injectable()
export class ProjectEffect {
  
  loadProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType<LoadProjectsAction>(ProjectActionTypes.LOAD_PROJECTS),
      switchMap((action) =>
        this._projectService
          .getProjects()
          .pipe(
            map((features) => {
              console.log("effects created", features)
              return new LoadProjectsSuccessAction(
                features,
            
              );
            },

            )
          )
      )
    )
  );


  

  constructor(
    private actions$: Actions,
    private _projectService: ProjectService,
    private _modalService: NgbModal,
    private store: Store<AppState>
  ) {}
}
