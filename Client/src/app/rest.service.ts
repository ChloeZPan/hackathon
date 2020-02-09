import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
const endpoint = 'http://127.0.0.1:5000/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class RestService {
  

  constructor(private http: HttpClient) { }


  // async getDetails(id): Promise<any> {
  //   console.log('ok');
  //   try {
  //     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //     let response = await this.http
  //       .get(endpoint + 'getDetails/7789047517', {Httpheaders: headers})
  //       .toPromise();
  //     return response as [];
  //   } catch (error) {
  //     await console.log('getPMSData Error: ', error);
  //   }
  // }

  getProducts(id): Observable<any> {
    return this.http.get(endpoint + 'getDetails/'+ id, httpOptions);
  }

  createProfile(param): Observable<any> {
    return this.http.get(endpoint + 'CreateProfile/'+ param, httpOptions);
  }

  getPeople(name): Observable<any> {
    return this.http.get(endpoint + 'getPeople/'+ name, httpOptions);
  }



}
