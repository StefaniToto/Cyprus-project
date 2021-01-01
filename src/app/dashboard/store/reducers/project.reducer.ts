import { ProjectActionTypes } from '../actions/project.action';


const initialState: {
features:any
} = { features: [] };

export function ProjectReducer(state = initialState, action) {
  switch (action.type) {
    case ProjectActionTypes.LOAD_PROJECTS:
      const features = (action.features || state.features).map((item) => {   
        if (item.id === action.features.id) return action.project;
        return item;
      });
      return { ...state, features: features };
    case ProjectActionTypes.LOAD_PROJECTS_SUCCESS:
      console.log("LOAD_PROJECTS_SUCCESS",)
      return {
        ...state,
        features: action.features,
       
      };
    default: 
      return state;
  }
}
