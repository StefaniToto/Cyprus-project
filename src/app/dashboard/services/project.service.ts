import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class ProjectService {
 url: string;
  node: string;

  constructor(private _httpClient: HttpClient) {
  this.url = 'https://raw.githubusercontent.com/spinning-spindle/lab-fe/master/trip.geojson';
  this.node = 'http://localhost:3080/api/users'
  }


  getProjects( ): Observable<any> {
    return this._httpClient.get<any>(
      `${this.node}`,
      {

      }
    );
  }
}
