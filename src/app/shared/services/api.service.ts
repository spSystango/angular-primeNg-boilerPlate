import { Injectable } from '@angular/core';
import {environment as env} from '@root'
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { EMPTY, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = env.baseUrl;
  
  constructor(private http:HttpClient,) { }
  post(endpoint:string, req:any)
  {
    let param = new HttpParams();
    param = req;
    return this.http.post(this.baseUrl+endpoint,param).pipe(
      // retry(1),
      catchError(this.errorHandl)
    );
  }

  get(endpoint:string)
  {
    return this.http.get(this.baseUrl+endpoint);
  }

  delete(endpoint:string)
  {
    return this.http.get(this.baseUrl+endpoint);
  }

  put(endpoint:string, req:any)
  {
    let param = new HttpParams();
    param = req;
    return this.http.put(this.baseUrl+endpoint,param)
  }

  fetch(endpoint:string, req:any)
  {
    let param = new HttpParams();
    param = req;
    return this.http.put(this.baseUrl+endpoint,param)
  }
  
  // Error handling
  errorHandl(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      
      // Get client-side error
      errorMessage = error.error.message;
    } else {

      // Get server-side error
      errorMessage = error;
      if (error.status === 401) {
        // localStorage.clear();       
      }
    }
    console.log('errorMessage',errorMessage);
    return throwError(errorMessage);
  }

}
