import { Project } from 'src/app/dashboard/models/project.model';
import { Module } from './module.model';


export class AppState {
    modules: Array<Module>;
    projectState: { projects: Array<Project>; totalPages: number; count: number };
    selectedProject: Project;


}
