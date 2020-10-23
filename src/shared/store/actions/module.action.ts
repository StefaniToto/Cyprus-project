import { Action } from '@ngrx/store';

export enum ModuleActionTypes {
  PRODUCT_CREATED = '[GUIDE] Product Created'
}

export class ProductCreated implements Action {
    readonly type = ModuleActionTypes.PRODUCT_CREATED;

    constructor(public productType: string) {}
}

export type ModuleActions = ProductCreated;