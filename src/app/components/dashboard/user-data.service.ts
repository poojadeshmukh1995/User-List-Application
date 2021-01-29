import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }

  getUserList(): Observable<any> {
   return this.http.get('https://reqres.in/api/users?page=2');
  }

  getUserProfile(): Observable<any> {
   return this.http.get('https://reqres.in/api/users/2');
  }

}
