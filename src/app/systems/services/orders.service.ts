import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from '../models/order';


export class OrdersService {
  fetchAllOrders(): Observable<Order[]> {
    return of([
      {
        id: 1,
        name: 'Order A'
      }, {
        id: 2,
        name: 'Order B'
      }
    ])
  }
}