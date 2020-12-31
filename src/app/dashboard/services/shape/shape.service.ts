import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShapeService {

  constructor(private http: HttpClient) { }

  getStateShapes(): Observable<any> {
    return this.http.get('https://raw.githubusercontent.com/spinning-spindle/lab-fe/master/trip.geojson');
  }


}
