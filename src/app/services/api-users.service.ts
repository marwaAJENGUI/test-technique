import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../entity/User';

@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {
  apiUrl:string="../../assets/List-users.json";
  constructor(private http:HttpClient) {
   }
  getUsers() : Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl);
 }
}
