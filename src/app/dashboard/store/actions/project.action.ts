import { Action } from '@ngrx/store';


export enum ProjectActionTypes {
  LOAD_PROJECTS = '[PROJECT] Get Projects',
  LOAD_PROJECTS_SUCCESS = '[PROJECT] Load Projects Success'
}

export class LoadProjectsAction implements Action {
  readonly type = ProjectActionTypes.LOAD_PROJECTS;
  constructor(public filterValue: string) {}
}

export class LoadProjectsSuccessAction implements Action {
  readonly type = ProjectActionTypes.LOAD_PROJECTS_SUCCESS;

  constructor(
    public features: any
  ) {}
}




export type ProjectAction =

  | LoadProjectsAction
  | LoadProjectsSuccessAction

