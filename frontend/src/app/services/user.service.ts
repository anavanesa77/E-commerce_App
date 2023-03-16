import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myAppUrl: string;
  private myApiUrl: string;
  public  isAdmin: boolean = false;


  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/user';
   }

   signIn(user: User): Observable<any>{
      return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, user);
   }

   login(user: User): Observable<any> {
      return this.http.post(`${this.myAppUrl}${this.myApiUrl}/login`, user);
   }
}
