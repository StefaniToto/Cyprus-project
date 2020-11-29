import { Module } from '../models/module.model';
import { ModuleActionTypes } from '../actions/module.action';
import { AddSystemModalComponent } from 'src/app/systems/components/add-system-modal/add-system-modal.component';
import { ModuleInjector } from 'src/shared/modules/ConnectIQSharedModule.module';


const initialState: Array<Module> = [
  {
    title: 'Dashboard',
    img: 'dashboard',
    url: '/dashboard/main'
  },
  {
    title: 'Systems',
    img: 'system',
    url: '/systems/systemslist',
    created: false,
    openCreateModal: () => {
      ModuleInjector.open(AddSystemModalComponent, { centered: true, backdrop: 'static' });
    }
  },

  {
    title: 'Transformation Schema',
    img: 'transformation',
    url: '/transformation/transformation-schema'
  },
 

];

export function ModuleReducer(state: Array<Module> = initialState, action) {

  // console.log("ModuleReducer created return state", action.type)
  switch (action.type) {
    
    case ModuleActionTypes.PRODUCT_CREATED:
      return state.map(module => {
      //  console.log("module created return state")
        if (module.title === action.productType) {
          return { ...module, created: true };
        }
        return module;
      });
    default:
     // console.log(" return state", state)
      return state;
  }
}
