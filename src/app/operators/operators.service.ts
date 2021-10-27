import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface post {
  id: number;
  userId: number;
  body: string,
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class OperatorsService {

  constructor(
    private _http: HttpClient
  ) { }

  //observe body/response/headers
  getPosts(id: number): Observable<HttpResponse<post>> {
    return this._http.get<post>(`https://jsonplaceholder.typicode.com/posts/${id}`, {observe: 'response'});
  }

  putPosts(id: number): Observable<post> {
    return this._http.post<post>(`https://jsonplaceholder.typicode.com/posts/${id}`, id, {
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        name: 'sanchit',
        age: '24'
      }
    }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(httpError: HttpErrorResponse) {
    return throwError(
      'Something bad happened; please try again later.');
  }
}
