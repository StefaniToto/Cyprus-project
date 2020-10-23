import { Action, createSelector, createFeatureSelector } from '@ngrx/store';
import { Order } from '../models/order';


export interface AppState1 {
  orders: OrdersState;
}

export interface OrdersState {
    allOrdersLoaded: boolean;
    data: Order[] | null;
}

const intialState = {
  allOrdersLoaded: false,
  data: null
}

export enum ActionTypes {
  LoadOrdersRequested = '[Orders API] Load Orders Requested',
  LoadOrders = '[Orders API] Load Orders'
}

export class LoadOrdersRequested implements Action {
  readonly type = ActionTypes.LoadOrdersRequested;
};

export class LoadOrders implements Action {
  readonly type = ActionTypes.LoadOrders;
  constructor(public payload: Order[]) {}
}

export type OrderActions = LoadOrdersRequested | LoadOrders;

export function ordersReducer(state = intialState, action) {
  switch(action.type) {
      case ActionTypes.LoadOrders:
      return {
        allOrdersLoaded: true,
        data: action.payload
      };
    default:
      return state;
  }
}

const getOrders = createFeatureSelector<any, OrdersState>('orders');

export const getAllOrders = createSelector(getOrders, state => state.data);
export const getAllOrdersLoaded = createSelector(getOrders, state => state.allOrdersLoaded);
