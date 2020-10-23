import { Project } from 'src/app/dashboard/models/project.model';
import { ProjectActionTypes } from '../actions/project.action';


const initialState: {
  projects: Array<Project>;
  totalPages: number;
  count: number;
} = { projects: [], totalPages: 0, count: 0 };

export function ProjectReducer(state = initialState, action) {
  switch (action.type) {
    case ProjectActionTypes.LOAD_PROJECTS:
      const projects = (action.projects || state.projects).map((item) => {   
        if (item.id === action.project.id) return action.project;
        return item;
      });
      return { ...state, projects: projects };
    case ProjectActionTypes.LOAD_PROJECTS_SUCCESS:
      console.log("LOAD_PROJECTS_SUCCESS",)
      return {
        ...state,
        projects: action.projectList,
        totalPages: action.totalPages + 1,
        count: action.count,
      };
    default: 
      return state;
  }
}
