import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  makeCapitalPopup(data: any): string {
    return `<div>X: ${ data[0] }</div> <div>Y: ${ data[1] }</div>`
  }
}
