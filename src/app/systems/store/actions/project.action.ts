import { Action } from '@ngrx/store';
import { Project } from 'src/app/dashboard/models/project.model';


export enum ProjectActionTypes {
  LOAD_PROJECTS = '[PROJECT] Get Projects',
  LOAD_PROJECTS_SUCCESS = '[PROJECT] Load Projects Success'
}

export class LoadProjectsAction implements Action {
  readonly type = ProjectActionTypes.LOAD_PROJECTS;
  constructor(public filterValue: string, public pageIndex: number) {}
}

export class LoadProjectsSuccessAction implements Action {
  readonly type = ProjectActionTypes.LOAD_PROJECTS_SUCCESS;

  constructor(
    public projectList: Array<Project>,
    public totalPages: number,
    public count: number
  ) {}
}




export type ProjectAction =

  | LoadProjectsAction
  | LoadProjectsSuccessAction

