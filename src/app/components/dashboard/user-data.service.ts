import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
   providedIn: 'root'
})
export class UserDataService {
   userId: number;

   constructor(private http: HttpClient) { }
   set UserId(id: number) {
      this.userId = id;
   }

   get UserId(): number {
      return this.userId;
   }
   getUserList(id: number): Observable<any> {
      return this.http.get('https://reqres.in/api/users?page=' + id);
   }

   getUserProfile(id: number): Observable<any> {
      return this.http.get('https://reqres.in/api/users/' + id);
   }

}
