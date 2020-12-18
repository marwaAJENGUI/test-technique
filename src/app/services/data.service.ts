import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../entity/User';

@Injectable()
export class DataService {
  u=new User("nom","prenom",0);
  private messageSource = new BehaviorSubject(this.u);
  //userList:User[]=[];
  //private messageSource = new BehaviorSubject(this.userList);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(user: User) {
    this.messageSource.next(user)
    console.log("changeMessage:user="+user.nom+user.prenom+" nb="+user.nombre_enfants)
  }
  /*
  changeMessage(users: User[]) {
    this.messageSource.next(users)
  }
*/
}