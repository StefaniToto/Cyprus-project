import { Project } from './project.model';


export class GetProjectsReponse {
  totalPages: number;
  count: number;
  data: Array<Project>;
}
