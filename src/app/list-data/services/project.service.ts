import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class ProjectService {
 url: string;

  constructor(private _httpClient: HttpClient) {
  this.url = 'https://my-json-server.typicode.com/stefani0/GreeceTest/customers';
  }


  getProjects( ): Observable<any> {
    return this._httpClient.get<any>(
      `${this.url}`,
      {

      }
    );
  }

  // getProjects(
  //   filterValue = '',
  //   pageIndex = 0,
  //   pageSize = 1000,
  //   sortDirection = 'asc'
  // ): Observable<GetProjectsReponse> {
  //   return this._httpClient.get<GetProjectsReponse>(
  //     `${this.url}/projects/`,
  //     {
  //       // params: new HttpParams()
  //       //   .set('pageIndex', pageIndex.toString())
  //       //   .set('pageSize', pageSize.toString())
  //       //   .set('sortDirection', sortDirection.toString())
  //       //   .set('filterValue', filterValue.toString()),
  //     }
  //   );
  // }
}
