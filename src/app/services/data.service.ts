import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../entity/User';

@Injectable()
export class DataService {
  private messageSource = BehaviorSubject.create();;
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(user: User) {
    this.messageSource.next(user)
    console.log("changeMessage:user="+user.nom+user.prenom+" nb="+user.nombre_enfants)
  }
  
}