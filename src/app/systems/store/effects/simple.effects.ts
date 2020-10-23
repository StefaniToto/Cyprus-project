import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { withLatestFrom, exhaustMap, filter, map } from 'rxjs/operators';
import { ActionTypes, AppState1, getAllOrdersLoaded, LoadOrders, LoadOrdersRequested } from '../app.store';
import { OrdersService } from '../../services/orders.service';


@Injectable()
export class AppEffects {
  @Effect()
  loadOrdersRequested$ = this.actions$.pipe(
    ofType<LoadOrdersRequested>(ActionTypes.LoadOrdersRequested),
    withLatestFrom(this.store.select(getAllOrdersLoaded)),
    filter(([_, loaded]) => !loaded),
    exhaustMap(() => this.ordersService.fetchAllOrders().pipe(
      map(result => new LoadOrders(result))
    ))
  );

  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private ordersService: OrdersService
  ) {}
}

