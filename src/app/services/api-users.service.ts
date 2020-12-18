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
 updateUsers(updateBody){
  console.info("aipUrl should refere to URL, not a JSON file");
  //aipUrl should refere to URL, not a JSON file
  return this.http.put<User[]>(this.apiUrl,JSON.stringify(updateBody));
 }

}
